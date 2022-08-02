/* eslint-disable no-alert */
import { useState } from 'react';
import HamburgerBtn from '../../HamburgerBtn';
import { Navbar } from './style';

export default function () {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <HamburgerBtn click={() => setShowMenu((showMenu) => !showMenu)} />
      <Navbar showList={showMenu}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Projetos</a>
          </li>
          <li>
            <a href="/">Trabalhos recentes</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Github</a>
          </li>
          <li>
            <a className="social" href="/">
              Linkedin
            </a>
          </li>
        </ul>
      </Navbar>
    </>
  );
}
