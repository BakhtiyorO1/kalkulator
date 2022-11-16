let valueInput = document.querySelector("#inval")
console.log(valueInput.value)

function calculate(number){
    valueInput.value+=number
}
function result(){
   valueInput.value = eval(valueInput.value)
}


function del (){
    valueInput.value = ""
}