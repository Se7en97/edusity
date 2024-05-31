import React from 'react'
import './Title.css'

export const Title = ({ title, subTitle }) => {
    return (
        <div>
            <div className="title">
                <p>{title}</p>
                <h2>{subTitle}</h2>
            </div>
        </div>
    )
}

