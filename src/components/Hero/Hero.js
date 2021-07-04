import "./Hero.css"

export default function Hero(){
    return (
        <div className="Hero">
            <div className="content">
                <div className="intro">
                    <h1>Keep track of life with LifeTracker!</h1>
                </div>
                <div className="media">
                    <img className="image" src="https://images.unsplash.com/photo-1549890762-0a3f8933bc76?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWx0aHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="hero"/>
                </div>
            </div>
        </div>
    )
}