import { useState } from "react";

const Email = () => {
  return (
    <div className="max-md:hidden flex fixed right-10 bottom-0 origin-right rotate-90 transform items-center gap-4 text-white cursor-pointer">
      <h2>
        <a href="mailto:z4yndev@gmail.com">z4yndev@gmail.com</a>
      </h2>
      <span className="w-16 h-[1px] bg-gray-500"></span>
    </div>
  );
};

export default Email;
