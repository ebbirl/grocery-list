import { type User } from './common/types'

export const getUserById = async (userId: string): Promise<User | null> => {
  try {
    console.log(`Fetching user information from DB service for user ${userId}`)

    // mock call to DB service
    const user = await Promise.resolve({
      id: 'test-user',
      name: 'Test User',
      favourites: ['milk', 'bread', 'ice cream', 'cereal'],
      groceryList: ['beans', 'coffee', 'bananas', 'crisps', 'soap', 'cat food']
    })

    if (!user) {
      throw new Error('User not found')
    }

    return user
  } catch (err) {
    console.log('Error encountered while retrieving user data: ', err)
    return null
  }
}

export const saveListToUser = async (userId: string, groceryList: string[]): Promise<User | null> => {
  try {
    console.log(`Updating user object for user ${userId}`)

    // mock call to DB service
    const updatedUser = await Promise.resolve({
      id: 'test-user',
      name: 'Test User',
      favourites: ['milk', 'bread', 'ice cream', 'cereal'],
      groceryList
    })

    if (!updatedUser) {
      throw new Error('Unable to update user data')
    }
    return updatedUser
  } catch (err) {
    console.log('Error encountered while updating user data: ', err)
    return null
  }
}
