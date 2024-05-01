import React from "react";

const page = ({ props }: any) => {
  console.log(props);
  return (
    <div>
      <div className="grid grid-cols-3 gap-12">
        <div className="bg-red-500">a</div>
        <div className="bg-yellow-500">c</div>
        <div className="bg-blue-500">c</div>
      </div>
    </div>
  );
};

export default page;
