const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_GITHUB_ACCESS_TOKEN}`, // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
        queries: [
          [`query($repoCount: Int) {
              viewer {
                name
                bio
                avatarUrl
                repositories(affiliations: [OWNER], first: $repoCount) {
                  totalCount
                  edges {
                    node {
                      url
                      name
                      description
                      primaryLanguage {
                        name
                      }
                      isArchived
                      isFork
                      updatedAt
                    }
                  }
                }
              }
            }`, { repoCount: 100 }],
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
  ],
}
