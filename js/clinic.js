function validate()
{
    let username = document.getElementById('username');
    let password = document.getElementById(`password`);

    if(username === "admin" && password === "user")
    {
        alert(`Login succesfully`);
        return false;
    }
    else
    {
        alert(`Login failed`);
    }
}