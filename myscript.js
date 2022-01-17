let go = document.getElementById("start");

go.addEventListener ("click", function(){
    let selezione = document.getElementById("myselect").value;
    let block = document.getElementById("block");  
    block.innerHTML = "";     
    let bombs = [];
    
    if(selezione=="1"){  
        for(let i=1; i<=100 ; i++){
            block.innerHTML += `<div class="quadrato num item-${i}">${i}</div>`;
        }        
    }else if(selezione=="2"){
        for(let index=1; index<=81 ; index++){
            block.innerHTML += `<div class="quadr num item-${index}">${index}</div>`;
        }       
    }else if(selezione=="3"){
        for(let j=1; j<=49 ; j++){
            block.innerHTML += `<div class="qua num item-${j}">${j}</div>`;
    }
}   
    

const item = document.querySelectorAll(".num");
functionBombs();
    
function functionBombs() {  
    for (let i = 0; i < 16; i++) {                                         
    let randomBombs = Math.floor(Math.random()*item.length +1);    
    if(bombs.includes(randomBombs)==true){                         
        i--;                                                         
    }else{                                                          
        bombs.push(randomBombs);                                    
    }
}
console.log(bombs)                                                  
        
    
for(let i = 0; i < item.length; i++) {                              

    item[i].addEventListener("click", function(){              
                
    let valore = parseInt(this.innerHTML);                  
    if (bombs.includes(valore)==true) {                     
        this.classList.add("changered");                    
        cellView();                                         
    }else{                                                     
        this.classList.add("change");                     
    }
});
       

function cellView(){
    for(let i = 0; i < item.length; i++) {
                    
    let valoreItem = parseInt(item[i].innerHTML);
        if (bombs.includes(valoreItem)==true) {
            item[i].classList.add("changered");
        }else{
            item[i].classList.add("change");
        }                    
    }                
}                                        
    }    
}});