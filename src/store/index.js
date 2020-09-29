import Vue from 'vue'
import Vuex from 'vuex'
import { graphqlWithAuth } from '../api'
import * as types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    [types.IS_VALID]: false,
    [types.RATE_LIMIT]: 0,
    [types.IS_LOADING]: false,
    [types.PROFILE_OBJ]: {},
    [types.REPOS_ARRAY]: [],
    [types.RATING_GAUGE]: 0,
    [types.TOTAL_LANG_OBJ]: {},

    total_langs: {},
    bar_series: []
  },

  getters: {
    [types.GET_IS_VALID]: state => {
      return state[types.IS_VALID]
    },
    [types.GET_IS_LOADING]: state => {
      return state[types.IS_LOADING]
    },
    [types.GET_PROFILE_OBJ]: state => {
      return state[types.PROFILE_OBJ]
    },
    [types.GET_REPOS_ARRAY]: state => {
      return state[types.REPOS_ARRAY].slice(0, 3)
    },

    get_bar_series: state => {
      return state.bar_series
    }
  },

  mutations: {
    [types.SET_IS_VALID]: (state, status) => {
      state[types.IS_VALID] = status
    },
    [types.SET_IS_LOADING]: (state, status) => {
      state[types.IS_LOADING] = status
    },
    [types.SET_PROFILE_OBJ]: (state, obj) => {
      state[types.PROFILE_OBJ] = obj
    },
    [types.SET_REPOS_ARRAY]: (state, arr) => {
      state[types.REPOS_ARRAY] = arr
    },
    [types.CALC_RATING]: state => {
      // do calculations of rating block
      const _profile = state[types.PROFILE_OBJ]
      const _commits =
        _profile.contributionsCollection.contributionCalendar
          .totalContributions
      const _contribs = _profile.repositoriesContributedTo.totalCount
      const _issues = _profile.issues.totalCount
      const _pr = _profile.pullRequests.totalCount
      const _stars = _profile.starredRepositories.totalCount
      const _reposCount = _profile.repositories.totalCount
      const _total_lang = Object.keys(state[types.TOTAL_LANG_OBJ]).length
      const _points =
        _commits / _reposCount +
        _contribs / _reposCount +
        _issues / _reposCount +
        _pr / _reposCount +
        _stars / _reposCount +
        _total_lang / _reposCount
      console.log(_points)
      console.log(_total_lang)

      // get commit + contribution + issues + pr + stars / by total repos count
      // normalize to 0- 1 scale
      // get percentage
    },

    [types.SET_TOTAL_LANG_OBJ]: state => {
      for (let i = 0; i < state[types.REPOS_ARRAY].length; i++) {
        // each repo.nodes
        const each_repo_langs = state[types.REPOS_ARRAY][i].languages.nodes
        for (let v = 0; v < each_repo_langs.length; v++) {
          if (each_repo_langs[v].name in state[types.TOTAL_LANG_OBJ]) {
            state[types.TOTAL_LANG_OBJ][each_repo_langs[v].name] += 1
          } else {
            state[types.TOTAL_LANG_OBJ][each_repo_langs[v].name] = 1
          }
        }
      }
    },
    create_bar_series: state => {
      Object.keys(state.total_langs).forEach(key => {
        state.bar_series.push({ name: key, data: [state.total_langs[key]] })
      })
    }
  },

  actions: {
    // fetch the user
    [types.ASYNC_FETCH_USER]: async ({ commit }, username) => {
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
            bio,
            url,
            followers{
              totalCount
            },
            contributionsCollection {
              contributionCalendar {
               totalContributions
             }
            },
            starredRepositories {
              totalCount
            },
            repositoriesContributedTo{
              totalCount
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
            }
          }
        }`,
        {
          user: `${username}`
        }
      )
      console.log(response)
      if (response.rateLimit.remaining > 10) {
        if (response.user) {
          commit(types.SET_IS_VALID, true) // set validity true
          commit(types.SET_PROFILE_OBJ, response.user) // set user profile
          commit(types.SET_REPOS_ARRAY, response.user.repositories.nodes) // set repo array
          commit(types.SET_TOTAL_LANG_OBJ) // set language obj array
          // set rating
          commit(types.CALC_RATING)
        }
      }
      commit(types.SET_IS_LOADING, false)
      // if (!state.rate_limit_exceeds) {
      //   if (response.user) {
      //     commit("set_validity", true);
      //     if (state.is_valid_user) {
      //       commit("set_profile", response.user);
      //       commit("set_repos", response.user.repositories.nodes);
      //       commit("create_total_langs");
      //       commit("create_bar_series");
      //     }
      //   } else {
      //     commit("set_validity", false);
      //   }
      // set loading to false
      // commit(types.SET_IS_LOADING, false);
      // check rate limits
      // check user exist
    },
    [types.CLEAR_ALL_DATA]: ({ commit }) => {
      commit(types.SET_PROFILE_OBJ, {}) // clear profile obj
      commit(types.SET_REPOS_ARRAY, []) // clear repos
      commit(types.SET_IS_VALID, false) // set validity to false
    }
  },

  modules: {}
})
