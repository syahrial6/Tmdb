import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Slider = () => {
  const getMovieSlider = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/movie/upcoming?language=en-US&page=1`,
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
    queryKey: ["movieSlider"],
    queryFn: getMovieSlider,
  });
  

  if (isLoading) return <p>Loading...</p>;
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper my-8">
      {data.map((movie, index) => (
        <SwiperSlide key={movie.id}>
          <div
            className={` relative w-full h-[365px] rounded-3xl overflow-hidden`}
          >
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
              }}
              className={`bg-no-repeat bg-cover w-full h-full`}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-30">
              <div className="container w-full  bg-black bg-opacity-50 p-4 fixed bottom-0">
                <p className="text text-md lg:text-2xl text-left font-bold mb-4">
                  {movie.title}
                </p>
                <p className="text lg:text-lg text-sm text-left">{movie.overview}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
