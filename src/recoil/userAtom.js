import { atom, useRecoilState } from 'recoil'

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

export const useWithData = () => {
  const [user, setGlobalUserData] = useRecoilState(globalReadableUserState)

  const editUser = data => {
    //axios user edit hit
    setUserData()
  }
  const setUserData = async () => {
    let data = await getUserDataApi()
    setGlobalUserData(data)
  }

  return {
    user, //user data to use at all components
    editUser,
    fetchUserData: setUserData // to set global atom once app load
  }
}
