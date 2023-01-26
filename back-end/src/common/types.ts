export interface User {
  id: string
  name: string
  favourites?: string[]
  groceryList?: string[]
}

export interface ResponseWrapper {
  statusCode: number
  body: string
}
