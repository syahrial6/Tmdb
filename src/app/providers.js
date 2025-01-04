"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Provider = ({ children }) => {
  const queryclient = new QueryClient();

  return (
    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
  );
};

export default Provider;
