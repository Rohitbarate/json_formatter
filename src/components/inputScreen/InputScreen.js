import React from 'react';
import './InputScreen.css'

function InputScreen(props) {
    const { unFormttedData, setUnFormttedData, setFormattedData ,setError} = props

    return (
        <div className='mainContainer iScreen'>
            <textarea
                name="inputText"
                id="inputText"
                cols="30"
                className='inputText textArea'
                rows="10"
                onChange={(e) => { setUnFormttedData(e.target.value); setFormattedData("");setError("") }}
                value={unFormttedData}
                placeholder='Enter here your json data to format'>
            </textarea>
        </div>
    )
}

export default InputScreen