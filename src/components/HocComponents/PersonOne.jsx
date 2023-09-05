import MoneyHOC from "./MoneyHOC";

function PersonOne({ money, handleIncrease }) {
  return (
    <div>
      <h2>PersonOne is offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  );
}

export default MoneyHOC(PersonOne);
