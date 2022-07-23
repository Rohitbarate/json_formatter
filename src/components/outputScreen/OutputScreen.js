import React from 'react';
import './OutputScreen.css'

function OutputScreen(props) {
  const { formattedData, error } = props

  return (
    <div className='mainContainer'>
      <textarea
        style={{ color: error ? 'red' : 'black' }}
        name="outputText"
        id="outputText"
        className='outputText textArea'
        cols="30"
        rows="10"
        placeholder='please write a unformatted json data in input textarea.'
        value={formattedData ? formattedData : error}
        disabled>

      </textarea>
    </div>
  )
}

export default OutputScreen