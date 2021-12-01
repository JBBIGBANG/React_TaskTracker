import React from 'react'
import Button from './Button'

const Header = ({ title, onAdd, showButton}) => {
   
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showButton ? 'red' : 'green'}
             text={showButton ? 'Close' : 'Add'} onClick = {onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header;
