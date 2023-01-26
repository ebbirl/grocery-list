import { getUserById } from '../api'
import { errorResponse, successResponse } from '../common/responseWrappers'
import { ResponseWrapper } from '../common/types'

export const getFavourites = async (userId: string): Promise<ResponseWrapper> => {
  console.log(`getFavourites call received for user ${userId}`)

  try {
    if (!userId) {
      throw new Error('User ID missing')
    }

    const user = await getUserById(userId)

    if (!user) {
      throw new Error('Unable to retrieve user information')
    }

    return successResponse(user.favourites)
  } catch (err) {
    return errorResponse(err as Error)
  }
}
