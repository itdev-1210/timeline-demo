const prod = process.env.NODE_ENV == 'production'
module.exports = {
    'process.env.API_URL': prod ? 'http://dev.api.jobsfair.io' : 'http://webrexstudio.com:4003',
}                   