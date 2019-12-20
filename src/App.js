import React from 'react';
import './App.css';
import ToDoApp from './ToDoApp';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Redirect } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: '',pass:'',user:"",userpass:"",isSubmit:false};

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePass = this.handlePass.bind(this);

  }

  componentDidMount(){
    localStorage.setItem("UserName1","Smith");
    localStorage.setItem("UserName2","Jack");
    localStorage.setItem("UserName3","John");
    localStorage.setItem("Password1","smith123");
    localStorage.setItem("Password2","jack123");
    localStorage.setItem("Password3","john123");
  }

  handleInput(event) {
    this.setState({input: event.target.value});
  }
  handlePass(event) {
    this.setState({
      pass:event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();
    var User1=(localStorage.getItem("UserName1"))
var User2=(localStorage.getItem("UserName2"))
var User3=(localStorage.getItem("UserName3"))
var Pass1=(localStorage.getItem("Password1"))
var Pass2=(localStorage.getItem("Password2"))
var Pass3=(localStorage.getItem("Password3"))
    // console.log(this.state.input)
    // console.log(this.state.pass)


    if(this.state.input===User1){
      if(this.state.pass===Pass1){
this.setState({user:User1,userpass:Pass1,isSubmit:true})
      }
    }
    else if(this.state.input===User2){
      if(this.state.pass===Pass2){
this.setState({user:User2,userpass:Pass2,isSubmit:true})

      // return  
      } 
    }
    else if(this.state.input===User3){
      if(this.state.pass===Pass3){
this.setState({user:User3,userpass:Pass3,isSubmit:true})
   
      } 
    }
    else{
      this.setState({isSubmit:true})
    }
    
  }

  
render(){

var User1=(localStorage.getItem("UserName1"))
var User2=(localStorage.getItem("UserName2"))
var User3=(localStorage.getItem("UserName3"))
var Pass1=(localStorage.getItem("Password1"))
var Pass2=(localStorage.getItem("Password2"))
var Pass3=(localStorage.getItem("Password3"))

var element;

if(this.state.isSubmit){
  if(this.state.user===User1){
    if(this.state.userpass===Pass1){
   element=<Redirect to={`/`+User1} />
    }
  }
  else if(this.state.user===User2){
    if(this.state.userpass===Pass2){
       element=<Redirect to={`/`+User2} />
  
    } 
  }
  else if(this.state.user===User3){
    if(this.state.userpass===Pass3){
       element=<Redirect to={`/`+User3} />
    } 
  }
  else{
    element=<div class="alert alert-danger m-5" role="alert">
  Wrong Password
  </div>
  }
}
else{
   element=<div></div>
}


  return (
    <Router>
    <div className="App">
      <div class="card" style={{width:"100%",height:"100%"}}>
        
  <div class="card-header">
  <nav class="navbar navbar-light bg-light ">
  <a class="navbar-brand " id ="nav1"></a>
  <a class="navbar-brand  d-none" id="nav3">Hello Yash</a>
  <a class="navbar-brand" > TodoApp</a>
  <a class="navbar-brand " id="nav2"></a>
  <Link to={`/`} class="btn btn-outline-danger d-none " id="nav4">LogOut</Link>
</nav>
  </div>
  <div class="card-body">
    <div id="UserButtons">  



      <form onSubmit={this.handleSubmit}>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" class="form-control"  placeholder="Enter any username Smith John and Jack"
    value={this.state.input} onChange={this.handleInput} required />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" class="form-control"  placeholder="Enter any Password smith123 , john123 or jack123 with thier specific username"
    value={this.state.pass} onChange={this.handlePass}  required />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

{element}
</div>
<Switch>
<Route exact path="/">
<Home/>
          </Route>
  <Route path={`/`+User1}>
    <ToDoApp user={User1} />
  </Route>
  <Route path={`/`+User2}>
    <ToDoApp user={User2} />
  </Route>  
  <Route path={`/`+User3}>
    <ToDoApp user={User3} />
  </Route>
</Switch>
  </div>
  <div class="card-footer text-muted">
  </div>
</div>
    </div>
    </Router>
  );
}
}

export default App;
