import './App.scss';
import Menu from './features/Menu/Menu.jsx';
import Search from './features/Search/Search';

function App() {
  return (
    <div className="App">
      <section id='sidebar'>
        <Menu />
        <Search />
      </section>
    </div>
  )
}

export default App