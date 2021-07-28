import { SpanRef } from '../types';

interface props {
  current: SpanRef
}

const updateCompares = ({ current }: props): void => {
  const compares = Number(current?.textContent);
  current!.textContent = String(compares + 1);
};

export default updateCompares;
