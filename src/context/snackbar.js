import { createContext, useContext } from 'react';

export const SnackBarContext = createContext(true);

export function useSnackBar() {
  return useContext(SnackBarContext);
}