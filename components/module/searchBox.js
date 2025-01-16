import { NEXT_META_SUFFIX } from "next/dist/lib/constants";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SearchBox = () => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const router = useRouter();
  return (
    <div className="lg:flex  items-center gap-2 max-w-lg mx-auto   bg-white shadow-md border rounded-lg  p-2 mb-4">
      <div className="lg:w-8/12">
        <input
          type="text"
          placeholder="enter min Price"
          className="outline-lime-400 w-full border rounded-lg px-4 mb-2 h-8"
          onChange={(e) => setMin(e.target.value)}
          value={min}
        />
        <input
          type="text"
          placeholder="enter max Price"
          className="outline-lime-400 w-full border rounded-lg px-4 h-8 "
          onChange={(e) => setMax(e.target.value)}
          value={max}
        />
      </div>
      <button
        disabled={!(!!min && !!max)}
        className={`lg:w-4/12  rounded-lg lg:py-6 lg:h-fit h-8 mt-2 lg:mt-0 w-full  
            ${!!min && !!max ? ` bg-lime-400 ` : `bg-slate-400`}
            `}
        onClick={() => router.push(`/filter/${min}/${max}`)}
      >
        search
      </button>
    </div>
  );
};

export default SearchBox;
