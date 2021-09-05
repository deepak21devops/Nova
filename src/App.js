
import './App.css';
import BasicTable from './components/BasicTable';
import GlobalFilter from './components/GlobalFilter';
import PagenationTable from './components/PagenationTable';
import SortByTable from './components/SortByTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PagenationTable />
      </header>
    </div>
  );
}

export default App;
