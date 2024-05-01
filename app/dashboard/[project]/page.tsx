"use client";
import AddIssue from "@/components/AddIssue";
import { useIssueStore } from "@/store/zustand";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
const page = ({ props }: any) => {
  const [toggleIssueCreate, setToggleIssueCreate] = useState(false);
  // console.log(props);
  const handleIssue = () => {
    setToggleIssueCreate(!toggleIssueCreate);
  };
  const { issues } = useIssueStore();
  console.log(issues);
  return (
    <div>
      <div className="grid grid-cols-3 gap-12">
        <div className="min-h-[90vh] rounded-md  ">
          <h1 className="mx-4">TODO 2</h1>
          {issues.map((issue, index) => (
            <>
              <p className="m-4 border rounded-md p-4" key={index}>
                {issue}
              </p>
            </>
          ))}
          {toggleIssueCreate ? (
            <>
              <h1
                className="font-semibold flex items-center gap-2 py-2 m-4 bg-slate-400 rounded-md px-4 "
                onClick={handleIssue}
              >
                <FaPlus /> ADD ISSUE
              </h1>
            </>
          ) : (
            <AddIssue handleIssue={handleIssue} issueName="todo" />
          )}
        </div>

        <div className="min-h-[90vh] rounded-md  ">
          <h1>IN PROGRESS 1</h1>
        </div>
        <div className="min-h-[90vh] rounded-md  ">
          <h1>DONE 3</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
