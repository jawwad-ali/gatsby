var path = require("path")
// building the page on buildtime
// exports.createPages = async function ({ actions }) {

//     actions.createPage({
//         path: "dynamic",
//         component: require.resolve(`./src/template/dynamic.js`),
//         context: {
//             // Data passed to context is available
//             // in pageContext props of the template component
//             name: "Ali",
//             description: "My name is Ali and I am learning Gatsby :) ",
//         },
//     })

// }

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
// build pages on run time
// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage } = actions

//     if (page.path.match(/^\/product/)) {
//         page.matchPath = "/product/*"

//         // Update the page.
//         createPage(page)
//     }
// }

// second time for practice
// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage } = actions

//     if (page.path.match(/^\/car/)) {
//         page.matchPath = "/car/*"

//         // Update the page.
//         createPage(page)
//     }
// }

// fetching data from  GRAPHQL
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    const result = await graphql(`
        {
            allContentfulBootcamp {
                nodes {
                  slug
                  title
                  date(fromNow: true)
                  desc {
                    json
                  }
                }
              }
        }
    `)
    
    // fetching contentful data through this foreach loop
    result.data.allContentfulBootcamp.nodes.forEach((obj) => {
        createPage({
            path: `/product/${obj.slug}`,
            component: path.resolve("./src/template/graphqlproduct.js"),
            context: {
                itemDetails: obj
            }
        })
    })
}