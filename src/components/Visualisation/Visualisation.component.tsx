import React, {
  useState, useEffect, useContext, useRef,
} from 'react';

import AppContext from '../../context/AppContext';
import { VisualisationContainer, SingleBar } from './Visualisation.styles';

import generateArray from '../../functions/generateArray';

import bubbleSort from '../../algorithms/bubbleSort';
import selectionSort from '../../algorithms/selectionSort';
import insertionSort from '../../algorithms/insertionSort';
import coctailSort from '../../algorithms/coctailSort';

import { Context } from '../../types';

const Visualisation = () => {
  const [arr, setArr] = useState<number[]>(generateArray(30));
  const { speedRef, comparesRef, buttons } = useContext<Context>(AppContext);
  const barsRef = useRef<HTMLDivElement>(null);
  const eventHandler = (e: MouseEvent): void => {
    const params = {
      howMany: 30, arr, setArr, speedRef, barsRef, comparesRef,
    };

    switch ((e.target as HTMLButtonElement).id) {
      case 'bubble':
        bubbleSort(params);
        break;
      case 'selection':
        selectionSort(params);
        break;
      case 'insertion':
        insertionSort(params);
        break;
      case 'coctail':
        coctailSort(params);
        break;
      default:
        break;
    }
    buttons.forEach((btn: React.RefObject<HTMLButtonElement>) => {
      btn.current!.removeEventListener('click', eventHandler);
      btn.current!.disabled = true;
    });
  };

  useEffect(() => {
    buttons.forEach((btn: React.RefObject<HTMLButtonElement>) => btn.current!.addEventListener('click', eventHandler));
  }, []);

  return (
    <VisualisationContainer ref={barsRef}>
      {arr.map((item, index) => (
        <SingleBar
          // temp
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="singleBar"
          height={Math.floor(item / 12)}
        >
          {item}
        </SingleBar>
      ))}
    </VisualisationContainer>
  );
};

export default Visualisation;
