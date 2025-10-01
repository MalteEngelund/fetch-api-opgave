const foxURI = "https://randomfox.ca/floof/"
const foxes = document.getElementById("theFox");

export default function buildFox(myFoxData){
    let myFoxHTML=`<img src="${myFoxData.image}" alt="fox">`;
    foxes.innerHTML+=myFoxHTML;
}
fetch(foxURI)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    buildFox(data);
})
.catch((error)=>{
    console.error(error);
});


const catURI = "https://api.thecatapi.com/v1/images/search"
const cats = document.getElementById("theCat");

export function buildCat(myCatData){
    let myCatHTML=`<img src="${myCatData[0].url}" alt="cat">`;
    cats.innerHTML+=myCatHTML;
}
fetch(catURI)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    buildCat(data);
})
.catch((error)=>{
    console.error(error);
});


const dogURI = "https://dog.ceo/api/breeds/image/random"; // de har en random image url
const dog = document.getElementById("theDog");

export function buildDog(myDogData){
    let myDogHTML=`<img src="${myDogData.message}" alt="dog">`;
    dog.innerHTML+=myDogHTML;
}
fetch(dogURI)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    buildDog(data);
})
.catch((error)=>{
    console.error(error);
});