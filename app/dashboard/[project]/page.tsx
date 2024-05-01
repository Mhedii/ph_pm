"use client";
import IssueContainer from "@/components/IssueContainer";
import { useIssueStore } from "@/store/zustand";
import React, { useState } from "react";
const page = ({ props }: any) => {
  const [toggleIssueCreate, setToggleIssueCreate] = useState(true);
  const [toggleIssueCreate2, setToggleIssueCreate2] = useState(true);
  const [toggleIssueCreate3, setToggleIssueCreate3] = useState(true);
  const { issues, updateIssue } = useIssueStore();

  const handleIssue = () => {
    setToggleIssueCreate(!toggleIssueCreate);
  };
  const handleIssue2 = () => {
    setToggleIssueCreate2(!toggleIssueCreate2);
  };
  const handleIssue3 = () => {
    setToggleIssueCreate3(!toggleIssueCreate3);
  };
  console.log(issues);

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    targetIssueName: string
  ) => {
    const draggedIssueString = e.dataTransfer.getData("text/plain");
    const draggedIssue = JSON.parse(draggedIssueString);
    console.log(
      `Dropped issue "${draggedIssue.issue}" into "${targetIssueName}"`
    );
    if ((draggedIssue.issueName = targetIssueName)) {
      console.log(draggedIssue);
      updateIssue(draggedIssue);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-12 min-h-[90vh]">
        <IssueContainer
          title="TODO 2"
          issues={issues}
          toggleIssueCreate={toggleIssueCreate}
          handleIssue={handleIssue}
          handleDrop={handleDrop}
          issueName="todo"
        />
        <IssueContainer
          title="IN PROGRESS 1"
          issues={issues}
          toggleIssueCreate={toggleIssueCreate2}
          handleIssue={handleIssue2}
          handleDrop={handleDrop}
          issueName="progress"
        />
        <IssueContainer
          title="DONE 3"
          issues={issues}
          toggleIssueCreate={toggleIssueCreate3}
          handleIssue={handleIssue3}
          handleDrop={handleDrop}
          issueName="done"
        />
      </div>
      {/* <div className="grid grid-cols-3 gap-12 min-h-[90vh]">
        <div className="h-fit rounded-md bg-gray-50 ">
          <h1 className="mx-4">TODO 2</h1>
          {issues.map((issue, index) => (
            <>
              <p
                className="m-4 border rounded-md p-4 hover:cursor-pointer"
                key={index}
                draggable
              >
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

        <div className="h-fit rounded-md bg-gray-50 ">
          <h1>IN PROGRESS 1</h1>
          {toggleIssueCreate2 ? (
            <>
              <h1
                className="font-semibold flex items-center gap-2 py-2 m-4 bg-slate-400 rounded-md px-4 "
                onClick={handleIssue2}
              >
                <FaPlus /> ADD ISSUE
              </h1>
            </>
          ) : (
            <AddIssue handleIssue={handleIssue2} issueName="progress" />
          )}
        </div>
        <div className="h-fit rounded-md bg-gray-50 ">
          <h1>DONE 3</h1>
          {toggleIssueCreate3 ? (
            <>
              <h1
                className="font-semibold flex items-center gap-2 py-2 m-4 bg-slate-400 rounded-md px-4 "
                onClick={handleIssue3}
              >
                <FaPlus /> ADD ISSUE
              </h1>
            </>
          ) : (
            <AddIssue handleIssue={handleIssue3} issueName="done" />
          )}
        </div>
      </div> */}
    </div>
  );
};

export default page;
