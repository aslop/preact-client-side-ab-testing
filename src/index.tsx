import { h, render } from 'preact';
import ProductsComponent from './components/ProductsComponent';
import './styles/main.css';
import { waitForElement } from './lib/waitForElement';
import { AppProvider } from './store/context';

// Replace with target css seelctor of the experiment
const targetCssSelector = 'main > div:nth-child(1) > div:nth-child(1)';

waitForElement(targetCssSelector, (cssSelector) => {
  const target = document.querySelector(cssSelector);
  target!.innerHTML = '';

  function App() {
    return (
      <AppProvider>
        <ProductsComponent />
      </AppProvider>
    );
  }

  render(<App />, target!);
});
