import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//Goal:
//have a button to record sleep where users view form to input data on sleep
//view data on sleep 
export default function Sleep({user}) {


    return(
       <div className="Activity">
           <Link to="/record-sleep">
           <button>Record Sleep</button>
           </Link>
       </div>
    )
}