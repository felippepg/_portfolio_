import styled from 'styled-components';

export const ResponsiveArea = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    position: absolute;
    right: 5vw;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    margin-left: 35px;
    background-color: #3f8e00;
  }
`;

export const BtnHamburg = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    height: 15px;
    margin-top: 5px;
    background-color: #000;
    cursor: pointer;
  }
`;
