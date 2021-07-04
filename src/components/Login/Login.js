import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import apiClient from "../../services/apiClient"

export default function Login({ user, setUser }) {
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    if (user?.email) {
      navigate("/Activity")
    }
  }, [user, navigate])

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    setIsProcessing(true)
    const {data, error} = await apiClient.loginUser({email: form.email, password: form.password})
    if (error) {setErrors((e) => ({ ...e, form: error }))}
    if (data){
      setUser(data.user)
      console.log(data.user)
      apiClient.setToken(data.token)
      localStorage.setItem("life_token", data.token)
    }

      setIsProcessing(false)
  }

  return (
    <div className="Login">
      <div className="card">
        <h2>Login</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleOnInputChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password" name="password" placeholder="Password" value={form.password} onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
            {isProcessing ? "Loading..." : "Login"}
          </button>
        </div>

        <div className="footer">
          <p>
            Not already with us? Sign up <Link to="/signup">here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}