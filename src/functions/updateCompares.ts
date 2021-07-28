import { SpanRef } from '../types';

interface args {
  current: SpanRef
}

const updateCompares = ({ current }: args): void => {
  const compares = Number(current?.textContent);
  current!.textContent = String(compares + 1);
};

export default updateCompares;
