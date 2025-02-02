import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Pagination.css';

function Pagination() {
  const [tableData, setTableData] = useState([]); // Initialize as an empty array
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = tableData?.users?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tableData?.users?.length / rowsPerPage);

  useEffect(() => {
    axios.get('https://dummyjson.com/users?limit=0')
      .then((response) => {
        console.log(response);
        setTableData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []); // Add empty dependency array to run only once
  const handlePrev = () =>{
    setCurrentPage((prev) => Math.max(prev - 1));
  }
  const handleNext = () =>{
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((item) => ( // Use `item` instead of `value`
            <tr key={item.id}>
              <td>{item.firstName} {item.lastName}</td> {/* Use `firstName` and `lastName` */}
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='pagination'>
        <button onClick={handlePrev}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => setCurrentPage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
         <button onClick={handleNext}> Next</button>
      </div>
    </div>
  );
}

export default Pagination;