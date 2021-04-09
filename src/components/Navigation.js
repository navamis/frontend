import { BrowserRouter as Router, Switch, Route,  NavLink } from "react-router-dom";
import Login from './Login'


export default function Navigation () {
   
  
   

    return (
    <Router>
    <div  id="bimg" className="container-fluid d-flex justify-content-center align-items-center"  style={{
        
           backgroundImage:`url("https://presidencyuniversity.in/content/uploads/2017/07/Infra_08.jpg")` ,
           backgroundSize: "cover",

                height:"90vh", objectFit: "contain"}} >
                

     <NavLink className="nav-link active"  aria-current="page" to="/login">
                     
                     
                  </NavLink>

          <Switch>
                  <Route exact path="/login">
            <Login />
          </Route>
          </Switch>
      <div>
      </div>
    </div>
    </Router>
    )
     
     
 
}