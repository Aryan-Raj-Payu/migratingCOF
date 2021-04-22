import { useState } from 'react'

const useCheckboxState = (type, defaultItems) =>
  type === 'typeSingle' ? SingleCheckbox(defaultItems) : MultipleCheckbox(defaultItems)

const SingleCheckbox = (defaultChecked = false) => {
  const [checked, setChecked] = useState(defaultChecked)

  const handleChange = () => {
    setChecked(!checked)
  }

  return {
    checked,
    handleChange
  }
}

const MultipleCheckbox = (defaultCheckItems) => {
  const [checkedItems, setCheckedItems] = useState(defaultCheckItems)

  const handleChange = (index) => {
    const newData = [...checkedItems]
    newData.splice(index, 1, {
      name: checkedItems[index].name,
      checked: !checkedItems[index].checked,
      value: checkedItems[index].value
    })

    setCheckedItems(newData)
  }

  return {
    checkedItems,
    handleChange
  }
}

export default useCheckboxState
