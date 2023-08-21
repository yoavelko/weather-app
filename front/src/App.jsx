import './App.css'
import Search from './components/search/Search'
import Result from './components/result/Result'
import { DataContext } from './contexts/DataContext'
import { useState } from 'react'

function App() {

  const [data, setData] = useState({
    info: undefined,
    type: true
  });

  return (
    <div id='app-container'>
      <DataContext.Provider value={{ data, setData }}>
        <div id='search-flexer' className='flexers'>
          <Search />
        </div>
        <div id='result-flexer' className='flexers'>
          <Result />
        </div>
      </DataContext.Provider>
    </div>
  )
}

export default App
