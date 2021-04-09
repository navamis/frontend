import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route,  NavLink, Link } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import AddPayment from "./components/AddPayment";
import UpdatePayment from "./components/UpdatePayment";
import ViewPayment from "./components/ViewPayment";
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import ViewUser from './components/ViewUser';
import AddLogin from './components/AddLogin';
import ViewLogin from './components/ViewLogin';
import ChangePassword from './components/ChangePassword';
import ViewCollege from "./components/ViewCollege";
import AddCollege from "./components/AddCollege";
import UpdateCollege from "./components/UpdateCollege";
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import ViewCourse from './components/ViewCourse';
import AddBranch from './components/AddBranch';
import ViewBranch from './components/ViewBranch';
import UpdateBranch from './components/UpdateBranch';
import AddProgram from './components/AddProgram';
import ViewProgram from './components/ViewProgram';
import UpdateProgram from './components/UpdateProgram';
import AddProgramScheduled from './components/AddProgramScheduled';
import UpdateProgramScheduled from './components/UpdateProgramScheduled';
import ViewProgramScheduled from './components/ViewProgramScheduled';
import AddUniversity from './components/AddUniversity';
import UpdateUniversity from './components/UpdateUniversity';
import ViewUniversity from './components/ViewUniversity';
import Home from './components/Home'; 
import Navigation from './components/Navigation';
import Signup from "./components/Signup";

function App(){
  return (
    
   
    
     
        <Router>
         {/* <div className="App"> */}
        <>
    
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Online Admission System</Navbar.Brand>
            <ul className="navbar-nav float-right">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                id="responsive-navbar-nav"
                variant="dark"
              ></Navbar.Collapse> 
              </ul>  

               
              <NavDropdown title="Login" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <Link className="nav-link active" aria-current="page" to="/login">
                     Login
                  </Link>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>
          

            <NavDropdown title="LoginDetails" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/viewlogin">
                    View Login
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addlogin" variant="dark">
                    Add Login
                  </NavLink>
                </NavDropdown.Item>
              </Nav>              
            </NavDropdown>
            
            <NavDropdown title="User" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
               
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  
                  <NavLink className="nav-link active" aria-current="page" to="/viewuser">
                    View User
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/adduser" variant="dark">
                    Add User
                  </NavLink>
                </NavDropdown.Item>
                
              </Nav>  
            </NavDropdown>

             <NavDropdown title="University" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
               
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  
                  <NavLink className="nav-link active" aria-current="page" to="/viewuniversity">
                    View University
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/adduniversity" variant="dark">
                    Add University
                  </NavLink>
                </NavDropdown.Item>
                
              </Nav>  
            </NavDropdown>
            

            

            <NavDropdown title="College" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/viewcollege">
                    View College
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addcollege" variant="dark">
                    Add College
                  </NavLink>
                </NavDropdown.Item>
              </Nav>              
            </NavDropdown>

             <NavDropdown title="Branch" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/branches">
                    View Branch
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addbranch" variant="dark">
                    Add Branch
                  </NavLink>
                </NavDropdown.Item>
              </Nav>              
            </NavDropdown>

            <NavDropdown title="Course" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/viewcourse">
                    View Course
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addcourse" variant="dark">
                    Add Course
                  </NavLink>
                </NavDropdown.Item>
              </Nav>              
            </NavDropdown>

           

            <NavDropdown title="Program" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/programs">
                    View Program
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addprogram" variant="dark">
                    Add Program
                  </NavLink>
                </NavDropdown.Item>
              </Nav>              
            </NavDropdown>

            <NavDropdown title="Program Schedule" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/programScheduled">
                    View ProgramSchedule
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addprogramScheduled" variant="dark">
                    Add ProgramSchedule
                  </NavLink>
                </NavDropdown.Item>
              </Nav>              
            </NavDropdown>


             <NavDropdown title="Payment" id="collasible-nav-dropdown">
              <Nav className="mr-auto">
                <NavDropdown.Item href="#action/3.1" className="bg-secondary">
                  {" "}
                  <NavLink className="nav-link active" aria-current="page" to="/viewpayment">
                    View Payment
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="bg-secondary">
                  <NavLink className="nav-link" to="/addpayment" variant="dark">
                    Add Payment
                  </NavLink>
                </NavDropdown.Item>
              </Nav>
            </NavDropdown>
          </Navbar>
           
        </>
            
     
     
        
         
        <Switch>
        
         <Route exact path="/">
            <Navigation />
          </Route>  

         
          <Route exact path="/viewpayment">
            <ViewPayment />
          </Route>

          <Route path="/addpayment">
            <AddPayment />
          </Route>
          <Route path="/updatepayment/:paymentId" component={UpdatePayment}></Route>

           <Route exact path="/viewuser">
            <ViewUser />
          </Route>
          <Route path="/adduser">
            <AddUser />
          </Route>
          <Route path="/updateuser/:userId" component={UpdateUser}></Route>
          <Route exact path="/addlogin">
            <AddLogin />
          </Route>
          <Route path="/viewlogin">
            <ViewLogin />
          </Route>
          <Route path="/change/:userId" component={ChangePassword}></Route>

          <Route path="/addcollege">
            <AddCollege />
          </Route>

          <Route path="/updatecollege/:collegeRegId" component={UpdateCollege}></Route>
          <Route path="/viewcollege">
            <ViewCollege />
          </Route>

          <Route exact path="/viewcourse">
            <ViewCourse />
          </Route>
          <Route path="/addcourse">
            <AddCourse />
          </Route>
          <Route path="/updateCourse/:courseId" component={UpdateCourse}></Route>

          <Route exact path="/branches">
            <ViewBranch />
          </Route>
          <Route path="/addbranch">
            <AddBranch />
          </Route>
          <Route path="/updateBranch/:branchId" component={UpdateBranch}></Route>

          <Route exact path="/programs">
            <ViewProgram />
          </Route>
          <Route path="/addprogram">
            <AddProgram />
          </Route>
          <Route path="/updateProgram/:programId" component={UpdateProgram}></Route>

          <Route exact path="/viewuniversity">
            <ViewUniversity />
          </Route>
          <Route path="/adduniversity">
            <AddUniversity />
          </Route>
          <Route path="/updateUniversity/:universityId" component={UpdateUniversity}></Route>

          <Route exact path="/programScheduled">
            <ViewProgramScheduled />
          </Route>
          <Route path="/addprogramScheduled">
            <AddProgramScheduled />
          </Route>
          <Route path="/updateProgramScheduled/:scheduleId" component={UpdateProgramScheduled}></Route>
           <Route exact path="/">
            <Home />
          </Route>
        </Switch>

         
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
        
      
  

      
    
   
  );
}
export default App;