import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {input:""};
    }
componentDidMount(){
 var arr= JSON.parse( localStorage.getItem(this.props.user));
 var x,y;
 for(var i=0;i<arr.length;i++){
  //  console.log(arr[i])
   if(arr[i].isChecked){
      x=document.getElementById(arr[i].checkboxID)
      y=document.getElementById(arr[i].textID)
if(x&&y){
  x.checked=true;
  y.style.textDecoration="line-through";
}
else{

}
   }
   else{

 x=document.getElementById(arr[i].checkboxID)
 y=document.getElementById(arr[i].textID)
if(x&&y){
x.checked=false;
y.style.textDecoration="none";
}
else{

}


   }
 }
}

handleClick(x,y,z){
  // console.log(x)
  var input = document.getElementById(x);
  var check = document.getElementById(y);
  var detail = document.getElementById(z);
var obj;

console.log(detail.value)
  input.classList.toggle("mystyle");
if(check.checked){
 obj={text:input.value,details:detail.value,isChecked:true,checkboxID:y,textID:x}
input.style.textDecoration="line-through";

}
else{
   obj={text:input.value,details:detail.value,isChecked:false,checkboxID:y,textID:x}

  input.style.textDecoration="none";

}

var arr=this.props.items
// console.log(this.state.input)
  console.log(this.props.items)
  for(var i=0;i<arr.length;i++){
if(input.value=== arr[i].text){
  arr[i]=obj
}

}

  localStorage.removeItem(this.props.user)
  localStorage.setItem(this.props.user,JSON.stringify(arr))

  // console.log(element2.checked)

}
handleEdit(x,y,z,input){
  var e = document.getElementById(input).value;
this.setState({input:e})

  var element1 = document.getElementById(x);
  var element2 = document.getElementById(y);
  var element3=document.getElementById(z);

  element3.readOnly=false;
  element3.classList.remove("form-control-plaintext");
  element3.classList.add("form-control");
  element2.classList.remove("d-none");
  element1.classList.add("d-none");

}
handleDelete(x,input){
  var e = document.getElementById(input).value;

  // console.log(e)
  var element = document.getElementById(x);
  // console.log(element)
  element.classList.remove("d-flex");
  element.classList.add("d-none");
  // console.log(element)
var arr=JSON.parse(localStorage.getItem(this.props.user));
// arr=(JSON.parse(arr))
// console.log(arr)
var arr2=[];
  for(var i=0;i<arr.length;i++){
    if(e=== arr[i].text){
   continue;
    }
    else{
      arr2.push(arr[i])
    }
  
  }
// console.log(arr2)
  localStorage.removeItem(this.props.user)
  localStorage.setItem(this.props.user,JSON.stringify(arr2))

}
handleCheck(x,y,z,m,value,c){
  // console.log(x,y)
  var detail = document.getElementById(value).value;

  var element1 = document.getElementById(x);
  var element2 = document.getElementById(y);
  var element3=document.getElementById(z);
  var input=document.getElementById(m);
  var check=document.getElementById(c).checked;


  element3.readOnly=true;
  element3.classList.remove("form-control");
  element3.classList.add("form-control-plaintext");
  // console.log(input.value)
  element1.classList.add("d-none");
  element2.classList.remove("d-none");
var arr=this.props.items
// console.log(this.state.input)
var obj={text:input.value,details:detail,isChecked:check,checkboxID:c,textID:m}
  // console.log(this.props.items)
  for(var i=0;i<arr.length;i++){
if(this.state.input=== arr[i].text){
  arr[i]=obj
}

}
  console.log(arr)

  localStorage.removeItem(this.props.user)
  localStorage.setItem(this.props.user,JSON.stringify(arr))
}

handleInfo(x){
// console.log(x)
var element= document.getElementById(x);
element.classList.toggle("d-none")

}
handleDetails(x,input,check){
  var e = document.getElementById(input).value;
var checkValue=document.getElementById(check).checked;
  // console.log(e)
  // console.log(x)
  var element= document.getElementById(x).value;
 
//  console.log(element)
//  var arr2=[];
var arr=this.props.items
// console.log(this.state.input)
var obj={text:e,details:element,isChecked:checkValue}
for(var i=0;i<arr.length;i++){
if(e=== arr[i].text){
  arr[i]=obj
}

}

  localStorage.removeItem(this.props.user)
  localStorage.setItem(this.props.user,JSON.stringify(arr))



  
  }
    render() {
  // console.log(this.props.items)

      // console.log(localStorage.getItem(this.props.user))
      return (
<ul class="list-group" style={{height:"400px",overflowY:"auto",marginTop:"2%"}}>
{this.props.items.map((item,index)  => (
  <div id={item.text+index+index+index}>
  <li  class="list-group-item d-flex justify-content-between align-items-center m-2" >
  <div class="custom-control custom-checkbox" >
  <input type="checkbox"   id={item.text+index}  class="custom-control-input" onClick={this.handleClick.bind(this,item.text+index+index,item.text+index,item.text+index+index+index+index+index+index)} />
  <label class="custom-control-label" for={item.text+index}>
  <input  type="text"  readOnly class="form-control-plaintext" id={item.text+index+index} defaultValue={item.text} />
  </label>

</div>

<span class="badge d-none  ml-auto" id={item.text+index+index+index+index}>
    <a href="#" onClick={this.handleCheck.bind(this,item.text+index+index+index+index,item.text+index+index+index+index+index,item.text+index+index,item.text+index+index,item.text+index+index+index+index+index+index,item.text+index)} >
    <button className="btn btn-warning">Save</button>

  </a>
    </span> 
    <span class="badge  ml-auto" id={item.text+index+index+index+index+index}>
    <a href="#" onClick={this.handleEdit.bind(this,item.text+index+index+index+index+index,item.text+index+index+index+index,item.text+index+index,item.text+index+index,item.text+index)}>
    <button className="btn btn-warning">Edit</button>
  </a>
    </span>
    <span class="badge ">
    <a href="#" onClick={this.handleDelete.bind(this,item.text+index+index+index,item.text+index+index)}>
    <button className="btn btn-danger">Delete</button>

  </a>

    </span>
    <span class="badge ">
      
    <a href="#" onClick={this.handleInfo.bind(this,item.text+index+index+index+index+index+index)} >
    <button className="btn btn-success">Info</button>

  </a>

    </span>

</li>
<textarea class="form-control d-none" onChange={this.handleDetails.bind(this,item.text+index+index+index+index+index+index,item.text+index+index,item.text+index)}  id ={item.text+index+index+index+index+index+index} 
placeholder="Enter Details" defaultValue={item.details} required></textarea>


</div>

    ))}


</ul>




      );
    }
  }

  export default TodoList;