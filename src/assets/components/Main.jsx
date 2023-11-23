import Projects from "./Projects";
import './Main.css'
import Skills from "./Skills";
import Button from "./Button";

const Main = () => {
    return (  
        <section>
            <h4>PROJECTS</h4>
            <Projects/>
            <h4>SKILLS</h4>
            <Skills/>
            <h4>CONTACT</h4>
            <Button
                content={'email me'}
            />
        </section>
    );
}

export default Main;