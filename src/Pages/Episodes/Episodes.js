import { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import InputGroup from '../../components/Filters/Category/InputGroup';

const Episodes = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const API = `https://rickandmortyapi.com/api/episode/${id}`;
  let { air_date, name } = info;
  useEffect(() => {

    ( async () => {
      let data = await fetch(API)
        .then(res => res.json())
        setInfo(data);
        let a = await Promise.all(
          data.characters.map((x) => {
            return fetch(x)
              .then((res) => res.json());
          })
        );

        setResults(a);
    } )();

  }, [API]);

  return (
    <div className='container'>
      <div className="row">
        <h1 className='text-center mb-4'>
          Episode : {' '}
          <span className="text-primary">
          { name === '' ? 'Unknown' : name }
          </span>
        </h1>
        <h5 className='text-center'>
          Air Date { air_date === '' ? 'Unknown' : air_date }
        </h5>
      </div>

      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">
          Pirck Episodes
          </h4>
          <InputGroup 
          total={51}
          name='Episode'
          setId={setId}
          />
        </div>

        <div className="col-8">
          <div className="row">
            <Cards 
            page='/episodes/'
            results={results}
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Episodes