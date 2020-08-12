import Vue from "vue";
import Vuex from "vuex";
import { graphqlWithAuth } from "../api";
import * as types from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    is_valid: false,
    profile: {},
    repos: [],
    total_repos: [],
    curr_rating_gauge_param: null
  },

  getters: {
    validity: state => {
      return state.is_valid;
    },
    profile: state => {
      return state.profile;
    },
    repos: state => {
      return state.repos.slice(0, 3);
    },
    rating_gauge: state => {
      return state.rating_gauge;
    }
  },

  mutations: {
    set_validity: (state, payload) => {
      state.is_valid = payload;
    },
    set_profile: (state, profile_obj) => {
      state.profile = profile_obj;
    },
    set_repos: (state, repo_array) => {
      state.repos = repo_array;
    }
  },

  actions: {
    fetch_user: async ({ commit }, username) => {
      // axios call to git api
      const response = await graphqlWithAuth(
        `query($user:String!) { 
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
        commit("set_profile", response.user);
        commit("set_repos", response.user.repositories.nodes);
      } else {
        commit("set_validity", false);
      }
      // if (response)
      // commit mutation to state states
    },
    create_dognut: () => {
      // get languages.nodes.name for all
      // create an object with name : used
      // create series
    }
  },

  modules: {}
});
