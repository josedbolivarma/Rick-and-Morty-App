import { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import Filters from '../../components/Filters/Filters';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
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
<Search
setPageNumber={setPageNumber} 
setSearch={setSearch}
/>
{/* Search */}
<div className="container">
  <div className="row">
    {/* Filters */}
      <Filters 
      setStatus={setStatus} 
      setGender={setGender}
      setSpecies={setSpecies}
      setPageNumber={setPageNumber}
      />
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
  )
}

export default Home