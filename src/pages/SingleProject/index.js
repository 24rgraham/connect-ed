import React, {useState, useEffect} from 'react'
import API from '../../utils/API'

export default function SingleProject(props) {

    useEffect(() =>{
        API.get
    })
    

    //will eventually want edit functionality 
    //we are going to want to map over this to have a page for each project
    //
    

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