const loginFun = async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const response = await fetch("/api/user/login", {
        method: 'POST', headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({email, password})
    });
    const data = await response.json();
    if(response.ok) {
        console.log('success');
        document.location.replace('/');
    } else {
        console.error(data.message)
    }
}

document.getElementById('login_btn').addEventListener('click', loginFun);

