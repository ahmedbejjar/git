//const all=document.querySelectorAll(".plus")
//console.log(all)
const btnp=document.getElementsByClassName("plus");
const checkboxinputs=document.querySelectorAll("input")
const btnlike=document.getElementsByClassName("like")
const btndelet=document.getElementsByClassName("delet")


// console.log(checkboxinputs)
for(var i=0;i<btnp.length;i++){
    btnp[i].addEventListener("click",Increment)
    checkboxinputs[i].addEventListener("click",totalprice)
    btndelet[i].addEventListener("click",monjiya)
    btnlike[i].addEventListener("click",lamya)
}
function monjiya(e){
const btndelet=e.target;
const divDELET=btndelet.parentElement.parentElement .parentElement .parentElement;
// console.log(divDELET)
divDELET.remove();
}
function lamya(e){
const btnlike=e.target;
btnlike.style.color = "#ff0000";

}
function Increment(e){
//console.log(e)
const btnplus=e.target;
// console.log(btnplus)
const divELT=btnplus.parentElement
console.log(divELT)
const quentitytag=divELT.querySelector("p")
//    console.log(quentitytag) 
var quentityvalue=parseInt(quentitytag.innerHTML)
quentityvalue++
// console.log(quentityvalue)
quentitytag.innerHTML=quentityvalue


const trElement=divELT.parentElement.parentElement
const uniterpricevalue=Number(trElement.querySelector(".uniteprice").innerHTML)
const pricetag=trElement.querySelector(".price")
var pricevalue=Number(pricetag.innerHTML)
 pricevalue=quentityvalue*uniterpricevalue
 console.log(pricevalue)
 pricetag.innerHTML=pricevalue
}
function totalprice(e){
    const checkboxElement=e.target;
    const pricevalue=Number(checkboxElement.parentElement.parentElement.querySelector(".price").innerHTML)
    var totaltag=document.querySelector("#total")
    var totalvalue=parseInt(totaltag.innerHTML)
    const btnplus=checkboxElement.parentElement.parentElement.querySelector(".plus")
    const btnminus=checkboxElement.parentElement.parentElement.querySelector(".minus")
    if(checkboxElement.checked==true){
        totalvalue+=pricevalue
        totaltag.innerHTML=totalvalue;
        btnplus.setAttribute("disabled",true)
        btnminus.setAttribute("disabled",true)
    }
    else{
        totalvalue-=pricevalue;
        totaltag.innerHTML=totalvalue;
        btnplus.removeAttribute("disabled")
        btnminus.removeAttribute("disabled")
    }
}




const btnm=document.getElementsByClassName("minus");
for(var i=0;i<btnp.length;i++){

    btnm[i].addEventListener("click",Decrement)

}
function Decrement(e){
//console.log(e)

const btnminus=e.target;
// console.log(btnplus)
const divELT=btnminus.parentElement
console.log(divELT)
const quentitytag=divELT.querySelector("p")
//    console.log(quentitytag) 
var quentityvalue=parseInt(quentitytag.innerHTML)
 if (quentityvalue>0){
    quentityvalue--
 }
 
// console.log(quentityvalue)
quentitytag.innerHTML=quentityvalue







const trElement=divELT.parentElement.parentElement
const uniterpricevalue=Number(trElement.querySelector(".uniteprice").innerHTML)
const pricetag=trElement.querySelector(".price")
var pricevalue=Number(pricetag.innerHTML)
 pricevalue=quentityvalue*uniterpricevalue
 console.log(pricevalue)
 pricetag.innerHTML=pricevalue
 
}


