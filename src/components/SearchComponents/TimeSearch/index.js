import React, { useState } from 'react'


export default function TimeSearch() {
    return(
        <div>
        <form>
            <label> Less Than One Hour<input type="checkbox"></input></label>
            <label>1--2 hours<input type="checkbox"></input></label>
            <label>Less Than a Day<input type="checkbox"></input></label>
            <label>A Day<input type="checkbox"></input></label>
            <label>2-3 Days<input type="checkbox"></input></label>
            <label>Less Than A Week<input type="checkbox"></input></label>
            <label>A Week<input type="checkbox"></input></label>
            <label>Two Weeks<input type="checkbox"></input></label>
            <label>Three Weeks<input type="checkbox"></input></label>
            <label>A Month<input type="checkbox"></input></label>
            <label>Two Months<input type="checkbox"></input></label>
            <label>School Year<input type="checkbox"></input></label>
        </form>
        </div>
    )
}