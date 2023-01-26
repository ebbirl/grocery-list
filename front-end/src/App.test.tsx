import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import * as apiHandler from './api'

const mockGetUserFavourites = jest.spyOn(apiHandler, 'getUserFavourites')
const mockGetUserGroceryList = jest.spyOn(apiHandler, 'getUserGroceryList')

const mockGetUserFavouritesResponse = ['milk', 'bread', 'apples', 'juice']
const mockGetUserGroceryListResponse = ['beans', 'soap']

describe('<App />', () => {
  beforeEach(() => {
    mockGetUserFavourites.mockResolvedValue(mockGetUserFavouritesResponse)
    mockGetUserGroceryList.mockResolvedValue(mockGetUserGroceryListResponse)
  })
  it('renders correctly', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getByText(/groceries/i)).toBeInTheDocument()
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })
  })
  it('displays the user\'s saved grocery list', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getAllByRole('checkbox').length).toBe(2)
    })
    expect(screen.getByText(/beans/)).toBeInTheDocument()
    expect(screen.getByText(/soap/)).toBeInTheDocument()
  })

  it('allows the user to select an option from their list of favourites', async () => {
    const user = userEvent.setup()
    render(<App />)

    await waitFor(() => {
      expect(screen.getAllByRole('checkbox').length).toBe(2)
    })

    const select = screen.getByRole('combobox')
    user.click(select)

    await waitFor(() => {
      expect(screen.getByText(/bread/)).toBeVisible()
    })

    user.click(screen.getByText(/bread/))
    await waitFor(() => {
      expect(screen.getAllByRole('checkbox').length).toBe(3)
    })
    expect(screen.getByText(/bread/)).toBeInTheDocument()
  })
})
