function refresh(){
    window.location.reload("Refresh");
};

function eject(){
    for(let i = 1;i<=16;i++){
        var lista = document.getElementById("list");
        let tag = document.createElement("p");
        tag.setAttribute("id","result"+i);
        tag.setAttribute("class","print");
        lista.appendChild(tag);
    }
        
    for(let i = 1;i<=16;i++){
        if(i %3==0 && i %5==0){
            document.getElementById("result"+[i]).innerHTML=("FizzBuzz");
        }else if(i % 3 == 0){
            document.getElementById("result"+[i]).innerHTML=("Fizz");
        }else if (i%5==0){
            document.getElementById("result"+[i]).innerHTML=("Buzz");
        }else{
            document.getElementById("result"+[i]).innerHTML=(i);
        }
    };
};
