// create your App component here
// import { data } from "../mocks/data";
import { useEffect, useState } from "react";



function App() {
    const[isLoading, setisLoading] = useState(true)
    const [dogs, setDogs] = useState([])
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then((data)=>{
                    console.log(data)

            setDogs([data.message])
            setisLoading(false)
        })
    },[])
// if (!isLoading) {
//     return <p>Loading...</p>
// }
const dogImages = dogs.map((dog)=>{
    return <img key ={dog}src={dog} alt="A Random Dog"></img>
})

    return(
        <>
        <h2>{isLoading ? <p>...isLoading</p> : null}</h2>
        {dogImages}</>
    )
}


export default App
