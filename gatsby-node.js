
exports.createPages = async ({ graphql, actions }) => {
  
  // In theory should be able to do redirects here, but implementation seems a bit cranky
  // Note: does not work in develop mode. Use `npm run build && npm run serve`
  // https://support.gatsbyjs.com/hc/en-us/articles/1500003051241-Working-with-Redirects-and-Rewrites
  /*
    const { createRedirect } = actions

    createRedirect({
      fromPath: `/nca/`,
      toPath: `/nca50/`,
      redirectInBrowser: true,
      isPermanent: true,
    })
    */
  }