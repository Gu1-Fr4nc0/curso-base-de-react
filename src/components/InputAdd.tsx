import { useState } from "react";

interface InputAddProps {
  onAdd(value: string) : void;
}

export function InputAdd(props: InputAddProps) {
    const [value, setValue] = useState('');

    const handleAdd = () => {
        props.onAdd(value);
        setValue('');
    }

  return (
    <div>
      <input 
        value={value}
        onChange={(e) => setValue(e.target.value)} 
      />

      <button onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
}