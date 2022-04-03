import mylogo from "./Images/myLogo.png"
import search1 from "./Images/search1.svg"
import spiderman from "./Images/spiderman.jpg"

function Navbar() {
    return (
        <div>
            <nav className="nav-bar">
                <img className="logo-home" src={mylogo} alt="logo" />
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">TV Shows</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">New/Popular</a></li>
                    <li><a href="#">My List</a></li>
			    </ul>
                <div className="nav-items">
                    <img id="search" src={search1}/>
                    <div className="user">User</div>
                </div>
            </nav>

            <div className="movie-head">
            hii
            </div>
            
        </div>
    )
}

export default Navbar
