import React from 'react'

import styles from './Layout.module.css'

const layout = (props) => {
    let day = 'https://images.unsplash.com/photo-1531147646552-1eec68116469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' 
    let night = 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=609&q=80'

    const renderBackground = props.isDay 
    ? {background:`url(${day})`,
        backgroundAttachment:'fixed',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'} 
    : {background: `url(${night})`} 

return (

    <div className={styles.Container} style={renderBackground}>
        <header className={styles.Header}>
            <h1>Weather Now</h1>
        </header>
        {props.children}
    </div>
    
)   
}   

export default layout