// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time





let amount=JSON.parse(localStorage.getItem("amount")) || []
let total=amount.reduce(function(sum,el,index,arr){


    return  sum + Number(el)
},0)


document.querySelector("#wallet").innerText=total




let data=JSON.parse(localStorage.getItem("movie")) 
console.log(data)




data.map(function(el){
    document.querySelector("#movie").innerHTML=null

let div=document.createElement("div")



let name1=document.createElement("p")
name1.innerText=el.Title



let image=document.createElement("img")
image.src=el.Poster;


div.append(name1,image)

document.querySelector("#movie").append(div)

})


function check(){
let mvname=document.querySelector("#user_name").value
let seats=document.querySelector("#number_of_seats").value


if(total<(seats*100)){
    alert("Insufficient Balance!")
}
else{
    alert("Booking successful!")
}

}

