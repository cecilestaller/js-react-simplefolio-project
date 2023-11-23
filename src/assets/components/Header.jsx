import Button from './Button';
import './Header.css'

const Header = () => {
    return ( 
        <article className='header_wrap'>
            <h2>Hi, I am <span className="name">John Smith.</span></h2>
            <h3>A Front End Developer.</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, quis quo totam aliquid iure veniam dolor atque asperiores autem. Similique laudantium vero nesciunt tenetur perferendis iste odio ipsum quos officiis.</p>
            <Button
                content={'resume'}
            />
        </article>
    );
}

export default Header;