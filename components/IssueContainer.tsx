import { FaPlus } from "react-icons/fa6";
import AddIssue from "./AddIssue";
import React from "react";

const IssueContainer = ({
  title,
  issues,
  toggleIssueCreate,
  handleIssue,
  handleDrop,
  issueName,
}: any) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, issue: any) => {
    console.log(issues);
    // e.dataTransfer.setData("text", issue);
    e.dataTransfer.setData("text/plain", JSON.stringify(issue));
  };
  return (
    <div
      className="h-fit rounded-md bg-gray-50"
      onDrop={(e) => handleDrop(e, issueName)}
      onDragOver={(e) => e.preventDefault()}
    >
      <h1 className="mx-4">{title}</h1>
      {issues
        .filter((issue: any) => issue.issueName === issueName) // Filter issues by issueName
        .map((issue: any, index: any) => (
          <div
            key={index}
            className="m-4 border rounded-md p-4 hover:cursor-pointer"
            draggable={toggleIssueCreate}
            onDragStart={(e) => handleDragStart(e, issue)}
            onClick={handleIssue}
          >
            {issue.issue}
          </div>
        ))}
      {toggleIssueCreate ? (
        <h1
          className="font-semibold flex items-center gap-2 py-2 m-4 bg-slate-400 rounded-md px-4"
          onClick={handleIssue}
        >
          <FaPlus /> ADD ISSUE
        </h1>
      ) : (
        <AddIssue handleIssue={handleIssue} issueName={issueName} />
      )}
    </div>
  );
};

export default IssueContainer;
