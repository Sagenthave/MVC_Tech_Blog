// CREATE A BLOG POST
const postFun = async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    document.getElementById("update_all_btn").style.display = "none";
    document.getElementById("submit_btn").style.display = "inline-block";
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
    const newtitle = document.getElementById('update_blogTitle').textContent;
    const newDescription = document.getElementById('update_blogContent').textContent;
    const blog_id = document.getElementById('blog_id').value;

    document.getElementById("update_all_btn").style.display = "inline-block";
    document.getElementById("submit_btn").style.display = "none";

    document.getElementById("blogId_update").value = blog_id;
    document.getElementById("title").value = newtitle;
    document.getElementById("description").textContent = newDescription;

   
}

document.getElementById('update_btn').addEventListener('click', editFun);

const updatetheData = async(e) => {
  e.preventDefault();
  // WHERE WOULD THESE ELEMENTS GO?
 alert();
  const blog_id = document.getElementById('blog_id').value;

  document.getElementById("update_all_btn").style.display = "inline-block";
  document.getElementById("submit_btn").style.display = "none";

  const newtitle = document.getElementById("title").value;
  const newDescription = document.getElementById("description").textContent;

  const response = await fetch(`/api/blog/${blog_id}`, {
    method: 'PUT', headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({newtitle, newDescription})
});

const data = await response.json();
if(response.ok) {
  alert('Your post has been updated!');
  document.location.reload();
} else {
    console.error("error")
}
 
}

document.getElementById('update_all_btn').addEventListener('click', updatetheData);

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
