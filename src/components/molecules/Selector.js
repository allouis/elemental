import capitalize from 'capitalize'
import React from 'react'
import InputLabel from '../atoms/InputLabel'
import FullSelect from '../atoms/FullSelect'

export default ({
  children,
  defaultValue,
  disabled,
  handleChange,
  label,
  options
}) =>
  <div>
    <label className='selector'>
      <InputLabel text={capitalize(label)} />
      <FullSelect
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={handleChange}
        options={options}
      />
    </label>
    {children}
  </div>
