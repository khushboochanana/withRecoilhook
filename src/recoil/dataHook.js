import { useUserData } from './userAtom'
export const useWithData = () => {
  const [user, setGlobalUserData] = useUserData()
  const editUser = data => {
    //axios user edit hit
    setGlobalUserData()
  }

  return {
    user, //user data to use at all components
    editUser,
    setUser: setGlobalUserData // to set global atom once app load
  }
}
