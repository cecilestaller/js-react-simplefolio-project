import './Nav.css'

const Nav = () => {
    return ( 
        <nav>
            <h1>JS.</h1>
            <ul className='nav_list'>
                <li><a href="#">projects</a></li>
                <li><a href="#">skills</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </nav>
    );
}
 
export default Nav;