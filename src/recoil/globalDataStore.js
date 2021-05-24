import { useWithData } from './userAtom'
import { useEffect } from 'react'

export default () => {
  const { fetchUserData } = useWithData()
  useEffect(() => {
    fetchUserData()
  }, [])
  return <></>
}
