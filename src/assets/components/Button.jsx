import './Button.css'

const Button = (props) => {
    return (  
        <a href="#" className="button">{props.content}</a>
    );
}

export default Button;