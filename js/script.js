var allCards=document.querySelectorAll(".col");
var alert=document.querySelector("#alert");
var btn=document.querySelector("#btn");
var alert2=document.querySelector("#alert2");
var totalPrice=0;
allCards.forEach(function(item) {
    
    item.onclick=function(){
        totalPrice+=+(item.getAttribute("price"));
       alert.innerHTML += item.getAttribute("desc")+"-";
       if(alert.innerHTML!="")
       {
        btn.style.display="block";
       }
    }

    
})
btn.onclick=function()
{
    alert2.innerHTML =totalPrice ;
}
