import './App.scss';
import Hightlights from './features/Hightlights/Hightlights';
import Menu from './features/Menu/Menu.jsx';
import Search from './features/Search/Search';
import Today_Weather from './features/Today_Weather/Today_Weather.jsx';

function App() {
  return (
    <div className="App">
      <section id='sidebar'>
        <Menu />
        <Search />
        <Today_Weather />
      </section>
      <Hightlights />
    </div>
  )
}

export default App