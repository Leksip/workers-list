export interface Workers {
  name: string,
  profileImage?: string,
  birthday: Date,
  email: string,
  tel: number,
  description: string,
  social?: Social
}

export interface Social {
  vk?: string,
  instagram?: string,
  facebook?: string,
  twitter?: string
}

