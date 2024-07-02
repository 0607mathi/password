import React from 'react'
import './index.css'
export const Password = () => {
  return (
    <div className="Password-App">
        <h2>Password Generator</h2>

        <div className='inputs'>

            <label htmlFor="password_length">Enter your Password Length</label>
            <input type="number" id="password_length" />

            <div>
                <input type="checkbox" id="UpperCase" />
                <label htmlFor="UpperCase">Include UpperCase</label>
            </div>
            <div>
                <input type="checkbox" id="LowerCase" />
                <label htmlFor="LowerCase">Include LowerCase</label>
            </div>
            <div>
                <input type="checkbox" id="Symbols" />
                <label htmlFor="Symbols">Include Symbols</label>
            </div>
            <div>
                <input type="checkbox" id="Numbers" />
                <label htmlFor="Numbers">Include Numbers</label>
            </div>
        </div>

        <div className="btns">
            <button>Generate Password</button>
        </div>

        <div className="password">
            <input type="text" readOnly />
            <button className='copy-btn'>Copy</button>
        </div>

    </div>
  )
}
