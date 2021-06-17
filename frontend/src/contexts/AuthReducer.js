import { API } from "../utils"

export default authReducer
export const initialState = {
  user: {
    id: undefined,
    role: undefined,
    name: undefined,
    username: undefined,
    accessToken: undefined,
  },
  renderChildren: false,
  reqInterceptor: undefined
}

function authReducer(state, action) {
  console.log('AUTH:', action)

  switch (action.type) {
    case 'LOAD_USER':
      const { user } = action
      localStorage.setItem('user', JSON.stringify(user))
      return {
        user,
        renderChildren: true,
        reqInterceptor: API.interceptors.request.use((config => {
          config.headers = { 'x-access-token': user.accessToken }
          return config
        }))
      }

    case 'LOG_OUT':
      localStorage.removeItem('user')
      API.interceptors.request.eject(state.reqInterceptor)
      return {
        ...initialState,
        renderChildren: true
      }

    case 'RENDER_CHILDREN':
      return {
        ...state,
        renderChildren: true
      }

    default:
      throw new Error(`Action type '${action.type}' is not recognizable`)
  }
}
