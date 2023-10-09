import React from 'react'
import Card from './Card'
import imagen1 from '../assets/lentes.jpg'
import imagen2 from '../assets/auto.jpg'
import imagen3 from '../assets/pisina.jpg'

const cards = [
    {
        id: 1,
        title: 'Lentes de Sol',
        image: imagen1,
        desc: "Lentes pero para el Sol"
    },
    {
        id: 2,
        title: 'Auto',
        image: imagen2,
        desc: 'Motor no incluido'
    },
    {
        id: 3,
        title: 'Pisina',
        image: imagen3,
        desc: 'Solo puro agua'

    }
]

export default function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(c => (
                    <div className='col-md-4' key={cards.id}>
                        <Card
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        image={c.image}
                        desc={c.desc}
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}
