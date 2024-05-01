"use client";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const items: MenuItem[] = [
    {
      key: "1",
      label: (
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            justifyItems: "center",
            textAlign: "end",
            justifyContent: "center",
            backgroundColor: "",
            display: "grid",
            placeItems: "center",
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      ),
    },
    {
      key: "2",
      icon: <PieChartOutlined />,
      label: "All Projects",
      className: "mt-16",
    },
  ];

  return (
    <div className="flex flex-col ">
      <div className="h-screen flex  ">
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{ paddingTop: 50, maxWidth: 256 }}
        />
        {/* <Button type="primary" onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button> */}
        <div className=" w-screen px-20 pt-[50px] ">{children}</div>
      </div>
    </div>
  );
}
