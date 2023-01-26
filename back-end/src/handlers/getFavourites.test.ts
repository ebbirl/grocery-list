import { getFavourites } from './getFavourites'
import * as apiHandler from '../api'

const mockGetUserById = jest.spyOn(apiHandler, 'getUserById')
const mockUserData = {
  id: 'test-user-id',
  name: 'Test User',
  favourites: ['milk', 'bread', 'ice cream', 'cereal', 'chocolate', 'eggs'],
  groceryList: ['beans', 'soap']
}

describe('the getFavourites handler', () => {
  it('should return an error response when no user ID is provided', async () => {
    const errorResponse = await getFavourites('')
    expect(errorResponse).toEqual({ statusCode: 500, body: JSON.stringify({ message: 'User ID missing' }) })
  })
  it('shoudl return an error response when call to getUserById fails', async () => {
    mockGetUserById.mockRejectedValue(new Error('I am a getUserById error'))

    const errorResponse = await getFavourites('test-user-id')
    expect(errorResponse).toEqual({ statusCode: 500, body: JSON.stringify({ message: 'I am a getUserById error' }) })
  })
  it('returns a success response containing user favourites when call to getFavourites is successful', async () => {
    mockGetUserById.mockResolvedValue(mockUserData)

    const successfulResponse = await getFavourites('test-user-id')

    expect(successfulResponse).toEqual({ statusCode: 200, body: JSON.stringify(['milk', 'bread', 'ice cream', 'cereal', 'chocolate', 'eggs']) })
  })
})
