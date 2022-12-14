import React, {useState, useEffect} from 'react'
import API from '../../../utils/API'

export default function Subject(props){
    
    const [subject, setSubject] = useState([])

    useEffect((projectId) => {
        API.getSubject().then((data) => {
            console.log(data);
            setSubject(data)
        })
    },[props.projectId]);
    return (
        <>
        {subject && <div>
            {subject.name}
        </div> }
        </>
    )
}