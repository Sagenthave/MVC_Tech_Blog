document.getElementById('login_btn').addEventListener('click', loginFun);

const loginFun = async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(email)
}