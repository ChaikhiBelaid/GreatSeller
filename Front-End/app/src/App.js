import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import HomeScreen from './home/HomeScreen'
import Pro from "./components/Pro"


function App() {
  const header="header part"
  const footer="footer part"
  return (
    <Router>
      <Header name={header}/>
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/product/:id" component={Pro}/>
        </Container>
      </main>
     
      
      <Footer />
    </Router>
  );
}

export default App;
