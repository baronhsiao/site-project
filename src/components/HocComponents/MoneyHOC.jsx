import { useState } from "react";

function MoneyHOC(WrappedComponent) {
  function NewComponent() {
    const [money, setMoney] = useState(10);

    function handleIncrease() {
      setMoney((prev) => prev * 2);
    }

    return <WrappedComponent money={money} handleIncrease={handleIncrease} />;
  }
  return NewComponent;
}

export default MoneyHOC;
