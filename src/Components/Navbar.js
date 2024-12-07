import Logo from './Logo';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpenNav() {
    setIsOpen(() => !isOpen);
    console.log(isOpen);
  }

  return (
    <div className="navbar">
      <Logo />
      <ul className={!isOpen ? 'open' : ''}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Programs</a>
        </li>
        <li>
          <a href="">Coaching</a>
        </li>
        <li>
          <a href="">Membership</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
      </ul>
      <div className="register">
        <button className="login">login</button>
        <button className="signup">sign in</button>
      </div>
      <div
        className="bars"
        style={{ borderColor: !isOpen ? 'var(--main-color)' : 'transparent' }}
        onClick={handleOpenNav}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default Navbar;
