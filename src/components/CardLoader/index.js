import { Skeleton } from "@mui/material";
import React from "react";

const CardLoader = ({ cardsCount }) => {
  const arr = new Array(cardsCount).fill(0);
  return (
    <>
      {arr?.map(() => {
        return (
          <Skeleton
            variant="rounded"
            height={164}
            style={{ marginBottom: "18px" }}
          />
        );
      })}
    </>
  );
};

export default CardLoader;
