export const getUserFavourites = async (userId: string): Promise<string[]> => {
  try {
    const userFavourites = await fetch(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_GET_USER_FAVOURITES_PATH}`,
            { method: 'GET', mode: 'cors', headers: { 'Content-Type': 'application/json' } })
    const response = await userFavourites.json()
    if (!response || response.statusCode !== 200) {
      throw new Error('Error retrieving user favourites')
    }

    return JSON.parse(response.body)
  } catch (err) {
    console.log(err)
    return []
  }
}

export const getUserGroceryList = async (userId: string): Promise<string[]> => {
  try {
    const userGroceryList = await fetch(
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_GET_USER_GROCERY_LIST_PATH}`,
              { method: 'GET', mode: 'cors', headers: { 'Content-Type': 'application/json' } })
    const response = await userGroceryList.json()
    if (!response || response.statusCode !== 200) {
      throw new Error('Error retrieving user grocery list')
    }

    return JSON.parse(response.body)
  } catch (err) {
    console.log(err)
    return []
  }
}
