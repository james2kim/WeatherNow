import React from 'react'

import styles from './SearchWeather.module.css'

import clearDay from '../assets/images/Day.svg'
import clearNight from '../assets/images/Night.svg'
import cloudyDay from '../assets/images/CloudyDay.svg'
import cloudyNight from '../assets/images/CloudyNight.svg'
import rain from '../assets/images/Rain.svg'

const SearchWeather = (props) => {
    const {submitData, isDay} = props
    let modal = ''
    let image;

// Determine which image to use based on weather 
    if (submitData.precip >=0.1) {
        image = <img className={styles.Image} src={rain} />
    } else if  (submitData.is_day === 'yes' && submitData.cloudcover < 20) {
        image = <img className={styles.Image} src={clearDay} />
    } else if (submitData.is_day === 'yes'&& submitData.cloudcover >= 20) {
        image = <img className={styles.Image} src={cloudyDay} />
    } else if (submitData.is_day === 'no' && submitData.cloudcover < 20) {
       image = <img className={styles.Image} src={clearNight} />
    } else if (submitData.is_day === 'no'&& submitData.cloudcover >= 20) {
        image = <img className={styles.Image} src={cloudyNight} />
    } else {
        image = <img className={styles.Image} src={clearDay} />
    }

// If there is error, we will show error message, otherwise we will render modal 
    if (submitData.error) {
        modal = (
            <div>
                <p className={styles.Text}>{submitData.error}</p>
            </div>
        )
    } else if (submitData) {
        modal = (
            <div className={styles.Modal}>
                 <p className={styles.Text}>{submitData.location}</p>
                <p className={styles.Text}>The Local Time is {submitData.local_time}</p>
                <div className={styles.Temperature}>
                    <p>{submitData.temperature}° F</p>
                    {image}
                </div>
                <p className={styles.Text}>{submitData.forecast}</p>
                <p className={styles.Text}>Feels Like: {submitData.feelslike}° F</p>
                <p className={styles.Text}>Precipitation: There is a {submitData.precip * 100}% chance of rain</p>
                
            </div>
        ) 
    } 
    
    return (
        <div className={styles.Content}>
            <form className={styles.Form} onSubmit={props.request}>
                <input className={styles.SearchTerm} placeholder="Location"  onChange={props.inputHandler}/>
                <button className={styles.SearchButton}><i className="fa fa-search"></i></button>
            </form>
            <p className={styles.Description}>Search a new location to get real time weather data from around the world.</p>
            {modal}
            
        </div>
    )
}

export default SearchWeather