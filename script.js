async function display(){
    console.log("hello");
    const name1 = document.getElementById("name");
    const data  = await fetch("http://3.94.107.178:3000/details")
    .then(response => response.json());
    console.log(data);
    name1.innerHTML = data;
}
