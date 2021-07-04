import "./Home.css"
import Hero from "../Hero/Hero"
import { Link } from "react-router-dom"
export default function Home(){
    return (
        <div className="Home">
            <Hero/>
            <div className="categories">
                <div>
                    <Link className="fit" to="/Exercise">
                    <img className="fitness" src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="gym"></img>
                <h4>Fitness</h4>
                </Link>
                </div>
                <div className="food" >
                    <Link className="foodlink" to="/Activity">
                    <img src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Food"></img>
                <h4>Food</h4>
                </Link>
                </div>
                <div className="rest">
                    <Link className="sleep" to="/Sleep">
                    <img src="https://images.unsplash.com/photo-1541188495357-ad2dc89487f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="rest"></img>
                <h4>Rest</h4>
                </Link>
                </div>
                <div  className="planner">
                    <Link className="plan" to="/Activity">
                    <img src="https://images.unsplash.com/photo-1582812532891-7968f272fc9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbm5lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="planner"></img>
                <h4>Planner</h4>
                </Link>
                </div>
            </div>
        </div>
    )
}