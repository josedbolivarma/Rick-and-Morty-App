import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';

 function App() {
   const [pageNumber, setPageNumber] = useState(1)
   const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
   const [fetchedData, updateFetchedData] = useState([]);

  const { info, results } = fetchedData;
   
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
    </div>
  );
}

export default App;
