import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({ page, setPage, totalCount }) => {
  const handleChange = (e, value) => {
    window.scrollTo(0, 0);
    setPage(value);
  };

  return (
    <div>
      <Pagination
        count={totalCount}
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default PaginationComponent;
