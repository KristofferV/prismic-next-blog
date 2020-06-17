const Prismic = require('prismic-javascript')

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
const apiEndpoint = 'https://hero-static-blog-demo.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
const accessToken = ''

const client = Prismic.client(apiEndpoint, { accessToken })

module.exports = {
    client
}