import { h, render } from 'preact';

// Imports
import Mycomp from './components/MyComp';

// Project settings
const target = document.querySelector('.Module1');
target!.innerHTML = '';

function MainComponent() {
  return (
    <div>
      <Mycomp />
    </div>
  );
}

const App = <MainComponent />;

render(App, target!);
