import './Header.scss';
import { Slide, Fade } from 'react-awesome-reveal';

const Header = () => {
  return(
    <header>
      <div className="header-info">
        {/* <img src='/Randall_Holsinger_Portfolio.jpg' alt='photo'/> */}
        <Slide>
        <h1>Randall Holsinger</h1>
        </Slide>
        <Fade 
        className='sub-heading'
        cascade 
        damping={0.1}>
          Full-Stack Web Developer
        </Fade>
      </div>
    </header>
  )
}

export default Header