import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
var container = {
};

const render = (Component) => {
  ReactDOM.render(
    <div style={container}>
      <AppContainer>
        <HashRouter>
          <Component/>
        </HashRouter>
      </AppContainer>
    </div>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
