import Vue from "vue";
import Vuex from "vuex";
import { graphqlWithAuth } from "../api";
import * as types from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    is_valid_user: false,
    profile: {},
    repos: [],

    rete_limit: {},

    total_langs: {},
    bar_series: [],
    total_repos: []
  },

  getters: {
    check_valid_user: state => {
      return state.is_valid_user;
    },
    profile: state => {
      return state.profile;
    },
    repos: state => {
      return state.repos.slice(0, 3);
    },
    rating_gauge: state => {
      return state.rating_gauge;
    },

    get_bar_series: state => {
      return state.bar_series;
    }
  },

  mutations: {
    set_validity: (state, payload) => {
      state.is_valid_user = payload;
    },
    set_profile: (state, profile_obj) => {
      state.profile = profile_obj;
    },
    set_repos: (state, repo_array) => {
      state.repos = repo_array;
    },
    set_rate_limit: (state, rateLimit_obj) => {
      state.rate_limit = rateLimit_obj;
    },
    clear_data: state => {
      (state.total_langs = {}), (state.bar_series = []);
    },
    create_total_langs: state => {
      for (let i = 0; i < state.repos.length; i++) {
        // each repo.nodes
        let each_repo_langs_array = state.repos[i].languages.nodes;
        for (let v = 0; v < each_repo_langs_array.length; v++) {
          if (each_repo_langs_array[v].name in state.total_langs) {
            state.total_langs[each_repo_langs_array[v].name] += 1;
          } else {
            state.total_langs[each_repo_langs_array[v].name] = 1;
          }
        }
      }
    },
    create_bar_series: state => {
      Object.keys(state.total_langs).forEach(key => {
        state.bar_series.push({ name: key, data: [state.total_langs[key]] });
      });
    }
  },

  actions: {
    fetch_user: async ({ commit }, username) => {
      // axios call to git api
      const response = await graphqlWithAuth(
        `query($user:String!) { 
          rateLimit {
            limit,
            remaining,
            resetAt
          },
          user(login:$user){
            avatarUrl,
            name,
            createdAt,
            location,
            company,
            bio,
            starredRepositories {
              totalCount
            },
            repositoriesContributedTo{
              totalCount
            },
            contributionsCollection {
              contributionCalendar {
               totalContributions
             }
            },
            issues{
              totalCount
            },
            pullRequests{
              totalCount
            },
            repositories(first:80, orderBy:{field:CREATED_AT, direction:DESC}){
              totalCount,
              nodes{
                name,
                createdAt,
                languages(first:5){
                  nodes{
                    name
                  }
                },
                description
              }
            },
            followers{
              totalCount
            },
            url
          }
        }`,
        {
          user: `${username}`
        }
      );
      if (response.user) {
        commit("set_validity", true);
        commit("set_rate_limit", response.rateLimit);

        commit("set_profile", response.user);
        commit("set_repos", response.user.repositories.nodes);

        commit("create_total_langs");
        commit("create_bar_series");
      } else {
        commit("set_validity", false);
      }
    }
  },

  modules: {}
});
