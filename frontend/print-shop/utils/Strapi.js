import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.STORE_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)
export default strapi;
export { apiUrl}