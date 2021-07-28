import { DivRef } from '../types';

interface props {
  current: DivRef
}

const setAllToBlue = ({ current }: props): void => {
  const currentBars = Array.from(current!.children) as Array<HTMLAnchorElement>;
  currentBars.forEach((bar) => {
    bar.style.backgroundColor = 'royalblue';
  });
};

export default setAllToBlue;
