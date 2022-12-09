import React from 'react'


export default function TimeToComplete() {
    return (

        <div>
           <form>
           <select>
               <option><label> Less Than One Hour<input type="checkbox"></input></label></option>
               <option><label>1--2 hours<input type="checkbox"></input></label></option>
               <option><label>Less Than a Day<input type="checkbox"></input></label></option>
               <option><label>A Day<input type="checkbox"></input></label></option>
               <option><label>2-3 Days<input type="checkbox"></input></label></option>
               <option><label>Less Than A Week<input type="checkbox"></input></label></option>
               <option><label>A Week<input type="checkbox"></input></label></option>
               <option><label>Two Weeks<input type="checkbox"></input></label></option>
               <option><label>Three Weeks<input type="checkbox"></input></label></option>
               <option><label>A Month<input type="checkbox"></input></label></option>
               <option><label>Two Months<input type="checkbox"></input></label></option>
               <option><label>School Year<input type="checkbox"></input></label></option>
           
           </select>
           </form>
            
          
       </div>)
       
}