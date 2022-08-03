/* eslint-disable react/prop-types */
import { ResponsiveArea, BtnHamburg } from './style';

export default function ({ click }) {
  return (
    <ResponsiveArea onClick={click}>
      <BtnHamburg />
      <BtnHamburg />
      <BtnHamburg />
    </ResponsiveArea>
  );
}
