import * as React from 'react';

// eslint-disable-next-line no-unused-vars
type setterFunction = (arr: Array<number>) => void;

export interface Context {
  speedRef: React.RefObject<HTMLInputElement>,
  buttons: React.RefObject<HTMLButtonElement>[],
  comparesRef: React.RefObject<HTMLSpanElement>,
}

export interface SortingFunctionProps {
  howMany: number,
  arr: Array<number>,
  setArr: setterFunction,
  speedRef: React.RefObject<HTMLInputElement>,
  barsRef: React.RefObject<HTMLDivElement>,
  comparesRef: React.RefObject<HTMLSpanElement>,
}

export type InputRef = HTMLInputElement | null;
export type DivRef = HTMLDivElement | null;
export type SpanRef = HTMLSpanElement | null;
