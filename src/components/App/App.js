import './App.css';
import Home from "../Home/Home"
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "../Login/Login"
import Signup from '../SignUp/signup'
import { useEffect, useState } from "react"
import Sleep from '../Sleep/sleep';
import RecordSleep from '../Sleep/RecordSleep'
import apiClient from "../../services/apiClient"
import { AuthContextProvider, useAuthContext, selectUserIsAuthenticated } from '../../contexts/auth';
import NotFound from '../NotFound/notFound';
import Activity from '../Activity/Activity'

export default function AppContainer(){
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  )
}

const App =()=>{
  const { user, setUser, initialized, setInitialized, error , setError} = useAuthContext()
  const [sleepRecord, setSleepRecord] = useState([])
  //use authentication to let user view their data
  const isAuthenticated = selectUserIsAuthenticated({user, initialized})
 // const isAuthenticated = Boolean( initialized && user?.email)

  useEffect(()=>{
    document.title="LifeTracker"
    const initApp = async ()=> {
      const { data } = await apiClient.fetchUserFromToken()
      if (data) {setUser(data.user)}
    
    setInitialized(true)
    }
    const token = localStorage.getItem("life_token")
    if (token){
      apiClient.setToken(token)
      initApp()
    }
    
  },[setInitialized,isAuthenticated])

  const clearAppState=()=>{
    setUser({})
    setSleepRecord([])
    setError(null)
  }
  const addSleep = (newSleepData)=>{
    setSleepRecord((oldSleepRecord)=>[newSleepData, ...oldSleepRecord])
  }

  const logoutUser = async ()=>{
    await apiClient.logoutUser()
    clearAppState()
  }
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar user={user} error={error} isAuthenticated={isAuthenticated} logoutUser={logoutUser} />
     <Routes>
     <Route path="/" element={ <Home />}/>
     <Route path="/login" element={<Login user={user} setUser={setUser} />}/>
     <Route path="/signup" element={<Signup user={user} setUser={setUser}/>}/>
     <Route path="/Sleep" element={<Sleep />} />
     <Route path="/record-sleep" element={<RecordSleep addSleep={addSleep}/>} />
     <Route path="/not-found" element={<NotFound />}/>
     <Route path="/Activity" element={<Activity />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

