import React from 'react';
import GradeOptions from '../../components/NewProjectComponents/GradeOptions';
import TimeToComplete from '../../components/NewProjectComponents/TimeToComplete';
import CurriculumOptions from '../../components/NewProjectComponents/CurriculumOptions';
import SubjectOptions from '../../components/NewProjectComponents/SubjectOptions';

// will need to import the cloudinary widget 
import './style.css'


function NewProject(){
    // event.preventDefault
    return(
        <div className='newProjectContainer'>
          <div className='topHalf'>
            <div className='topLeft'>
                <label>Project Title:<input type="text"></input></label>
                {/* img upload from cloudinary here */}
            </div>
            <div className='topRight'>
               <label>Recommended Grade Level:<GradeOptions/></label>
                <label>Time to Completion:<TimeToComplete/></label>
                <label>Subject(s): <SubjectOptions/></label>
                <label>Curriculum Style:<CurriculumOptions/></label>
                
            </div>
            <div className='midPage'>
                <label>Overview<input type="text" placeholder='Write a brief summary of your project here'></input></label>
            </div>
            <div className='bottomHalf'>
                <div className='bottomLeft'>
                    <div>
                        <label>Directions<textarea><input type="text" placeholder='Please include a detailed, step-by-step guide of your project/assignment with time breakdown, and expectations'></input></textarea></label>
                    </div>
                </div>
                <div className='bottomRight'>
                    <div>
                        <label>Materials:<textarea><input type="text" placeholder='Please list needed materials (with quantity per child) separated by a comma.'></input></textarea></label>
                    </div>
                </div>
                <input type='submit'></input>
            </div>
          </div>     

            
    </div>
    )
}

export default NewProject