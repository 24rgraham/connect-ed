import React, { useState } from 'react';

import GradeSearch from '../../components/SearchComponents/GradeSearch'
import SubjectSearch from '../../components/SearchComponents/SubjectSearch'
import TimeSearch from '../../components/SearchComponents/TimeSearch'

export default function Search() {
    return(
        <div>
            <form>
            <GradeSearch/>
            <SubjectSearch/>
            <TimeSearch/>

            <div>
                <label>Search by Materials:<input type='text' name='materialSearch'></input></label>
            </div>
            </form>
        </div>
    )
}