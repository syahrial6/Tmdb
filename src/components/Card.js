import Link from "next/link";
import React from "react";

const Card = ({ movie }) => {
  return (
    <Link href={`/film/${movie.id}`} className="">
      <div className="rounded-2xl relative overflow-hidden hover:shadow-lg hover:shadow-orange-500 hover:translate-y-[-10px] transition-all duration-300 ease-in-out">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "./noposter.png"
          }
          className="picture rounded-2xl w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 rounded-b-lg backdrop-blur-md p-1 z-20 w-full">
          <div className=" bg-slate-400 p-1 w-fit rounded-xl font-bold text-white flex">
            <img src="./star.svg" className="w-6 h-6 fill-blue-500" />
            <p className="text items-center justify-center m-auto px-1 text-md">
              {movie.vote_average ? movie.vote_average.toFixed(1): "0.0"}
            </p>
          </div>
        </div>
        <div className="absolute top-0 p-1 z-20 w-full">
          <div className="bg-white p-1 w-fit rounded-xl">
            <img src="./star.svg" className="w-6 h-6 flex justify-end" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="text font-bold text-xl">{movie.title}</p>
      </div>
    </Link>
  );
};

export default Card;
