import React, { useState } from 'react';

const Mode = () => {
    const [darkMode, setMode] = useState(false)

    const handleModeChange = () => {
        setMode(prevMode => !prevMode)
    }

    return (
        <div className={darkMode ? "main dark-mode" : "main light-mode" }>
            <button onClick={ handleModeChange }>{darkMode ? "Light Mode" : "Dark Mode"}</button>
        </div>
    )
} 

export default Mode