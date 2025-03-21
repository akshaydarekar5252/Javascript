// using Axios

// let btn = document.querySelector("button");
// let url2 ="https://dog.ceo/api/breeds/image/random" //api url for dog images


// btn.addEventListener("click",async ()=>{
//      let link =  await getImg();
//      console.log(link);
//      let img = document.querySelector("#result");
//     //  img.src = link; //or

//     img.setAttribute("src",link);


// })

// async function getImg(){
//     try{
//         let res =  await axios.get(url2);
//        return res.data.message;
//     }catch(err){
//         console.log("Something went wrong",err);
//         return "no image available";
//     }
   
// }

// btn.addEventListener("click",async ()=>{
//     let fact = await getFact();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";//api url for cat facts



// async function getFact(){
//     try{
//         let res =  await axios.get(url);
//        return res.data.fact;  
//     }catch(err){
//         console.log("Something went wrong",err);
//         return "no fact available";
//     }
   
// }









// sending headers with API request 

// const url = "https://v2.jokeapi.dev/joke/Any?safe-mode"

// async function getJokes(){
//     try{
//         const config ={headers:{ Accept : "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     }catch(err){
//         console.log(err);
//     }
// }



//using Query string 

let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () =>{
    let country = document.querySelector("input").value;
    console.log(country);
     let collages = await getColleges(country);
     console.log(collages);
     show(collages);
});

function show(collages){
    let list = document.querySelector("#list");
    list.innerText=""
    for(col of collages){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText= col.name;
        list.appendChild(li);
    }
} 

async function getColleges(country) {
    try{
         let res = await axios.get(url + country);
         return res.data;
    }catch(e){
        console.log("error",e);
        return [];
    }
}
