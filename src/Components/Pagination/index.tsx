import React, { FC } from "react";
import { NavLink } from "react-router-dom";

interface PaginationProps {
  totalCount: number;
  limit: number;
  nextPageUrl: boolean;
  prevPageUrl: boolean;
  currentPage: number;
  onButtonClick: (page: string | number) => void;
}
const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalCount,
  limit,
  nextPageUrl,
  prevPageUrl,
  onButtonClick,
}) => {
  const totalPages = Math.ceil(totalCount / limit);

  const generatePageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => onButtonClick(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination" style={{textAlign:"center"}}>
      {prevPageUrl && (
        <button
          className="prev"
          onClick={() => onButtonClick(currentPage - 1)}
        >
          prev
        </button>
      )}

      {generatePageNumbers()}

      {nextPageUrl && (
        <button
          className="next"
          onClick={() => onButtonClick(currentPage + 1)}
        >
          next
        </button>
      )}
    </div>
  );
};

export default Pagination;