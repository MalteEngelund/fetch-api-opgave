const dogURI = "https://dog.ceo/dog-api/" // de har en random image url
const doggos = document.getElementById("theDog");

function buildDoggo(myDogData){
    let myDogHTML=`<img src="${myDogData.message}" alt="doggo">`;
    doggos.innerHTML+=myDogHTML;
}
fetch("https://dog.ceo/api/breeds/image/random")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    buildDoggo(data);
})
.catch((error)=>{
    console.error(error);
});



const catURI = "https://api.thecatapi.com/v1/images/search"
const cats = document.getElementById("theCat");
function buildCatto(myCatData){
    let myCatHTML=`<img src="${myCatData[0].url}" alt="cat">`;
    cats.innerHTML+=myCatHTML;
}
fetch("https://api.thecatapi.com/v1/images/search")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    buildCatto(data);
})
.catch((error)=>{
    console.error(error);
});


const foxURI = "https://randomfox.ca/floof/"
const foxes = document.getElementById("theFox");

function buildFox(myFoxData){
    let myFoxHTML=`<img src="${myFoxData.image}" alt="fox">`;
    foxes.innerHTML+=myFoxHTML;
}
fetch("https://randomfox.ca/floof/")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    buildFox(data);
})
.catch((error)=>{
    console.error(error);
});
