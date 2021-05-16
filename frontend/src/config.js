export default {
  BACKEND: (process.env.NODE_ENV == 'production') ? '/api' : 'http://localhost:5000',
  // disableLogin: (process.env.NODE_ENV == 'production') ? false : true
  disableLogin: true
}