import './Header.scss';

const Header = () => {
  return(
    <header>
      <div className="header-info">
        <img src='/Randall_Holsinger_Portfolio.jpg' alt='photo'/>
        <h1>Randall Holsinger</h1>
        <h2>{' Full-Stack Web Developer'}</h2>
      </div>
    </header>
  )
}

export default Header