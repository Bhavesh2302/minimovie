// Store the wallet amount to your local storage with key "amount"


// http://www.omdbapi.com/?i=tt3896198&apikey=cc4c735b




let storeamount=JSON.parse(localStorage.getItem("amount")) 


let total=storeamount.reduce(function(sum,el){


    return  sum + Number(el)
},0)

console.log(total)


document.querySelector("#wallet").innerText=total



function addmoney(){
  
let money=document.querySelector("#amount").value
console.log(money)


storeamount.push(money)

// console.log(storeamount)


localStorage.setItem("amount",JSON.stringify(storeamount))

window.location.reload()
}

//amount