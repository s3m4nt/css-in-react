import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import { Card, Image, Heading } from 'rebass'

function App() {
  return (
    <div className="App">
    <Nav />
    {/* rebass styling */}
      <header className="App-header">
        <Card width={120}>
          <Image src={logo} />
          <Heading>Learn React</Heading> 
        </Card>
      </header>
    </div>
  )
}

export default App;
