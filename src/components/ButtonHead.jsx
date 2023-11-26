import React from 'react'

export const ButtonHead = ({icon, text, color, size}) => {
    return (
        <button className={`${color}  dark:text-white ${size} gap-1 px-3 py-1 transition-all hover:ease-in-out duration-300 hover:scale-110 rounded-xl font-medium flex items-center`}>{icon} {text}</button>
    )
}
