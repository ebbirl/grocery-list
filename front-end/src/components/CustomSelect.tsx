/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react'
import Select from 'react-select'

interface Props {
  inputValue: string
  setInputValue: (newValue: string) => void
  selectValue: string | null
  setSelectValue: (newValue: string | null) => void
  addItem: (value: string) => void
  options: any
}

const CustomSelect = ({ inputValue, setInputValue, selectValue, setSelectValue, addItem, options }: Props): ReactElement => {
  return (
        <Select
        inputValue={inputValue}
        value={selectValue}
        onInputChange={(newValue, actionMeta) => {
          if (actionMeta.action === 'input-change') {
            setInputValue(newValue)
          }
        }}
        onBlur={() => {
          if (inputValue) {
            addItem(inputValue)
            setInputValue('')
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && inputValue) {
            addItem(inputValue)
            setInputValue('')
          }
        }}
        options={options}
        isClearable
        onChange={(value: any) => {
          if (value) {
            addItem(value.label)
          }
          setSelectValue(null)
        }}
        isSearchable
      />
  )
}

export default CustomSelect
