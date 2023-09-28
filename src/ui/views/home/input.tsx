import React from 'react';
import { FormControl, FormLabel, Input as ChakraInput } from "@chakra-ui/react";

interface Props {
  id: string
  value: number
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<Props> = ({ id, value, handleChange }) => {
  return (
    <FormControl className="flex flex-col">
      <FormLabel className="!mb-1" htmlFor={id}>{id}</FormLabel>
      <ChakraInput
        id={id}
        name={id}
        type="number"
        variant="filled"
        value={value}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default React.memo(Input);