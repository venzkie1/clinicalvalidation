function validate()
{

    let user = 
    
    if(username == "")
    {
        alert(`Fill the username field!`);
        return false;
    }
    else (username == "admin@yahoo.com")
    {
        alert(`Login successful`);

    }

    if(password == "") {  
        alert("**Fill the password please!")
        return false;  
     }  
      

     if(password == "admin12345") {  
        alert(`Login successful`);
        return false;  
     }  
}