import React from 'react'
import '../App.css'
const Landing = () => {
  return (
    <div className='container'>
        <ul>
            <h1>Sacred Heart Parish Database</h1>
        </ul>
        <div className='options'>
            <div className='card'>
                <div className='card-content'>
                <h1>New Parishioner</h1>
                <p>Welcome, click here to register as a new parishioner</p>
                </div>
            </div>
            <div className='card'>
                <div className='card-content'>
                <h1>The Laity</h1>
                <p>Click here for parish related population data</p>
                </div>
            </div>            
            <div className='card'>
                <div className='card-content'>
                <h1>The Youth</h1>
                <p>Click here for youth related Population data</p>
                </div>
            </div>
        </div>
        <footer>
            <div className='foot-content'>
                <p>email: SHP@gmail.com</p>
                <p>contact: 0591234567</p>
            </div> 
            <p className='copyright'> &copy; Copyright</p>
        </footer>
    </div>
  )
}

export default Landing