import React from 'react';

class Home extends React.Component {

  
  componentDidMount(){
    var x=document.getElementById("UserButtons");
  var nav1=document.getElementById("nav1");
  var nav2=document.getElementById("nav2");
  var nav3=document.getElementById("nav3");
  var nav4=document.getElementById("nav4");

  if(x&&nav1&&nav2&&nav3&&nav4){
    x.classList.remove("d-none");
    nav1.classList.remove("d-none");
    nav2.classList.remove("d-none");
    nav3.classList.add("d-none");
    nav4.classList.add("d-none");
  }

  }
  
    render(){

        return(
        <div></div>
        )
    }
}
export default Home;