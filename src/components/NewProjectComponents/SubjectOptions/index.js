import Reach, { useState } from 'react'

export default function SubjectOptions() {
    return(
        <div>
        <form>
            <select>
                <option><label>Art<input type='checkbox'></input></label></option>
                <option><label>Math<input type='checkbox'></input></label></option>
                <option><label>History<input type='checkbox'></input></label></option>
                <option><label>SEL<input type='checkbox'></input></label></option>
                <option><label>Woodworking<input type='checkbox'></input></label></option>
                <option><label>Anthropologie<input type='checkbox'></input></label></option>
                <option><label>Science<input type='checkbox'></input></label></option>
                <option><label>English<input type='checkbox'></input></label></option>
                <option><label>Writing<input type='checkbox'></input></label></option>
                <option><label>Spanish<input type='checkbox'></input></label></option>
                <option><label>French<input type='checkbox'></input></label></option>
                <option><label>Outdoor<input type='checkbox'></input></label></option>
                <option><label>Physical Education<input type='checkbox'></input></label></option>
                <option><label>Cultural Holidays<input type='checkbox'></input></label></option>
                <option><label>Culture<input type='checkbox'></input></label></option>
            </select>
        </form>
    </div>
    )
}