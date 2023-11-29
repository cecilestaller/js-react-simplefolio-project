import './Nav.css'
import Dark from './svg/Dark';

const Nav = ({transferDarkState, getter}) => {
    console.log("Nav log", getter);

    const changeMode = () => {
        transferDarkState((state) => !state);
    }
    return ( 
        <nav>
            <h1>JS.</h1>
            <ul className='nav_list'>
                <li><a href="#">projects</a></li>
                <li><a href="#">skills</a></li>
                <li><a href="#">contact</a></li>
                <div onClick={changeMode}>
                    <Dark />
                </div>
            </ul>
        </nav>
    );
}
 
export default Nav;