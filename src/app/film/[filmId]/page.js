"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React, { Suspense } from "react";
import { use } from "react";
import Loading from "./loading";

const DetailMovie = ({ params }) => {
  // Unwrap the params using React.use()
  const unwrappedParams = use(params);
  const filmId = unwrappedParams.filmId;

  const getDetailMovie = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/movie/${filmId}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          Accept: "application/json",
        },
      }
    );
    return data || {};
  };

  const getTopCast = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/movie/${filmId}/credits?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          Accept: "application/json",
        },
      }
    );
    return data.cast || [];
  };

  const {
    data: topCast,
    error: errorTopCast,
    isLoading: isLoadingTopCast,
  } = useQuery({
    queryKey: ["topCast"],
    queryFn: getTopCast,
  });

  const {
    data: detailMovie,
    error: errorDetailMovie,
    isLoading: isLoadingDetailMovie,
  } = useQuery({
    queryKey: ["detailMovie"],
    queryFn: getDetailMovie,
  });

  if (isLoadingDetailMovie && isLoadingTopCast) return <Loading />;
  if (errorDetailMovie && errorTopCast) return <p>Error: {error.message}</p>;

  return (
    <div className="container m-auto">
      <div className="container lg:h-[100vh] w-auto h-auto px-4 m-auto overflow-hidden lg:w-[60vw]">
        <div className="breadcrumbs text-sm text-white text-lg py-12">
          <ul>
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <p className="text-white">{detailMovie.title}</p>
            </li>
          </ul>
        </div>
        <div className="child relative mb-12 lg:w-[900px] lg:h-[550px] w-full h-[1200px] bg-slate-300  m-auto rounded-xl overflow-hidden">
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${detailMovie.backdrop_path})`,
            }}
            className={`bg-no-repeat bg-cover w-full h-full`}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg">
            <div className="container grid lg:grid-cols-3 grid-cols-1 gap-4 w-full h-[90%] items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`}
                className=" w-64 h-96 rounded-2xl justify-center items-center flex m-auto"
              />
              <div className="container w-full h-[90%] col-span-2 mt-8 px-4">
                <p className="text font-bold text-4xl">{detailMovie.title}</p>
                <div className="container inline-flex items-center my-2">
                  <p className="text text-lg">{detailMovie.release_date}</p>
                  <p className="text font-bold text-xl px-2">|</p>
                  <p className="text text-lg">{detailMovie.genres[0].name}</p>
                  <p className="text font-bold text-xl px-2">|</p>
                  <p className="text text-lg">
                    {Math.floor(detailMovie.runtime / 60)}h{" "}
                    {detailMovie.runtime % 60}m
                  </p>
                </div>
                <div className="">
                  <p className="my-2">Overview</p>
                  <p className=" lg:h-[130px]">{detailMovie.overview}</p>
                </div>
                <div className="">
                  <p className="mt-16 font-bold mb-4">TOP CAST</p>
                  <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {topCast &&
                      topCast.slice(0, 4).map((cast, index) => (
                        <div key={index} className="container  flex">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                            alt={cast.name} // Tambahkan alt untuk SEO
                            className="w-16 h-16 rounded-full inline-block"
                          />
                          <div className="flex flex-col ml-2">
                            <p className="text text-center font-bold">
                              {cast.name}
                            </p>
                            <p className="text text-center">{cast.character}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
