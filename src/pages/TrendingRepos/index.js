import React, { useEffect, useState } from "react";
import classes from "./TrendingRepos.module.css";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos } from "../../store/TrendingRepoReducer";
import RepoCard from "../../components/RepoCard";
import NoData from "../../components/NoData";
import CardLoader from "../../components/CardLoader";
import PaginationComponent from "../../components/PaginationComponent";

const TrendingRepos = () => {
  const limit = 8;
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { repos, isError, isLoading } = useSelector(
    (state) => state?.TrendingRepoReducer
  );

  useEffect(() => {
    dispatch(fetchRepos({ page, limit }));
  }, [page]);

  if (isError) {
    return <div className={classes.ErrorDiv}>{isError}</div>;
  }

  return (
    <Container fluid="md">
      <div className={classes.mainDiv}>
        <h1>Trending Github Repositories</h1>
        {isLoading ? (
          <CardLoader cardsCount={limit} />
        ) : repos?.items?.length > 0 ? (
          repos?.items?.map((repo, index) => {
            return (
              <div key={index} className={classes.repoCardDiv}>
                <RepoCard data={repo} />
              </div>
            );
          })
        ) : (
          <NoData text={"No Repositories Found"} />
        )}
        <PaginationComponent
          page={page}
          totalCount={Math.ceil(repos?.total_count / limit)}
          setPage={setPage}
        />
      </div>
    </Container>
  );
};

export default TrendingRepos;
