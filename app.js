import axios from "axios";


const getPosts = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response.data);
    } catch (error) {
        console.error("There was an error making the GET request", error);
    }
};

getPosts();
console.log(1)
console.log("bbb45")


console.log("tttadsads")
console.log("aadsa")
console.log("terhuhrf")

