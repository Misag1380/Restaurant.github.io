// let inpurElem = document.getElementById("in1")
// let listItems = document.querySelectorAll(".li_elem")

// listItems.forEach(function(li){
//    li.addEventListener("click",function(event){
//       // event.target.parentElement.remove()
//    console.log(event.target);
//    })
// })
// let p1elemnt = document.getElementById("p1")
// let p2elemnt = document.getElementById("p2")
// let boxelem = document.getElementById("box")

// p1elemnt.style.display = "none"
// p2elemnt.style.display = "none"



// console.log(inpurElem.hasAttribute("placeholder")) bodan ya nabodan attribute

   // inpurElem.removeAttribute( "city") // baraye hazfe attribute and bazgash nadarad
  
   // console.log(p3Elem.parentNode) // be pedar dastrasi peyda kardan
   // console.log(p4Elem.previousElementSibling) // bargashtan be elemnt agabi
   // console.log(p3Elem.nextElementSibling) // raftan be elemnt badi
   // console.log(listItems[2].previousSibling) // raftan be agab
   // console.log(listItems[3].nextSibling) // raftan be jelo
   // console.log(listUlElem.childElementCount) // dastrasi be bache elemnt
   // console.log(listUlElem.children[3])
   // console.log(listUlElem.childNodes) // namayesh tamami node ha
   // console.log(listUlElem.hasChildNodes()) // aya element bache dare ya na
// console.log(listUlElem.firstChild)
// console.log(listUlElem.lastChild)
// console.log(listUlElem.firstElementChild)
// console.log(listUlElem.lastElementChild)

//////////////////////////////////////////////////////////////////////

// onfocus
// onblur
// onclick
// onkeydown
// onkeypress
// onkeyup
// onsubmit //ferestadan form be server
// removeAttribute
// hasAttribute //boolian
// preventDefault() hazf defualth web

/////////////////////////////////////////////////////////////////////
// let p1Elem = document.getElementById("p1")
// let p2Elem = document.getElementById("p2")
// let p3Elem = document.getElementById("p3")
// let p4Elem = document.getElementById("p4")
// let p5Elem = document.getElementById("p5")
// let p6Elem = document.getElementById("p6")

// setInterval(function(){
//   p6Elem.innerHTML++
//   if(p6Elem.innerHTML == 10){
//    p6Elem.innerHTML = 0
//    p5Elem.innerHTML++
//    }
//    if(p5Elem.innerHTML == 6){
//    p5Elem.innerHTML = 0
//    p4Elem.innerHTML++
//    }
//    if(p4Elem.innerHTML == 9){
//    p4Elem.innerHTML = 0
//    p3Elem.innerHTML++
//    }
//    if(p3Elem.innerHTML == 6){
// p3Elem.innerHTML = 0
// p2Elem.innerHTML++
//    }
//    if(p2Elem.innerHTML == 9){
// p2Elem.innerHTML = 0
// p1Elem.innerHTML++
//    }
//    if(p1Elem.innerHTML == 2 && p2Elem == 4){
// p1Elem.innerHTML = 0
// p2Elem.innerHTML = 0
// p3Elem.innerHTML = 0
// p4Elem.innerHTML = 0
//    }
// },1000);
/////////////////////////////////////////////////////////////////

let imagesElem = document.getElementsByClassName("slid")
let boxElem = document.getElementById("bo")
let btn1Elem = document.getElementById("btn_1")
let conElem = document.getElementById("con")
let con2Elem = document.getElementById("con2")
let I_1Elem = document.getElementById("i_1")
let bodyElem = document.body
let sum = 0

   //  btn1Elem.addEventListener("click",function(){
      
   //    con2Elem.style.display = "flex"
   //    conElem.style.display = "none"
   //  })
   //  I_1Elem.addEventListener("click",function(){
   //    con2Elem.style.display = "none"
   //    conElem.style.display = "flex"
   //    bodyElem.style.backgroundColor = "white"
   //  })
    
setInterval(function(){
   if(sum > imagesElem.length -1){
      sum = 0
     }
     sum++
     for (i = 0; i < imagesElem.length; i++) {
         imagesElem[i].style.display = "none";
       }
         imagesElem[sum-1].style.display = "block";
},8000)

btn1Elem.addEventListener("click",function(){
conElem.style.display = "none"
})