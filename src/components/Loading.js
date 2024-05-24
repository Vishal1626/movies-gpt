// Loading.js
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-8 border-white border-opacity-100 h-60 w-60"></div>
      <p className="ml-2 text-white">Loading...</p>
    </div>
  );
};

export default Loading;
