"use client";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import React from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Search = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const getSearchedMovie = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/search/movie?include_adult=false&language=en-US&page=1&query=${search}`,
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
    queryKey: ["search", search],
    queryFn: getSearchedMovie,
   
  });

  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto text-white h-full">
      <div className="container  mx-auto lg:w-[60vw] w-[90vw] h-full">
        <Navbar />
        <div className="flex justify-center items-center m-auto mt-6"></div>
        <div className="text text-4xl font-bold py-4">
          <h1 className="text-4xl font-bold">
            Showing results for &quot;{search}&quot;
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {data.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
