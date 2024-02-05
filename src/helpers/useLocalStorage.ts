import { useState, useEffect } from 'react';
import { AddOn } from '../types/AddOn';
import { PlanType } from '../types/PlanType';
import { FormType } from '../types/FormType';

export function useLocalStorage(
  initialValue: AddOn[] | PlanType | FormType, key: string,
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
