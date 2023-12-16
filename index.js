function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
   
    if (username =="BIM" && password =="management") {
       window.open("navbar.htm");    
    }
    else {
       alert(" Access Denied ");       
    }
  }
  
