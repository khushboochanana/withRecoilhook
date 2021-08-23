import axios from 'axios'
import { useWithData } from './recoil/userAtom'
import { useSetRecoilState } from 'recoil'

const customAxios = axios.create({
  baseURL: `http://192.168.1.21:4000`,
  timeout: 10000
})

const requestHandler = request => {
  console.log(request.user)

  if (request.user) {
    request.headers.user = request.user
  }
  request.headers.Authorization =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwibmFtZSI6IlNhbXBsZSIsImlhdCI6MTUxNjIzODIzfQ.ZEBwz4pWYGqgFJc6DIi7HdTN0z5Pfs4Lcv4ZNwMr1rs'

  return request
}

const responseHandler = response => {
  if (response.status === 401) {
    window.location = '/login'
  }

  return response
}

const errorHandler = error => {
  return Promise.reject(error)
}

const ReqCallBack = request => {
  const { user, edit } = useWithData()
  console.log(user)
  return request
}
// customAxios.interceptors.request.use(ReqCallBack, error => errorHandler(error))

export const WithRecoilAxios = ({ children }) => {
  return children
}
customAxios.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error)
)
export default customAxios
