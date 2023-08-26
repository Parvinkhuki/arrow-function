fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(datas => data(datas))

      function data(datas) {
        for (const data of datas) {
            
     
       const div1=document.getElementById("div1")
       const div=document.createElement("div")
       div.style.background="pink"
       div.style.padding="10px"
       div.style.margin="10px"
       div.innerHTML=`<h1>${data.name}</h1>
       <p>${data.body}</p>`
       div1.appendChild(div)
        }

        
      }