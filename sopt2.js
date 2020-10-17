const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const input = document.getElementById("input");

const createUsercard = (user) => {
    console.log("user",user);
    const cardHTML  = `
    <h2>${user.name}</h2>
    `;
    main.innerHTML = cardHTML;
}


const getUser = async (username) =>{
    console.log(user);
    const response = await fetch(API_URL + username)
    const responseData = await response.json();
   
    createUserCard(responseData);
};


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = input.value;

    if(user) {
        getUser(user);
        input.value="";
    }
});