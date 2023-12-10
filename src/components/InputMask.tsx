import React, { useState, useEffect, useRef } from 'react';
import { Input } from '../styled';

interface IInputMaskProps {
  initialValue?: string;
  onChange: (value: string) => void;
}

const InputMask: React.FunctionComponent<IInputMaskProps> = ({ initialValue, onChange }) => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const maskPhone = (phoneNumber: string) => {
    const inputValue = phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);

    if (!inputValue) {
      return false;
    }

    const maskedValue: string = !inputValue[2]
      ? inputValue[1]
      : `${inputValue[1]}-${inputValue[2]}${`${inputValue[3] ? `-${inputValue[3]}` : ''}`}${`${
          inputValue[4] ? `-${inputValue[4]}` : ''
        }`}`;
    const pureValue: string = maskedValue.replace(/(\D)/g, '');

    return { maskedValue, pureValue };
  };

  const handleChange = () => {
    if (!inputRef.current) {
      return false;
    }

    const { maskedValue, pureValue } = maskPhone(inputRef.current.value) as { maskedValue: string; pureValue: string };
    inputRef.current.value = maskedValue;
    setValue(pureValue);
    onChange(value);
  };

  useEffect(() => {
    if (!inputRef.current) {
      return undefined;
    }

    const { maskedValue } = maskPhone(initialValue || '') as { maskedValue: string; pureValue: string };
    inputRef.current.value = maskedValue;
  }, []);

  useEffect(() => {
    handleChange();
  }, [value]);

  return <Input type='tel' ref={inputRef} onChange={handleChange} placeholder='000-000-000' autoFocus />;
};

export default InputMask;
