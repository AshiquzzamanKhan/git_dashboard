import { graphql } from "@octokit/graphql";

export const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.VUE_APP_GIT_TOKEN}`
  }
});
