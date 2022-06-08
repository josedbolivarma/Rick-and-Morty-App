import { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import InputGroup from '../../components/Filters/Category/InputGroup';

const Location = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const API = `https://rickandmortyapi.com/api/location/${id}`;
  let { type, name, dimension } = info;
  useEffect(() => {

    ( async () => {
      let data = await fetch(API)
        .then(res => res.json())
        setInfo(data);
        let a = await Promise.all(
          data.residents.map((x) => {
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
          Location : {' '}
          <span className="text-primary">
          { name === '' ? 'Unknown' : name }
          </span>
        </h1>
        <h5 className='text-center'>
          Dimension : { dimension === '' ? 'Unknown' : dimension }
        </h5>

        <h6 className='text-center'>
          Type : { type === '' ? 'Unknown' : type }
        </h6>
      </div>

      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">
          Pirck Location
          </h4>
          <InputGroup 
          total={126}
          name='Location'
          setId={setId}
          />
        </div>

        <div className="col-8">
          <div className="row">
            <Cards 
            page='/location/'
            results={results}
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Location