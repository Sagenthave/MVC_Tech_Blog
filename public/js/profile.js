// CREATE A BLOG POST
const postFun = async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    
 //fetch router
    const response = await fetch("/api/user/blog/", {
        method: 'POST', headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({title, description})
    });
    const data = await response.json();
    if(response.ok) {
        console.log('success');
        document.location.replace('/');
    } else {
        console.error("error")
    }
}

document.getElementById('submit_btn').addEventListener('click', postFun);

// UPDATE A BLOG POST
const editFun = async(e) => {
    e.preventDefault();
    // WHERE WOULD THESE ELEMENTS GO?
    const newtitle = document.getElementById('newTitle').value;
    const newDescription = document.getElementById('newDescription').value;
}

document.getElementById('update_btn').addEventListener('click', editFun);


// DELETE A BLOG POST
const deleteFun = async(e) => {
    e.preventDefault();
    if (e.target.hasAttribute('delete_btn')) {
        const id = e.target.getAttribute('delete_btn');
        const response = await fetch(`/api/user/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          console.log('Failed to delete post');
        }
      }
}
document.getElementById('delete_btn').addEventListener('click', deleteFun);
