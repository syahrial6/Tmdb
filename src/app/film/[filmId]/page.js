'use client'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React, { Suspense } from "react";
import {use} from "react"
import Loading from "./loading";

const DetailMovie = ({ params }) => {
    // Unwrap the params using React.use()
  const unwrappedParams = use(params);
  const filmId = unwrappedParams.filmId;
  

    const getDetailMovie = async ()=>{
        const {data} = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/movie/${filmId}?language=en-US`,{
            headers:{
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
                Accept: "application/json"
            }
        })
        return data || {}
    }

    const {data, error, isLoading} = useQuery({
        queryKey: ["detailMovie"],
        queryFn: getDetailMovie,
        
    })

    if(isLoading) return <Loading/>
    if(error) return <p>Error: {error.message}</p>
   
  return (
  
    <div className="container m-auto">
      <div className="container w-[60vw] h-[100vh] m-auto">
        <div className="breadcrumbs text-sm text-white text-lg py-12">
          <ul>
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <p className="text-white">{data.title}</p>
            </li>
          </ul>
        </div>
        <div className="relative w-[900px] h-[500px] m-auto rounded-xl overflow-hidden">
          <div style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`
          }} className={`bg-no-repeat bg-cover w-full h-full`}></div>
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg">
            <div className="container grid grid-cols-3 gap-4 w-full h-[90%] items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                className=" w-64 h-96 rounded-2xl justify-center items-center flex m-auto"
              />
              <div className="container w-full h-[90%] col-span-2 mt-8">
                <p className="text font-bold text-4xl">{data.title}</p>
                <div className="container inline-flex items-center my-2">
                  <p className="text text-lg">{data.release_date}</p>
                  <p className="text font-bold text-xl px-2">|</p>
                  <p className="text text-lg">{data.genres[0].name}</p>
                  <p className="text font-bold text-xl px-2">|</p>
                  <p className="text text-lg">{Math.floor(data.runtime/60)}h {data.runtime%60}m</p>
                </div>
                <div>
                  <p className="my-2">Overview</p>
                  <p>
                  {data.overview}
                  </p>
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
