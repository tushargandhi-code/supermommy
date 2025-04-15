"use client";

import PuffLoader from "react-spinners/PuffLoader";

const PageLoader = () => {
  return (
    <div className="container flex items-center justify-center py-20">
      <PuffLoader size={36} />
    </div>
  );
};

export default PageLoader;
