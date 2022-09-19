// #24
// import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    //let name = 'mario'
    
    // create a reactive variable
    //const [name, setName] = useState('mario') 
    //const [age, setAge] = useState(25)

    // simulating an array of blogs, each id would be unique
    // const [blogs, setBlogs] = useState([
    //    {title: 'My new website', body: 'lorem...', author: 'Mario', id: 1},
    //    {title: 'welcome party', body: 'lorem...', author: 'Yoshi', id: 2},
    //    {title: 'Web dev top tips', body: 'lorem..', author: 'Mario', id: 3}
    //])

    //const handleClick = () => {
    //    console.log('Hello tigres!')
    //    setName('Luigi')
    //    setAge(30)
    //}

    //const handleClickAgain = (name, e) => {
    //    console.log('hello' + name, e.target)
    //}

    // <button onClick={(e) => {handleClickAgain(' Castillo', e) }}>Click me again</button> 
    // erased bellow first button

    // #12 <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blog" />
    
    // #13
    //const handleDelete = (id) => {
    //    // newBlogs is to store the filtered array temporarily. blog.id is the iteration
    //    const newBlogs = blogs.filter(blog => blog.id !== id)
    //    setBlogs(newBlogs)
    //}
    
    // #14
    //useEffect(() => {
    //    console.log('use effect')
    //    console.log(blogs)
    //})

    // #15
    //const [name, setName] = useState('mario')

    /*
    useEffect(() => {
        console.log('use effect')
        //console.log(blogs)
        console.log(name)
    }, [name])
    */

    /*
        return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} BlogList/>
            <button onClick={() => setName('Luigi')}>change name</button>
            <p>{ name }</p>
        </div>
     )
    */

    /*
    // #17
    const [blogs, setBlogs] = useState(null) // initial value to null

    // #18
    const [isPending, setIsPending] = useState(true)

    // #19
    const [error, setError] = useState(null)
    
    // #20 move to useFetch.js 
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok ) {
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then(data => {
                    //console.log(data)
                    setBlogs(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err =>{
                    //console.log(err.message)
                    // #19
                    setIsPending(false)
                    setError(err.message)
                })
        }, 1000)
    }, [])
    */

    // #20
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            
            { error && <div> {error} </div>}
            { isPending && <div> Loading ...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        </div>
     )
}
 
export default Home;