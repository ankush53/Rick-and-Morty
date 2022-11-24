import React,{useEffect,useState}from 'react'
import ReactPaginate from 'react-paginate';



const Pagination = ({info, pageNumber,setPageNumber}) => {
   const [width, setWidth]= useState(window.innerwidth);
   
   const updateDimension=()=>{
    setWidth(window.innerWidth);
   }
   useEffect(()=>{
    window.addEventListener("resize", updateDimension);
    return () =>
      window.removeEventListener("resize", updateDimension);   
  },[]);
  
  return (
    <>
    <style jsx>
          {`
          @media (max-width: 768px){
            .next{
              display: none;
            }
            .prev{
              display: none;
            }
            .pagination{
              font-size:15px;
            }
          }
          `}
    </style>
    <ReactPaginate  
       className="pagination justify-content-center gap-4 mb-5" 
       nextLabel="Next"
       forcePage={pageNumber===1 ? 0 : pageNumber-1}
       previousLabel="Prev"
       nextClassName="btn btn-primary fs-5 next"
       previousClassName="btn fs-5 prev"
       pageClassName="page-item"
       pageLinkClassName="page-link"
       marginPagesDisplayed={width < 576 ? 1 : 2}
       pageRangeDisplayed={width < 576 ? 1 : 2}
       activeClassName="active"
        onPageChange={(data)=>{
  setPageNumber(data.selected+1);
}}
pageCount={info?.pages}/>
</>
  );
};

export default Pagination;

