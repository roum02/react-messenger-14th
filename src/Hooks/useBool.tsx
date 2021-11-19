import { useState } from "react";

export default function useBool(boolProps: boolean = false) {
  const [bool, setBool] = useState<boolean>(boolProps);

  function onClick(): void {
    setBool(!bool);
  }

  return { bool, onClick };
}
