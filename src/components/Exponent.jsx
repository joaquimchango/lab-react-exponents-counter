const Exponent = ({count, increment, decrement, exponent}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}<sup>{exponent}</sup></p>
    <p className="exponent-result">{Array.from({ length: exponent }, () => count).join("*")}= <span className="total">{Math.pow(count,exponent)}</span></p>
  </div>
);

export default Exponent;