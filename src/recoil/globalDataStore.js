import { useWithData } from './dataHook'
import { useEffect } from 'react'

export default () => {
  const { setUser } = useWithData()
  useEffect(() => {
    setUser()
  }, [])
  return <></>
}
