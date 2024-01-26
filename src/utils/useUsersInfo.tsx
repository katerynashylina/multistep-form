import { useState } from 'react';

export const useUserInfo = (type: string) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | boolean>(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\+?\d+$/;

  function validate(value: string, type: string) {
    if (!value.length) {
      setError("This field is required!");
      return false;
    }

    if (type && type === "email" && !emailRegex.test(value)) {
      setError("Invalid email");
      return false;
    }

    if (type && type === "phone" && !phoneRegex.test(value)) {
      setError("Invalid phone");
      return false;
    }

    setError(false); // Clear error if validation passes
    return true;
  }

  return {
    value,
    setValue,
    validate: () => validate(value, type),
    error,
  };
};
