import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

 function App() {
   const [pageNumber, setPageNumber] = useState(1);
   const [search, setSearch] = useState('');
   const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
   const [fetchedData, updateFetchedData] = useState([]);

  const { info, results } = fetchedData;
   console.log(pageNumber);
  useEffect(() => {

    ( async () => {
      let data = await fetch(API)
        .then(res => res.json())
        console.log(data);
      updateFetchedData(data);
    } )();

  }, [API]);
  return (
    <div>
        <h1 className='text-center  ubuntu my-5'>Rick & Morty <span className='text-primary'>Wiki</span></h1>

        {/* Search */}
        <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
        {/* Search */}
        <div className="container">
          <div className="row">
            {/* Filters */}
            <div className="col-3">
              <Filters />
            </div>
            {/* Filters */}
            {/* Cards */}
            <div className="col-8">
                    <Cards results={results}/>
            </div>
            {/* Cards */}

          </div>
        </div>

        <Pagination info={info} setPageNumber={setPageNumber} pageNumber={pageNumber} />
    </div>
  );
}

export default App;
