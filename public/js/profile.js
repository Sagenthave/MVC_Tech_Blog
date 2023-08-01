// CREATE A BLOG POST
const postFun = async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
 //fetch router
    const response = await fetch("/api/blog/", {
        method: 'POST', headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({title, description})
    });
    const data = await response.json();
    if(response.ok) {
      alert('Your post has been created!');
      document.location.reload();
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
    const id = document.getElementById('blog_id').value;
        const response = await fetch(`/api/blog/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          alert("Post deleted succesffuly!!");
          document.location.reload();
        } else {
          console.log('Failed to delete post');
        }
      
}
document.getElementById('delete_btn').addEventListener('click', deleteFun);
