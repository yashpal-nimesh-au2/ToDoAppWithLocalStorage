import React from 'react';
import ToDoList from './ToDoList';

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      var check=JSON.parse( localStorage.getItem(this.props.user))
      // console.log(check)
      if(check){
        this.state = { items: check , text: '' };

      }
      else{
        this.state = { items: [] , text: '' };

      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
       }

      
handleChange(e) {
  this.setState({ text: e.target.value });
}

  
handleSubmit(e) {
  e.preventDefault();
  if (!this.state.text.length) {
    return;
  }
  const newItem = {
    text: this.state.text,
    details:"",
    isChecked:false
  };
  this.setState(state => ({
    items: state.items.concat(newItem),
    text: ''
  }));
  // console.log(this.state.items)
}
componentDidMount(){
  var x=document.getElementById("UserButtons");
  var nav1=document.getElementById("nav1");
  var nav2=document.getElementById("nav2");
  var nav3=document.getElementById("nav3");
  var nav4=document.getElementById("nav4");

  if(x&&nav1&&nav2&&nav3&&nav4){
    x.classList.add("d-none");
    nav1.classList.add("d-none");
    nav2.classList.add("d-none");
    nav3.classList.remove("d-none");
    nav4.classList.remove("d-none");
    nav3.innerHTML=`${"Hello  " + this.props.user}`;
  }

}
render() {
  localStorage.setItem(this.props.user,JSON.stringify( this.state.items))
  
console.log(this.state.items)
      return (
        <div>

<div class="input-group w-auto" style={{margin:"auto",marginTop:"2%"}}>
  <input type="text" class="form-control"  
   aria-describedby="new-todo"
  onChange={this.handleChange}
  value={this.state.text}
  id="new-todo"
  />
  <div class="input-group-append" id="new-todo">
    <button class="btn btn-outline-secondary" onClick={this.handleSubmit}>Add Topic</button>
  </div>
  </div>
         
          <ToDoList items={this.state.items} user={this.props.user} />
        </div>
      );
    }
  }
export default TodoApp;