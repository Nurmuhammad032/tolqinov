import React from "react";

const Loading = () => {
  return (
    <section className="min-h-screen flex w-full z-[3000] bg-white fixed top-0 left-0 right-0 justify-center items-center">
      <div className="max-w-[300px] w-full !select-none pointer-events-none">
        <img src="/images/loader2.gif" alt="" className="w-full" />
      </div>
    </section>
  );
};

export default Loading;
