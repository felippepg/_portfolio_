/* eslint-disable no-alert */
import { useState } from 'react';
import HamburgerBtn from './HamburgerBtn';
import { Navbar, Logo } from './style';
import Linkedin from '../../../assets/images/linkedin.svg';
import Github from '../../../assets/images/github.svg';

export default function () {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <HamburgerBtn
        click={() => setShowMenu((showMenu) => !showMenu)}
        changeButton={showMenu}
      />
      <Navbar showList={showMenu}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#recents">Trabalhos recentes</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://github.com/felippepg">
              {showMenu ? 'Github' : <Logo src={Github} alt="Logo do github" />}
            </a>
          </li>
          <li>
            <a
              className="social"
              href="https://www.linkedin.com/in/felippe-gon%C3%A7alves/"
            >
              {showMenu ? (
                'Linkedin'
              ) : (
                <Logo src={Linkedin} alt="Logo do Linkedin" />
              )}
            </a>
          </li>
        </ul>
      </Navbar>
    </>
  );
}
