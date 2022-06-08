import React from 'react'

const InputGroup = ({ total, name, setId }) => {
  
  return (
      <div className="input-group mb-3">
          <select
          onChange={e => setId(e.target.value)}
          className='form-select'
          id="inputGroupSelect01"
          >
              <option 
              selected
              value={1}
              >Chose...
              </option>
              {
                  [...Array(total).keys()]
                    .map((item) => (
                        <option value={item + 1}>{ name } - {item + 1}</option>
                    ))
              }
          </select>
      </div>
  )
}

export default InputGroup