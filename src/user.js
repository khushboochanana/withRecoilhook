import react from 'react'
import { useWithData } from './recoil/index'

function User () {
  const { user, edit } = useWithData(useWithData)
  return (
    <div>
      I am a User...
      <div> My Name: {user.name}</div>
    </div>
  )
}

export default User
