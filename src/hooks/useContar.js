import { useState } from "react";

const useContar = () => {
  const [contar, setContar] = useState(1);

  const handleClick = () => {
    setContar(contar + 1);
  };

  return [contar, setContar];
};

export default useContar;
