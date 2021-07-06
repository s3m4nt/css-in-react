import logo from './logo.svg';
import './App.css';
import { Button, Menu, MenuItem, Fade} from '@material-ui/core'
import {useState} from 'react'
import { findAllInRenderedTree } from 'react-dom/cjs/react-dom-test-utils.production.min';

function App() {
  const  [menuOpen, setMenuOpen] = useState(null)

  const handleClick = (e) => {
    setMenuOpen(e.currentTarget)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button style={{color: "white"}} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
        </Button>
        <Menu keepMounted open={menuOpen} TransitionComponent={Fade} anchorEl={menuOpen}>
          <MenuItem onClick={handleClick}><a href="http://www.yahoo.com/">Option 1</a></MenuItem>
          <MenuItem onClick={handleClick}>Option 2</MenuItem>
          <MenuItem onClick={handleClick}>Option 3</MenuItem>
        </Menu>
      </header>
    </div>
  )
}

export default App;
