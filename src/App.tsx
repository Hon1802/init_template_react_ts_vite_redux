import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './common/layout'
import Home from './page/homePage'
import { Provider } from 'react-redux';
import store from './common/redux/store';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
