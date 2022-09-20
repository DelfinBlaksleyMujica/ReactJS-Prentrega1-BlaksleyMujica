import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar empresa="Activá Studio"></NavBar>
      <ItemListContainer empresa="Activá Studio"/>
    </>
    
    
  );
}

export default App;
