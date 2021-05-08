import { h, FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';

const Mycomp: FunctionalComponent = () => {
  const handleClick = () => {
    setCounter(counter + 1);
  };

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>

      <button
        style={{ background: 'green', color: 'white', padding: '1rem' }}
        onClick={handleClick}
      >
        Increase!
      </button>
    </div>
  );
};

export default Mycomp;
