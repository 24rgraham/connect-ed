import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProject() {
    const {id} = useParams()

    return (
        <div className='projectContainer'>
            <div className='topOfPage'>
                <h3 className='title'>Testing</h3>
                <div className='mediaContainer'>
                    <img></img>
                </div>
            </div>
            <div className='midPage'>
                <div className='descriptionContainer'>
                    <div className='description'> <p></p></div>
                </div>
            </div>
            <div className='bottomOfPage'>
                <div className='directionsContainer'>
                        <p>testing</p>
                </div>
                <div className='materialsContainer'>
                    <p></p>
                </div>
            </div>
        </div>

    )
}