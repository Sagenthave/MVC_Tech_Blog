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

const signupFun = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('new_mail').value;
    const password = document.getElementById('new_pass').value;
 
    const response = await fetch("/api/user/signup", {
        method: 'POST', headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({username, email, password})
    });
    const data = await response.json();
    if(response.ok) {
        console.log('success');
        document.location.replace('/');
    } else {
        console.error("error")
    }
}

document.getElementById('login_btn').addEventListener('click', loginFun);
document.getElementById('Sign_up').addEventListener('click', signupFun);


