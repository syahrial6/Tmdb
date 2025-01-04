import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use } from "react";

const Navbar = () => {
  const router = useRouter();

  const handleSearch = (e) => {
    router.push(`/search?q=${e.target.value}`);
  };
  return (
    <div className="sticky top-0 z-50 w-full pt-4">
      <div className="navbar sticky container bg-slate-900 rounded-2xl text-white">
        <div className="navbar-start">
          <a className="navbar-item text-white font-bold">TMDB API</a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item text-white">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e);
                }
              }}
              className="input-primary bg-slate-900 input text-white"
              placeholder="Search"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
