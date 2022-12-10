async function display(){
    console.log("hello");
    const name1 = document.getElementById("name");
    // console.log(name);
    const data  = await fetch("http://3.94.107.178:3000/details")
    .then(response => response.json());
    console.log(data);
    name1.innerHTML = data;
   
    //    name.innerHtml = "ad";
}

// async function getData(){
    
//     return data;
// }