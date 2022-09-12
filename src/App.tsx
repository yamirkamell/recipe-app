import './App.css';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';
import Router from './pages';

function App() {
  return (
    <StoreProvider store={store}>
      <Router />
    </StoreProvider>
  );
}

export default App;
