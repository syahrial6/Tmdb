"use client";
import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "@/components/Slider";
import Navbar from "@/components/Navbar";
import Loading from "./loading";

export default function Home() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          Accept: "application/json",
        },
      }
    );
    return data.results || [];
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["movies", page],
    queryFn: getMovies,
  });

  useEffect(() => {
    if (data) {
      setMovies(movies.concat(data));
    }
  }, [data]);
  if (isLoading && page == 1) return (<Loading/>);
  if (error) {
    console.log("Error details:", error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mx-auto text-white h-full">
      <div className="container  mx-auto lg:w-[60vw] w-[90vw] h-full">
        <Navbar />
        <Slider />
        <div className="flex justify-center items-center m-auto mt-6">
      
        </div>
        <div className="text text-4xl font-bold py-4">
          <h1 className="text-4xl font-bold">Discover Movies</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
        <div className="container py-8">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg m-auto flex justify-center items-center"
          onClick={() => setPage(page + 1)}
        >
          {isLoading && page != 1 && (
            <div className="flex justify-center items-center h-fit">
              <div className="w-6 h-6 border-4 px-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          Load More
        </button>
        </div>
      </div>
    </div>
  );
}
