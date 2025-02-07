// fetch = Function used for making HTTPS requests to fetch resources. 
//     (JSON style DataTransfer, images,files)
//     Simplifies async data fetching in JS and used forinteracting with APIs
//     to retrive and send data asynchronously over the web.
//     fetch(url,{options})
fetchData()
async function fetchData(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/pikachu");

        if (!response.ok){
            throw new Error("Couldnt fetch resource!");
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}