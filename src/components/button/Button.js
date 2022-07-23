import React from 'react';
import './Button.css'

function Button(props) {
    const { unFormttedData, setUnFormttedData, setError, setFormattedData } = props
    
    const formatDataHandler = () => {
        try {
            unFormttedData
                ?
                setFormattedData(JSON.stringify(JSON.parse(unFormttedData), null, 4))
                :
                setError("input can not be blank");
        } catch (error) {
            setError(error);
        }

    }

    const clearDataHandler = () => {
        setUnFormttedData("");
        setError("");
        setFormattedData("");
    }


    return (
        <div className='buttonBox'>
            <div className="buttonRow">
                <button className="formatBtn btn" onClick={formatDataHandler}>Format data</button>
                <button className="clearBtn btn" onClick={clearDataHandler}>Clear data</button>
            </div>
        </div>
    )
}

export default Button