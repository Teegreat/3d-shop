import Link from "next/link";
import React from "react";

const Sale = () => {
  return (
    <div className="flex flex-col container items-center gap-8 pt-32 mx-auto relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Limited Collection
        <br />
        for sale
      </h2>
      <p className="uppercase text-sm font-bold bg-gradient bg-clip-text text-transparent">
        discounts up to 30%
      </p>
      <Link
        href="#catalog"
        className="w-36 flex flex-col items-center py-3 rounded-xl text-xs bg-gradient"
      >
        Buy Keyboard
      </Link>
    </div>
  );
};

export default Sale;
