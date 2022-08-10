import React from 'react'
import { Rating } from '@mui/material'

export default function Details (props) {    
    return (
        <div>
            <div className='detail__title'>
                <h3>{props.details.name}</h3>
                <i>Released On: {props.details.first_air_date}</i>
            </div>
            <p>{props.details.overview}</p>
            <p style={{marginBottom : '0'}}>Rating</p>
            <Rating name='half-rating-read' precision={0.5} value={props.details.vote_average/2} readOnly/>
        </div>
    )
}