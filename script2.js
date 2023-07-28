fetch("https://jsonplaceholder.typicode.com/users")
.then((Response)=>Response.json())
.then((data)=>{
  
for (var x in data){
  console.log(data[x].name)
}
})
.catch((error)=>console.log("can't fetch data"))