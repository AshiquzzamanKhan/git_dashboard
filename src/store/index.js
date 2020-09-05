import Vue from "vue";
import Vuex from "vuex";
import { graphqlWithAuth } from "../api";
import * as types from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    [types.IS_VALID]: false,
    [types.RATE_LIMIT]: 0,

    profile: {},
    repos: [],

    total_langs: {},
    bar_series: [],
  },

  getters: {
    [types.GET_IS_VALID]: state => {
      return state.types.IS_VALID;
    },

    search_provided: state => {
      return state.search_provided;
    },
    profile: state => {
      return state.profile;
    },
    repos: state => {
      return state.repos.slice(0, 3);
    },
    get_bar_series: state => {
      return state.bar_series;
    },
    get_rate_remaining: state => {
      return state.rate_limit_exceeds;
    },
  },

  mutations: {
    [types.SET_IS_VALID]: (state, status) => {
      state.types.IS_VALID = status;
    },
    [types.SET_RATE_LIMIT]: (state, status) => {
      state.types.RATE_LIMIT = status;
    },
    [types.CLEAR_ALL_DATA]: state => {
      state.types.IS_VALID = false;
      state.types.RATE_LIMIT = 0;
    },

    set_search: (state, boolData) => {
      state.search_provided = boolData;
    },
    set_validity: (state, payload) => {
      state.is_valid_user = payload;
    },
    set_profile: (state, profile_obj) => {
      state.profile = profile_obj;
    },
    set_repos: (state, repo_array) => {
      state.repos = repo_array;
    },
    set_rate_limit: (state, rateLimit_remaining) => {
      if (rateLimit_remaining < 10) {
        state.rate_limit_exceeds = true;
      } else state.rate_limit_exceeds = false;
    },
    clear_data: state => {
      (state.total_langs = {}),
        (state.bar_series = []),
        (state.search_provided = false);
    },
    create_total_langs: state => {
      for (let i = 0; i < state.repos.length; i++) {
        // each repo.nodes
        const each_repo_langs_array = state.repos[i].languages.nodes;
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
    },
  },

  actions: {
    // fetch the user
    fetch_user: async ({ commit, state }, username) => {
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
          user: `${username}`,
        }
      );

      commit("set_rate_limit", response.rateLimit.remaining); // check if api call limit exceeds

      if (!state.rate_limit_exceeds) {
        if (response.user) {
          commit("set_validity", true);
          if (state.is_valid_user) {
            commit("set_profile", response.user);
            commit("set_repos", response.user.repositories.nodes);
            commit("create_total_langs");
            commit("create_bar_series");
          }
        } else {
          commit("set_validity", false);
        }
      }
    },
  },

  modules: {},
});
