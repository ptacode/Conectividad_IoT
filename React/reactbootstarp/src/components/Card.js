import React from 'react'
// import './card.css'

export default function Card({id, title, image, desc}) {
    return(
        <div className='card text-center bg-dark'>
            <div className='card-body text-light'>
                <img src = {image} alt = 'sin datos' className='card-img-top'></img>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'>
                {desc}
                </p>
                <a href='#!' className='btn btn-outline-secondary rounded-0'>
                    Compra Aqui
                </a>
            </div>
        </div>
    )
}