const logout = async() => {
    const response = await fetch('/api/user/logout',  {
        method: 'POST', headers: {'Content-Type': 'application/json'}, 
    }); 
    if(response.ok) {
        console.log('success');
        document.location.replace('/');
    } else {
        console.error(data.message)
    }
}

document.getElementById('logout').addEventListener('click', logout);
