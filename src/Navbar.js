import {Link} from 'react-router-dom'
/* 
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The dojo blog</h1>
            <div className="links">
                <a href="/">Home </a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New blog</a>
            </div>
        </nav>
    );
}
*/

//#23
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The dojo blog</h1>
            <div className="links">
                <Link to="/">Home </Link>
                <Link to="/create" style={{
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;
