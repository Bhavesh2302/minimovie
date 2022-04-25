// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


let id;
let amount=JSON.parse(localStorage.getItem("amount")) || []

let storedata=JSON.parse(localStorage.getItem("movie")) || []


let total=amount.reduce(function(sum,el,index,arr){


    return  sum + Number(el)
},0)


document.querySelector("#wallet").innerText=total






const searchmovies = async () => {
    try{

let s=document.querySelector("#search").value
// console.log(s)


const res= await fetch(` https://www.omdbapi.com/?s=${s}&apikey=cc4c735b`)



const data= await res.json()

// console.log(data)

let {Search}=data
// console.log(Search)

return Search;

// appenddata(Search)





    } 
    catch(err){
        console.log(err)
    }




}




const appenddata = (movies) => {
    document.querySelector("#movies").innerHTML=null;
movies.forEach(function(el){
    // console.log("hello")

    let div=document.createElement("div")


    let image=document.createElement("img")
    image.src=el.Poster
    // console.log(image)

let title=document.createElement("p")
title.innerText=el.Title
// console.log(title)


let btn=document.createElement("button")
btn.innerText="Book now";
btn.setAttribute("class","book_now")
btn.addEventListener("click",function(){
    showdata(el)
})


div.append(image,title,btn)

document.querySelector("#movies").append(div)

})



}


function showdata(el){

storedata.push(el)

window.location.href="checkout.html";

localStorage.setItem("movie",JSON.stringify(storedata))
 



}


async function main(){
    let data= await searchmovies()
    console.log(data)

    if(data===undefined){
        return false;

    }

    appenddata(data)
}



function debounce(func,delay){

if(id){
    clearTimeout(id)
}
id=setTimeout(function(){
    func()
},delay)

}




