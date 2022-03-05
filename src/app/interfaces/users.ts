export interface UsersResult {
  results : User[]
}

export interface User {
  gender?: 'male' | 'female',
  name?: {
    title?: string,
    first?: string,
    last?: string
  },
  location?: {
    street?: {
      number?: number,
      name?: string
    },
    city?: string,
    state?: string,
    country?: string,
    postcode?: number
  },
  email?: string,
  dob?: {
    age?: number
  },
  picture?: {
    thumbnail?: string
  }
}
