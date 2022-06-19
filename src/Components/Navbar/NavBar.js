import { Routes, Route, Link } from "react-router-dom";


function Navbar({ logged, setLoggedUser }) {

    const logout = () => {
        localStorage.removeItem('user');
        setLoggedUser(null);
    };
    return (
        <header id="headerWrapper">
            <h1 id="Logo"><Link to="/Home">Home</Link></h1>
            
            {!logged ?
                <nav>
                    <ul >
                        <li><Link to="/RegisterAsBarber">Register As Barber</Link></li>
                        <li><Link to="/Register">Register</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </nav>
                :
                <nav>
                    <ul >
                        <p>Hello {logged.userName}</p>
                        <li><Link to="/home" onClick={logout}>Log Out</Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
}

export default Navbar;