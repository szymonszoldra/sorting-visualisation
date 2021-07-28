import { DivRef } from '../types';

interface args {
  current: DivRef
}

const setAllToBlue = ({ current }: args): void => {
  const currentBars = Array.from(current!.children) as Array<HTMLAnchorElement>;
  currentBars.forEach((bar) => {
    bar.style.backgroundColor = 'royalblue';
  });
};

export default setAllToBlue;
