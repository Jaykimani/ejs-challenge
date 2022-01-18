const input = document.getElementById("num-input");
const secondContainer = document.querySelector(".side-container-2")

input.onkeyup = function(){
    if(input.value){
        let num = 1;
        for(let i = 0; i < input.value; i++){
            let bars = document.createElement("div");
            bars.classList.add("bar");
            bars.innerHTML = ` <div> ${num} </div>`;

           secondContainer.appendChild(bars);
           num ++;
        }
    }else{
        secondContainer.innerHTML = "";
    }
}