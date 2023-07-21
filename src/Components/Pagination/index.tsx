import React from "react";
import { Link } from "react-router-dom";

interface SelectInputValue {
  id: number;
  label: number;
}

interface PaginationProps {
  page: number;
  totalPages: number;
  numPages?: number;
  searchInput?: string;
  pageSizeValue?: SelectInputValue[];
  onPageChangeHandler: (page: number) => void;
  onPageSizeChangeHandler?: (pageSize: number) => void;
}

const Pagination = ({
  page,
  totalPages,
  onPageChangeHandler,
}: PaginationProps) => {
  const handlePreviousPage = () => {
    if (page > 1) {
      onPageChangeHandler(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      onPageChangeHandler(page + 1);
    }
  };

  const renderPageLinks = () => {
    const links = [];
    for (let i = 0; i <= totalPages-1; i++) {
      const linkClass = i === page ? "active" : "";
      links.push(
        <button
          key={i}
          className={linkClass}
          onClick={() => onPageChangeHandler(i+1)}
        >
          {i+1}
        </button>
      );
    }
    return links;
  };

  return (
    <div className="pagination2" style={{ textAlign: "center" }}>
      <span>{`Page ${page} of ${totalPages}:`}</span>
      <>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          prev
        </button>
        {renderPageLinks()}
        <button onClick={handleNextPage} disabled={page === totalPages}>
          next
        </button>
      </>
      <Link to="#">
        <i className="ion-arrow-right-b"></i>
      </Link>
    </div>
  );
};
export default Pagination;