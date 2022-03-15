import { useState, useCallback } from 'react';

function useToggle(initStatus: boolean = false) {
  const [value, setValue] = useState(initStatus);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle, setValue] as const;
}

export default useToggle;
