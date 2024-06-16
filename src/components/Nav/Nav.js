import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressBook, faUser, faSuitcase} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return(
    <nav>
      <img src='/rh-logo.png' />
      <ul>
        <li>
          <FontAwesomeIcon icon={faHouse} className='nav-icon'/>
          Home
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className='nav-icon'/>
          About
        </li>
        <li>
          <FontAwesomeIcon icon={faSuitcase} className='nav-icon'/>
          Portfolio
        </li>
        <li>
        <FontAwesomeIcon icon={faAddressBook} className='nav-icon'/>
        Contact
        </li>
      </ul>
    </nav>
  )
}

export default Nav