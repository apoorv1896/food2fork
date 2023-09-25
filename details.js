const b1 = document.getElementById("box1")
const b2 = document.getElementById("box2")

function info(){
    const adrs = window.location.href
    const web = new URL(adrs)
    console.log(web);
    const params = new URLSearchParams(web.search)
    console.log(params);
    if(!params.has("id")){
        return
    }   
    if(!params.has("qr")){
        // window.location.href = "./home.html"
    }
    const api = fetch(` https://forkify-api.herokuapp.com/api/get?rId=${params.get('id')}`)
    api.then((response)=>{
        return response.json();
        }).then((data)=>{
            let titl = document.createElement("h2")
            let pub = document.createElement("h3")
            let webpage = document.createElement("a")
            let mainpage = document.createElement("a")
            let ing= document.createElement("p")
            let imag = document.createElement('img')
            let btn1 = document.createElement('button')
            let btn2 = document.createElement('button')
            let head = document.createElement('h1')
            btn1.appendChild(webpage)

            btn2.appendChild(mainpage)
            btn1.classList.add("bt1")
            btn2.classList.add("bt2")
            pub.classList.add("pub")
           
            head.innerText="Ingredients"
            titl.innerText = data.recipe.title
            pub.innerText = data.recipe.publisher
            webpage.href=data.recipe.publisher_url
            webpage.innerHTML="Publisher Webpage"
            webpage.target = "blank"
            mainpage.target = "blank"
            mainpage.href = data.recipe.source_url
            mainpage.innerHTML="Recipe URL"
            imag.src = data.recipe.image_url;
            ing.innerText = data.recipe.ingredients.map((ele)=>{
                                  return ele
                                          })
             
        //    console.log(imag);
           
           b1.appendChild(imag);
           b2.appendChild(titl)
           b2.appendChild( pub )
           b2.appendChild(btn1)
           b2.appendChild(btn2)
           b2.appendChild(head)
           b2.appendChild(ing)

            
        }
     )
}


window.onload = function(){
    info()
}




   
    