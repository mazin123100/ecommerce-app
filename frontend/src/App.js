import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import ExpenseItem from './components/ExpenseItem'

import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/expense' component={ExpenseItem} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App
