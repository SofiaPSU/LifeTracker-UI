import "./Navbar.css"
import {  Link, useNavigate, } from "react-router-dom"
import { useAuthContext, selectUserIsAuthenticated } from "../../contexts/auth"





    const Navbar = ()=>{
        const navigate = useNavigate()
        const {user, initialized, handlers: authHandlers} = useAuthContext()
        const handleLogout = async () =>{
            await authHandlers.logoutUser()
            navigate("/")
        }
        const isAuthenticated = selectUserIsAuthenticated(user, initialized)
    
    return(
        <nav className="Navbar">
            
            <div className="logo">
            <Link to="/">
                <img className="logoImg" src="https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" 
                alt = "logo"></img>
                 </Link>
            </div>
           
                {isAuthenticated ?(
                <div className="auth">
                    <div className="links">
                <h2><Link className="actlink" to="/Activity">Activity</Link></h2>
                <h2><Link className="slink" to="/Sleep">Sleep</Link></h2>
                <h2><Link className="exlink" to="/Exercise">Exercise</Link></h2>
                </div>
                <button className="btnOut" onClick={handleLogout}>Logout</button>
                </div>
                
            ):(   <div className="auth">
                  <div className="links">
                <h2><Link className="actlink" to="/not-found">Activity</Link></h2>
                <h2><Link className="slink" to="/not-found">Sleep</Link></h2>
                <h2><Link className="exlink" to="/not-found">Exercise</Link></h2>
                </div>
            <div className="btn">
            <Link to="/login">
            <button className="btnLog">Login</button>
            </Link>
            <Link to="/signup">
            <button className="btnSign">Sign Up</button>
            </Link>
          
        </div> 
        </div>)}
    
        </nav>
    )
                }
export default Navbar