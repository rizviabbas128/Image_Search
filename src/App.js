import { useState } from 'react';
import './App.css';
import { LoadImage, SearchImages } from './components/api';
import Image from './components/image';

function App() {
  const [query, setQuery] = useState();
  const [searchQ, setSearch] = useState();
  const data = LoadImage();
  const Search = () => {
    setSearch(query)
  }
  const searchData = SearchImages(searchQ);
  return (
    <div className="App">
     <div className='head'>
     <div>
      <h1>React Photo Search</h1>
      </div>
      <div>
        <input type='text' placeholder='Search free high resolution images' onChange={(e) => setQuery(e.target.value)} />
        <button onClick={Search}>Search</button>
      </div>
     </div>
      <div className='contain'>
      {searchQ == null ? null : searchData.map((img, i) => (
        <Image src={img.urls.thumb} key={i}/>
      ))}
      </div>
    </div>
  );
}

export default App;
