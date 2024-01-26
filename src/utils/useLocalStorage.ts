import { useState, useEffect } from 'react';
import { AddOn } from '../types/AddOn';
import { PlanType } from '../types/PlanType';

export function useLocalStorage(
  initialValue: AddOn[] | PlanType, key: string,
) {
  const getValue = () => {
    const storage = localStorage.getItem(key);

    if (storage) {
      return JSON.parse(storage);
    }

    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
