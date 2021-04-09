import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route,  NavLink } from "react-router-dom";
import Navigation from './Navigation'


export default function Home () {
   
  
   

    return (
    <Router>
    <div  id="bimg" className="container-fluid d-flex justify-content-center align-items-center"  style={{
        
           backgroundImage:`url("https://presidencyuniversity.in/content/uploads/2017/07/Infra_08.jpg")` ,
           backgroundSize: "cover",

                height:"100vh"}} >
                

     <NavLink className="nav-link active"  aria-current="page" to="/Navigation">
                     
                     <Button variant="primary" onclick="this.hidden=true" style={{width: '200px', height: '100px', fontSize: '2rem'}}>Get Started</Button>{' '}
                  </NavLink>

          <Switch>
                  <Route exact path="/Navigation">
            <Navigation />
          </Route>
          </Switch>
      <div>
      </div>
    </div>
    </Router>
    )
     
     
 
}