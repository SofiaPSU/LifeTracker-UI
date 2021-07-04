import { useEffect, useState } from "react"
import "./RecordSleep.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import apiClient from "../../services/apiClient"

export default function RecordSleep(addSleep) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] =useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        date:"",
        startTime:"",
        endTime:"",
    })
    const handleOnSubmit = async() =>{
        setIsLoading(true)
        const sleepData = {
            date: form.date,
            startTime: form.startTime,
            endTime: form.endTime
        }
        const {data, error} = await apiClient.recordSleep(sleepData)
        if(data?.sleepRecord){
            setForm({
                date:"",
                startTime:"",
                endTime:"",
            })
            addSleep(data.sleepRecord)
           navigate("/Sleep")
           if (error){
               console.log(error)
               setErrors((e)=>({...e,form:error}))
           }
           setIsLoading(false)
        }
       
     
    }
 /*   const handleOnInputChange = (event) =>{
        setForm((f)=> ({...f,[event.target.name]: event.target.value}))
    }*/
  

    return(
        <div className="Activity">
            <div className="form-card">
                <h2>Enter Sleep Data</h2>
            <div className = "form">
                <div classname="input-field">
                    <label htmlFor="name">Select Date:</label>
                    <input type="date" id="date-input" name="date-input" ></input>
                </div>
                <div className="input-field">
                <label htmlFor="name">Start time:</label>
                <input type="time" id="startTime" name="startTime" >
                    </input>
                </div>
                <div className="input-field">
                <label htmlFor="name">End time:</label>
                <input type="time" id="endTime" name="endTime"  />
                    
                </div>
                <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
                    {isLoading ? "Loading..." : "Submit"}
                </button>
            </div>
            </div>
        </div>
    )
}