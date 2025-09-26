import {Provider, useDispatch} from 'react-redux';
import {store} from './redux/store';
import App from './App';

function AppRenderer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppRenderer;
