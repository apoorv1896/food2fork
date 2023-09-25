
const btn = document.getElementById("btn");
const result = document.getElementById( "result");
const food =[];
const bar = document.getElementById("search");

function getRecipe(){

    result.innerHTML=" "
   
    const api = fetch(`https://forkify-api.herokuapp.com/api/search?q=${bar.value}`)
    api.then((response)=>{
        return response.json();
        }).then((data)=>{
            // console.log(data);
           data.recipes.map((ele)=>{
            const obj = {
                photo : ele.image_url,
                publish : ele.publisher,
                titles : ele.title,
                id:ele.recipe_id,
                  link : ele.source_url,
                  site : ele.publisher_url,   
            }
            food.push(obj);
        
           })
        })

        // console.log(food);
        
        food.map((item)=>{
            console.log(item);
            createCard(item)
        })
      
}


const createCard = (item)=>{
   
    let img  = document.createElement("img")
    let tit  = document.createElement("h3")
    let pub  = document.createElement("h4")
    let site1  = document.createElement("a")
    let site2  = document.createElement("a")
    let but = document.createElement('button')
    let card = document.createElement("div")
    let but1 = document.createElement("button")
    img.src = item.photo;
    
    tit.innerText = item.titles
    pub.innerHTML = item.publish
    site1.href = item.link
    site1.innerHTML = "Recipe URL"
    site1.target= "blank"

    but.appendChild(site2)
    site2.href = `./details.html?id=${item.id}`
    site2.innerHTML=" Details"
    but1.classList.add('but1')
    but.classList.add('but')

    but1.appendChild(site1)
    card.appendChild(img)
    card.appendChild(tit)
    card.appendChild(pub)
    card.appendChild(but1)
     card.appendChild(but)
    // card.appendChild(site2)
    card.classList.add('card')
    result.appendChild(card)

}


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    result.innerHTML=""
    document.getElementById('list').innerHTML= `: ${ bar.value }`
    getRecipe(); 
})

bar.addEventListener('keypress',()=>{
    result.innerHTML=" "
})

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});








