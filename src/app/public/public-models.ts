export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FbAuthResponse{
  idToken?: string
  expiresIn?: string
}

export interface NewUser {
  email: string
  password: string
}
