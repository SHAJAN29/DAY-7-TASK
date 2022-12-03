let request =new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all",true);
request.send();


request.onload=function(){

let data = request.response

let result =JSON.parse(data)

console.log(result)


let res = result.map((element)=>{

for(let key in element.currencies){

    if(element.currencies[key].code==="USD"){
        console.log(element.name)
    }
}


})



}