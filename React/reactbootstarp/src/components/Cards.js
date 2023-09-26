import React from 'react'
import Card from './Card'

export default function Cards() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <Card></Card>
            </div>
            <div className='col-md-4'>
                <Card></Card>
            </div>
            <div className='col-md-4'>
                <Card></Card>
            </div>
        </div>
    </div>
  )
}
