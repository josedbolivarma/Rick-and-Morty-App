import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ setPageNumber, pageNumber, info }) => {
  let next = () => {
    setPageNumber(x => x + 1);
  };

  let prev = () => {
    if(pageNumber === 1) return;
    setPageNumber(x => x - 1);
  };
  console.log(info);
  return (
    // <div className='container d-flex justify-content-center gap-5 my-5'>
    //   <button onClick={prev} className="btn btn-primary">
    //     Prev
    //   </button>

    //   <button onClick={next} className="btn btn-primary">
    //     Next
    //   </button>
    // </div>

    <ReactPaginate 
    className='pagination justify-content-center gap-4 my-4'
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    previousLabel='Prev'
    nextLabel='Next'
    previousClassName='btn btn-primary'
    nextClassName='btn btn-primary'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    activeClassName='active'
    onPageChange={(data) => {
      setPageNumber(data.selected + 1);
    }}
    pageCount={info?.pages}/>
  )
}

export default Pagination