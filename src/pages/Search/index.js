import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import GradeSearch from '../../components/SearchComponents/GradeSearch'
import SubjectSearch from '../../components/SearchComponents/SubjectSearch'
import TimeSearch from '../../components/SearchComponents/TimeSearch'
import CurriculumSearch from '../../components/SearchComponents/CurriculumSearch';

export default function Search() {
    return(
        <div>
            <form>
            <GradeSearch/>
            <SubjectSearch/>
            <TimeSearch/>
            <CurriculumSearch/>

            <div>
                <label>Search by Materials:<input type='text' name='materialSearch'></input></label>
            </div>
                <button type="submit"><Link to="/results">Search</Link></button>       
            </form>
        </div>
    )
}