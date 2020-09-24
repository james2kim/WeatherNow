import React, {useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Layout from './Layout/Layout'
import SearchWeather from './SearchWeather/SearchWeather'
import Spinner from './Spinner/Spinner'

const App = () => {
  const [input, onInput] = useState('')
  const [submitData, onSubmitData] = useState('') 
  const [isDay, setIsDay] = useState(true) 
  const [loading, setLoading] = useState('initial')

  useEffect(() => {
    if (submitData.is_day === 'no') {
      setIsDay(false)
    } else {
      setIsDay(true)
    }
  }, [submitData, isDay])

  const onInputHandler = (event) => {
    onInput(event.target.value)
  }

  const onSubmitHandler = async (event) => {
      setLoading('true')
      event.preventDefault()
      const response  = await axios.get(`/weather?address=${input}`)
      const data = response.data
      onSubmitData(data)
      setLoading('false')
  }

  let jsx
  if (loading === 'true') {
    jsx = <Spinner />
  } else {
    jsx = <SearchWeather submitData={submitData}input= {input} inputHandler={onInputHandler} request={onSubmitHandler}/>
  }

  return (
        <Layout isDay={isDay} background={dayOrNight}>
            {jsx}
        </Layout>
  );
}

export default App;
