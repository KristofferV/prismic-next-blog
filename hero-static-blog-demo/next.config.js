const Prismic = require('prismic-javascript')
const client = require('./static-api').client

module.exports = {
    exportTrailingSlash: true,
    exportPathMap: async function () {
      const paths = {
        '/': { page: '/' },
      };
      
      const postGraphQuery = `{
        post {
          uid
        }
      }`
      const posts = await client.query(
        Prismic.Predicates.at('document.type', 'post'),
        { 
            orderings: '[my.post.date desc]',
            graphQuery: postGraphQuery
        }
      )
      posts.results.forEach((post) => {
        console.log("Generating page ", post.uid)
        paths[`/blog/${post.uid}`] = {
          page: `/post`,
          query: { uid: post.uid },
        };
      });
  
      return paths;
    },
  };