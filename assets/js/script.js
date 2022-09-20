let table = document.querySelector(".table-body")
let remove = document.querySelector(".btn-2")
let btn = document.querySelector(".btn-1")

remove.addEventListener("click",function(){
    table.innerHTML=``;
})


btn.addEventListener("click", function(){
    getDatas()
})

async function getDatas(){
    let posts = await fetch("https://jsonplaceholder.typicode.com/comments");
    let result = await posts.json();
    let elemets = "";

    result.forEach(item => {
        elemets += `
       
      
        <tr>
        <td>${item.postId}</td>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.body}</td>
        </tr>`

        table.innerHTML = elemets

    });
    
    
}