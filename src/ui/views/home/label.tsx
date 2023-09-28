import React from 'react';
import { Kbd } from "@chakra-ui/react";

interface Props {
  title: string
  value: number
}

const Label: React.FC<Props> = ({ title, value }) => {
  return (
    <div className="flex">
      <span>
        <Kbd>{title}</Kbd> = <Kbd>{value || Infinity}</Kbd>
      </span>
    </div>
  );
};

export default React.memo(Label);