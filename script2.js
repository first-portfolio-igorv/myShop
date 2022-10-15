let bank = document.getElementsByClassName("bank");
let beer = document.getElementsByClassName("beer");
let wine = document.getElementsByClassName("wine");
let pepsi = document.getElementsByClassName("pepsi");
let countt = document.getElementsByClassName("count");
let radio = document.getElementsByClassName("radio");
let preresult = document.getElementsByClassName("text");
let add = document.getElementsByClassName("add");
let result = document.getElementsByClassName("result");
let buy = document.getElementsByClassName("buy");
let myShop = (function(){
    let countBeer=40;
    let countWine=10;
    let countPepsi=90;
    let priceBeer=30;
    let priceWine=100;
    let pricePepsi=20;
    let info=[countBeer,countWine,countPepsi]
    let infoPrice=[priceBeer,priceWine,pricePepsi]
    let total=1000;
    let count=1;
    let select="";
    let sum=0;
    function countProduct(){
        
        bank[0].textContent=`${total} грн`;
        beer[0].textContent=`${countBeer} шт`;
        wine[0].textContent=`${countWine} шт`;
        pepsi[0].textContent=`${countPepsi} шт`;
    }
    function add(){
        count=countt[0].value;
        for(let i=0;i<3;i++){
            if(radio[i].checked){
                select=radio[i].value;
                if(info[i]<count){
                    alert(`Вибачте, але на складі є лише ${info[i]} штук`)
                    return false;
                }
                else{
                    sum+=count*infoPrice[i];
                    info[i]-=count;
                    preresult[0].innerHTML+=`${select} ${count} шт`+"<br>"; 
                }
            }
        }
        countt[0].value="";
    }
    function sell(){
        result[0].innerHTML=preresult[0].innerHTML+`Всього: ${sum} гривень`;
        preresult[0].innerHTML="";
        total+=sum;
        countBeer=info[0];
        countWine=info[1];
        countPepsi=info[2]
        countProduct();
        sum=0;
        result[0].value="";
    }
    return{
        countProduct:countProduct,
        add:add,
        sell:sell
    }
}())
myShop.countProduct();
add[0].addEventListener("click", function(){
    myShop.add();
})
buy[0].addEventListener("click", function(){
    myShop.sell();
})
    
