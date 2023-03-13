import React, { useEffect, useState } from 'react';
import { Icons } from '../Icons/Icons';


const ToggleTheme = () => {

    const [theme, setTheme] = useState('light');
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        }
        else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    console.log(theme);
    return (
        <div>
            <label className="swap swap-rotate" >
                <input type="checkbox" onClick={toggleTheme} />
                {Icons.LightMoodIcon}
                {Icons.DarkMoodIcon}
            </label>
        </div>
    );
};

export default ToggleTheme;