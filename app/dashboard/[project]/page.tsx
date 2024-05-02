"use client";
import IssueContainer from "@/components/IssueContainer";
import { useIssueStore } from "@/store/zustand";
import React, { useState } from "react";
const page = ({ props }: any) => {
  const [toggleIssueCreate, setToggleIssueCreate] = useState(true);
  const [toggleIssueCreate2, setToggleIssueCreate2] = useState(true);
  const [toggleIssueCreate3, setToggleIssueCreate3] = useState(true);
  const { issues, updateIssue }: any = useIssueStore();

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
    </div>
  );
};

export default page;
