import React, { useState } from 'react';
import ProjectCard from '../../ProjectCard';

export default function Completed() {
    return(
            <div className='completed'>
                <h4>Completed Projects:</h4>
                <div><ProjectCard/></div>
            </div>
    )
}