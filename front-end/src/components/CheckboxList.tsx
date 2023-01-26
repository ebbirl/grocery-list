import React, { ReactElement } from 'react'
import Checkbox from 'rc-checkbox'

interface ListItem { name: string, checked: boolean }

interface Props {
  list: ListItem[]
  onCheck: (value: string) => void
  sorted: boolean
}

const CheckboxList = ({ list, onCheck, sorted }: Props): ReactElement => {
  const listItems = sorted ? list.sort((a, b) => a.name.localeCompare(b.name)) : list

  return (
        <div className="checkbox-list">
        {listItems.map((item) => (
            <div key={item.name}>
              <Checkbox checked={item.checked} onChange={() => { onCheck(item.name) }} disabled={item.checked}/>
              {item.checked ? (<del>{item.name}</del>) : item.name}
            </div>
        ))}
    </div>
  )
}

export default CheckboxList
