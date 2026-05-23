async function getNewJokes(){
    // const API_URL="https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark?blacklistFlags=nsfw";
     const API_URL="https://official-joke-api.appspot.com/jokes/random";
    const response= await fetch(API_URL);

    const data =await response.json();

// if(data.type=== "single")
// {
//     document.getElementById("setup").innerText=data.joke ;
//      document.getElementById("delivery").innerText= "";

// }else{
// document.getElementById("setup").innerText=data.setup;
//      document.getElementById("delivery").innerText= data.delivery;
// }

    // document.getElementById("setup").innerText=data.joke || data.setup;
    //  document.getElementById("delivery").innerText=data.delivery || "";
    document.getElementById("setup").innerText= data.setup;
     document.getElementById("delivery").innerText=data.punchline;
}