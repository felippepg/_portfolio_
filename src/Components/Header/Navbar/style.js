import styled, { keyframes } from 'styled-components';

const animated = keyframes`
 from {
        opacity: 0;
        margin-top: -100px;
    }

    to {
        opacity: 1;
        margin-top: 0px;
    }
`;

export const Navbar = styled.nav`
  background-color: #1b1b1b;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  width: 80%;

  ul {
    display: flex;

    li a {
      color: #9c9c9c;
      text-decoration: none;
      margin-left: 3em;
    }

    .social {
      margin-right: 3em;
    }

    li a:hover {
      color: #c4c4c4;
    }
  }

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.showList ? 'flex' : 'none')};
    flex-direction: column;
    font-size: 14px;
    background-color: #000;
    position: relative;
    top: 5%;
    left: 25%;
    margin-bottom: 10px;
    width: auto;
    animation: ${animated} 3s;

    ul {
      flex-direction: column;

      li {
        margin-top: 5px;
      }
    }
  }
`;
