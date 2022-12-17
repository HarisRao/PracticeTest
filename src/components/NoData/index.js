import React from "react";
import { GrSearch } from "react-icons/gr";
import classes from "./NoData.module.css";

const NoData = ({ text = "No Data Found" }) => {
  return (
    <div className={classes.noDataContainer}>
        <GrSearch size={80} />
      <h6>{text}</h6>
    </div>
  );
};

export default NoData;
