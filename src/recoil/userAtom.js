import { atom, selector, useRecoilState } from 'recoil'

const globalReadableUserState = atom({
  key: 'user',
  default: {}
})

const getUserDataApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        name: 'Hello',
        mobile: 9847654677,
        email: 'hello@gmail.com',
        role: 'Smart'
      })
    }, 5000)
  })
}

export function useUserData () {
  const [user, setGlobalUserData] = useRecoilState(globalReadableUserState)
  return [
    user,
    async () => {
      let data = await getUserDataApi()
      setGlobalUserData(data)
    }
  ]
}
