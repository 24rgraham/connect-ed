import React, { useState } from 'react'

export default function CurriculumSearch() {
    return(
        <div>
           
            <form> 
                {/* <select> */}
                    <label>Montessori<input type='checkbox'></input></label>
                    <label>Waldorf<input type='checkbox'></input></label>
                    <label>Standard<input type='checkbox'></input></label>
                    <label>PBL<input type='checkbox'></input></label>
                    <label>Reggio Emilia<input type='checkbox'></input></label>
                    <label>B.E.E.T.L.E.S (Outdoor Ed.) <input type='checkbox'></input></label>
                {/* </select> */}
            </form>
        </div>
    )
}