import React from "react";

const loading = () => {
  return (
    <section className="bg-white h-screen w-screen z-10 fixed top-0 left-0 flex items-center justify-center">
      <div className="flex flex-row gap-2 w-fit">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </section>
  );
};

export default loading;
