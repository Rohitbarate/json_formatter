import React, { useState } from 'react';
import './Home.css'
import Button from '../button/Button';
import InputScreen from '../inputScreen/InputScreen';
import OutputScreen from '../outputScreen/OutputScreen';

const Home = () => {
    const [unFormttedData, setUnFormttedData] = useState()
    const [formattedData, setFormattedData] = useState()
    const [error, setError] = useState()

  console.log(formattedData);
  console.log(typeof(formattedData));
    return (
        <>
            <div className='home'>
                <InputScreen unFormttedData={unFormttedData} setUnFormttedData={setUnFormttedData} setFormattedData={setFormattedData} setError={setError} />

                <Button unFormttedData={unFormttedData} setUnFormttedData={setUnFormttedData} error={error} setError={setError} setFormattedData={setFormattedData} />

                <OutputScreen unFormttedData={unFormttedData} setUnFormttedData={setUnFormttedData} formattedData={formattedData} error={error} />
            </div>
        </>
    )
}

export default Home;