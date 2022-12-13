import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'

// const [project, setProject] = useState([

// ])

// useEffect(() => {
//       setProject(props.currentProject)
//   }, [props.userId]);
//   console.log(project);

export default function ProjectCard(){


    
    return(
        <Link to="/project">
        <div className='cardContainer'>
            <div className='imageContainer'>
                <img width='100px' src={require('../../utils/pelican.png')}></img>
                
            </div>
            <div className='cardTitle'>Title</div>
                <div className='cardDescription'>Description</div>
        </div>
        </Link>
    )
}

// import {data} from ...Completed.apply.API
// {data.map(project => (
//     <Project key={project.id} project={project}/>
// ))}