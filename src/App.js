import React from 'react';
import './style.css';

const ops = { '+': true, '-': true, '*': true, '/': true, '.': true };

export default function App() {
  const [count, setCount] = React.useState('');
  const [isDot, setIsDot] = React.useState(false);

  const last = count[count.length - 1];

  const opsDisabled = (() => {
    if (ops[last] && isDot && last !== '.') setIsDot(false);
    if (ops[last]) return true;

    return false;
  })();

  function del() {
    setCount(count.slice(0, -1));
  }

  function reset() {
    setCount('');
  }

  function equal() {
    setCount(String(eval(count)));
  }

  return (
    <div>
      <main>
        <div class="cointainer">
          <h2>calc</h2>
        </div>
        <input id="result" type="text" value={count} disabled />
        <div class="btn-wrapper">
          <div class="grid-cointainer">
            <button class="btn" onClick={() => setCount(count + '7')}>
              7
            </button>
            <button class="btn" onClick={() => setCount(count + '8')}>
              8
            </button>
            <button class="btn" onClick={() => setCount(count + '9')}>
              9
            </button>
            <button class="btn" onClick={del} id="btn-del">
              DEL
            </button>
            <button class="btn" onClick={() => setCount(count + '4')}>
              4
            </button>
            <button class="btn" onClick={() => setCount(count + '5')}>
              5
            </button>
            <button class="btn" onClick={() => setCount(count + '6')}>
              6
            </button>
            <button
              class="btn"
              onClick={() => setCount(count + '+')}
              disabled={opsDisabled}
            >
              +
            </button>
            <button class="btn" onClick={() => setCount(count + '1')}>
              1
            </button>
            <button class="btn" onClick={() => setCount(count + '2')}>
              2
            </button>
            <button class="btn" onClick={() => setCount(count + '3')}>
              3
            </button>
            <button
              class="btn"
              onClick={() => setCount(count + '-')}
              disabled={opsDisabled}
            >
              -
            </button>
            <button
              class="btn"
              onClick={() => {
                setCount(count + '.');
                setIsDot(true);
              }}
              disabled={opsDisabled | isDot}
            >
              .
            </button>
            <button class="btn" onClick={() => setCount(count + '0')}>
              0
            </button>
            <button
              class="btn"
              onClick={() => setCount(count + '/')}
              disabled={opsDisabled}
            >
              /
            </button>
            <button
              class="btn"
              onClick={() => setCount(count + '*')}
              disabled={opsDisabled}
            >
              x
            </button>
          </div>
          <div class="container2">
            <button class="btn-re" onClick={reset} id="btn-result">
              RESET
            </button>
            <button
              class="btn-re"
              onClick={equal}
              disabled={opsDisabled}
              id="btn-equal"
            >
              =
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
