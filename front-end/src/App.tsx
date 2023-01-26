import React, { ReactElement, useEffect, useState } from 'react'
import CustomSelect from './components/CustomSelect'
import CheckboxList from './components/CheckboxList'
import { getUserFavourites, getUserGroceryList } from './api'

interface GroceryItem { name: string, checked: boolean }
interface Option { label: string, value: string }

const userId = 'test-user'

const App = (): ReactElement => {
  const [favourites, setFavourites] = useState<Option[]>([])
  const [groceries, setGroceries] = useState<GroceryItem[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [selectValue, setSelectValue] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserFavourites = async (): Promise<void> => {
      const favouritesData = await getUserFavourites(userId)
      setFavourites(favouritesData.map((item: string) => ({ label: item, value: item })))
    }

    const fetchUserGroceryList = async (): Promise<void> => {
      const groceriesData = await getUserGroceryList(userId)
      setGroceries(groceriesData.map((item: string) => ({ name: item, checked: false })))
    }

    fetchUserFavourites().catch((err) => {
      console.log(err)
      setFavourites([])
    }
    )

    fetchUserGroceryList().catch((err) => {
      console.log(err)
      setGroceries([])
    }
    )
  }, [])

  const addItem = (item: string): void => {
    if (!groceries.map((grocery) => grocery.name).includes(item)) {
      setGroceries([...groceries, { name: item, checked: false }])
    }
  }

  const checkItem = (item: string): void => {
    setGroceries([...groceries.filter((groceryItem) => groceryItem.name !== item), { name: item, checked: true }])
  }

  return (
    <>
      <h2>Groceries</h2>
      <div className="groceries-select">
        <CustomSelect
          inputValue={inputValue}
          setInputValue={setInputValue}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          addItem={addItem}
          options={favourites}
        />
      </div>
      <div className="groceries-list">
        <CheckboxList list={groceries} onCheck={checkItem} sorted />
      </div>
    </>
  )
}

export default App
