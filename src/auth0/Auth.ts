


import { getCookie } from "@/auth0/cookieConfig"

const userAdmin:any = getCookie('userAdmin')

export const isAuth = () => {
  console.log('userAdmin')
  console.log( userAdmin )
  if ( String(userAdmin) === 'true') {
    return true
  } else {
    return false

  }

}
