import { useState } from "react"

const Home = () => {
    
    const [name, setName] = useState('mario')
    const [age, setAge] = useState(25)

    const handleClick = () => {
    //    console.log('Hello tigres!')
        setName('Luigi')

    }

    //const handleClickAgain = (name, e) => {
    //    console.log('hello' + name, e.target)
    //}

    // <button onClick={(e) => {handleClickAgain(' Castillo', e) }}>Click me again</button> 
    // erased bellow first butto 

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;