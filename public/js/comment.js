const commentFun = async (e) => {
    e.preventDefault();
    const comment = document.getElementById('comment').value;
    
 //fetch router
    const response = await fetch("/api/user/comment/", {
        method: 'POST', headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({comment})
    });
    const data = await response.json();
    if(response.ok) {
        console.log('success');
        document.location.replace('/');
    } else {
        console.error("error")
    }
}

document.getElementById('comment_btn').addEventListener('click', commentFun);