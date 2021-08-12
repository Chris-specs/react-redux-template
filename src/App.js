// REDUX
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/routes'

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Routes />
      </Provider>
    </Router>
  );
}

export default App;
