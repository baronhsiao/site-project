import MoneyHOC from "./MoneyHOC";

function PersonTwo({ money, handleIncrease }) {
  return (
    <div>
      <h2>PersonTwo is offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  );
}

export default MoneyHOC(PersonTwo);
