import React from 'react'
import lentes from '../assets/lentes.jpg'

export default function Card(){
    return(
        <div className='card'>
            <div className='card-body'>
                <img src = {lentes} alt = 'Lentes'></img>
                <h4 className='card-title'> My Title </h4>
                <p className='card-text text-secondary'>
                Contenido de la tarjeta
                </p>
            </div>
        </div>
    )
}