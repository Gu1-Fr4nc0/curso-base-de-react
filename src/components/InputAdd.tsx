import InputAddStyles from './InputAdd.module.css';
import { useRef, useState } from "react";

interface InputAddProps {
  onAdd(value: string) : void;
}

export function InputAdd(props: InputAddProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [value, setValue] = useState('');

    const handleAdd = () => {
        props.onAdd(value);
        setValue('');
        inputRef.current?.focus();
    }

  return (
    <div className={InputAddStyles.Container}>
      <input 
        value={value}
        ref={inputRef}
        className={InputAddStyles.Input}
        onChange={(e) => setValue(e.target.value)} 
      />

      <button onClick={handleAdd} className={InputAddStyles.Button}>
        Adicionar
      </button>
    </div>
  );
}