"use client";
import React from "react";
import { Input } from "antd";
import { useIssueStore } from "@/store/zustand";

const { TextArea } = Input;

// const onChange = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => {
//   console.log("Change:", e.target.value);
// };

const AddIssue = ({ handleIssue, issueName }: any) => {
  const { addIssue, id }: any = useIssueStore();
  const handleEnter = (e: any) => {
    //   console.log(issueName);
    // console.log(e.target.value);
    const issue = e.target.value;
    const formData = { issue, issueName, id };
    console.log(formData);
    addIssue(formData);
    handleIssue();
  };

  return (
    <div className="mx-4">
      <TextArea
        className=" mb-4"
        showCount
        maxLength={100}
        onPressEnter={handleEnter}
        placeholder="Add New Issue"
        style={{ height: 80, resize: "none" }}
      />
    </div>
  );
};

export default AddIssue;
