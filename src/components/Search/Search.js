import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Search.module.scss';

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form
    className='d-flex justify-content-center gap-4 mb-4'
    >
      <input 
      className={`${styles.input}`}
      onChange={e => {
        setPageNumber(1);
        setSearch(e.target.value);
      }}
      placeholder='Search form Characters'
      type="text" 
      />

      <button 
      onClick={(e) => e.preventDefault()}
      className={`${styles.btn} btn btn-primary fs-5`}>
        Search
      </button>
    </form>
  )
}

export default Search