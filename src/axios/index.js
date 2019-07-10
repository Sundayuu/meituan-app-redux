import axios from 'axios'

let baseURL = 'https://easy-mock.com/mock/5d149a43be0f214e354e4fc9/todolist'
axios.defaults.baseURL = baseURL
axios.interceptors.response.use(res => {
  return res.data
})
export default axios
