
import ListItem from './components/Listitem';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/Themecontext';
import './index.css';

function App() {
  return (
    <div className="App text-center ">
      <ThemeContextProvider>
      
      <Navbar/>
      <ListItem/>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
