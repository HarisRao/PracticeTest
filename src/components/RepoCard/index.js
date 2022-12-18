import React from "react";
import classes from "./RepoCard.module.css";
const RepoCard = ({ data }) => {
  return (
    <div
      className={classes.repoCard}
      onClick={() => window.open(data?.html_url)}
    >
      <h4>{data?.full_name}</h4>
      <p className={classes.desc}>{data?.description}</p>
      <div className={classes.builtDiv}>
        <div className={classes.usernameDiv}>
          <p>GitHub UserName : {data?.owner?.login}</p>
          <p>{data?.private ? "Private" : "Public"} Repository</p>
        </div>
        <div className={classes.ownerImgDiv}>
          Built by :
          <div className={classes.ownerImg}>
            <img src={data?.owner?.avatar_url} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
