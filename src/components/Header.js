import React from 'react'
import { BrowserRouter,Route,Link }from 'react-router-dom'
import Courses from './Courses'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import Enquiry from './Enquiry'

const Header = () =>{
    return(
      <BrowserRouter>
        <div>
          <header>
           <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link className="navbar-brand" to='/'>Lokesh</Link>  
            <ul className="navbar-nav">
              
            <li className="nav-item">
                <Link className="nav-link" to="/">Enquiry List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/enquiry">Enquiry</Link>
              </li>
            </ul>
            <div className="collapse navbar-collapse justify-content-end">
                <Link className="btn btn-primary mt-1 mx-1" to="/login">Login</Link>
                <Link className="btn btn-primary mt-1" to="/sign">Sign In</Link>
            </div>
            </nav>
            </header>
            <Route exact path="/" component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/enquiry" component={Enquiry} />
            <Route path="/sign" component={SignUp} />
            <Route path="/login" component={Login} />
            <footer className="bg-light text-muted py-0">
        <div className="container py-4 bg-dark">
        <ul className="list-inline mg-0 text-center text-white">
            <li className="list-inline-item">&copy; 2020 Lokesh</li>
            <li className="list-inline-item">All rights reserved</li>
        </ul>
    </div>
</footer>
        </div>
        </BrowserRouter>
    )
}

export default Header