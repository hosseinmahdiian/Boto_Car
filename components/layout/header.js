import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="text-center border max-w-lg bg-lime-400 mx-auto rounded-lg h-20 pt-3">
      <Link href="/" className="">
        <h2 className="border-b w-fit mx-auto font-bold text-3xl border-black ">BOTOCAR</h2>
        <p className="font-bold text-xs">Chooose an Buy your car</p>
      </Link>
    </div>
  );
};

export default Header;
