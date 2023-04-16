import React from "react";
import { MovieType, useFetchMovie } from "../home.controller";
import CardSkeleton from "./cardSkeleton";
import Card from "@/common/card";

const styles = {
  container: "m-4",
  title: "text-2xl capitalize font-bold",
  movieWrapper: "relative my-2 flex gap-x-4 overflow-x-scroll lg:scrollbar-y",
};

function Row({ title, url }: IRowProps) {
  const { isFetched, movie } = useFetchMovie(url);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {!isFetched ? <CardSkeleton /> : null}
      <div className={styles.movieWrapper}>
        {movie &&
          movie.length > 0 &&
          movie?.map((data) => (
            <Card data={data} actionOnClick="add" key={data.id} />
          ))}
      </div>
    </div>
  );
}

export default Row;

interface IRowProps {
  title: string;
  url: MovieType;
}
