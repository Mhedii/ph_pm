"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/apicall";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

// const onFinish: FormProps<FieldType>["onFinish"] = (values) => {

//   console.log("Success:", values);

// };

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  console.log(data);
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (isLoading || isError || !data) {
      console.log("Error: Unable to fetch user data");
      return;
    }

    // Find the user from the fetched data
    const user = data.find((user: any) => user.username === values.username);

    if (!user) {
      console.log("Error: User not found");
      return;
    }

    // Check if the password matches
    if (user.password === values.password) {
      console.log("Success: Login successful!");
    } else {
      console.log("Error: Incorrect password");
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching users</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
