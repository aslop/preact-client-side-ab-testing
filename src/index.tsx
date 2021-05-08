import { h, render } from 'preact';

// Component imports
import Mycomp from './components/MyComp';
import './styles/main.css';
// Project settings
import { waitForElement } from './lib/waitForElement';

const targetCssSelector = '.Module1';

waitForElement(targetCssSelector, (cssSelector) => {
  const target = document.querySelector(cssSelector);
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
});
