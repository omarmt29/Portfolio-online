import React from 'react'

export const ButtonHead = ({icon, text, color, size}) => {
    return (
        <button className={`${color}  dark:text-white ${size} gap-1 px-3 py-1 rounded-xl font-medium flex items-center`}>{icon} {text}</button>
    )
}
