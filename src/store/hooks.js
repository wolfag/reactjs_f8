import { useContext } from 'react';
import Context from './context';

export function useStore() {
  const [state, dispatch] = useContext(Context);

  return [state, dispatch];
}
