import React, { useState } from 'react'
import './index.css'
export const Password = () => {

    const [passwordLength,setPasswordLength]=useState(8)
    const [uppercase,setUpperCase]=useState(true)
    const [lowercase,setLowerCase]=useState(true)
    const [symbols,setSymbols]=useState(true)
    const [numbers,setNumbers]=useState(true)
    const [password,setPassword]=useState("")
    
    const generatePassword = ()=>{
        let includeData = ""
        // for alert function no one selected
        let bool = false
        if(uppercase){ includeData+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; bool=uppercase }
        if(lowercase){ includeData+="abcdefghijklmnopqrstuvwxyz"; bool=lowercase }
        if(symbols){ includeData+="!@#$%^&*()_+-={}[]|\:;'<>,.?/"; bool=symbols }
        if(numbers){ includeData+="0123456789"; bool=numbers }
        if(bool==false) alert("Select Atlest one data")
        // console.log(bool)
        // console.log(includeData)
        let password = ""
        for(let i=0;i<passwordLength;i++){
           let index=Math.floor(Math.random()*includeData.length)
           password+=includeData.charAt(index)
        // console.log(password)
        }
        setPassword(password)
    }

    const Copied =()=>{
        navigator.clipboard.writeText(password)
        alert("Password Copied!")
    }

  return (
    <div className="Password-App">
        <h2>Password Generator</h2>

        <div className='inputs'>

            <label htmlFor="password_length">Enter your Password Length</label>
            <input type="number" id="password_length" value={passwordLength} onChange={(e)=>{setPasswordLength(e.target.value)}}/>

            <div>
                <input type="checkbox" id="UpperCase" checked={uppercase} onChange={(e)=>{setUpperCase(e.target.checked)}}/>
                <label htmlFor="UpperCase">Include UpperCase</label>
            </div>
            <div>
                <input type="checkbox" id="LowerCase" checked={lowercase} onChange={(e)=>{setLowerCase(e.target.checked)}}/>
                <label htmlFor="LowerCase">Include LowerCase</label>
            </div>
            <div>
                <input type="checkbox" id="Symbols" checked={symbols} onChange={(e)=>{setSymbols(e.target.checked)}}/>
                <label htmlFor="Symbols">Include Symbols</label>
            </div>
            <div>
                <input type="checkbox" id="Numbers" checked={numbers} onChange={(e)=>{setNumbers(e.target.checked)}}/>
                <label htmlFor="Numbers">Include Numbers</label>
            </div>
        </div>

        <div className="btns">
            <button onClick={generatePassword}>Generate Password</button>
        </div>

        <div className="password">
            <input type="text" value={password} readOnly />
            <button className='copy-btn' onClick={Copied}>Copy</button>
        </div>

    </div>
  )
}
