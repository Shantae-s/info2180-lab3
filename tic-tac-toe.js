window.onload=function (){
    let div_var= document.getElementById("board").children
    //console.log(div_var)
    for (var index=0; index < div_var.length; index++){
        div_var[index].classList.add("square")
    }
}