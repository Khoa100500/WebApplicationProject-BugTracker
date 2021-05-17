const isProduction = process.env.NODE_ENV == 'production'

export default {
  BACKEND: isProduction ? '/api' : 'http://localhost:5000',
  disableLogin: isProduction ? false : true
}