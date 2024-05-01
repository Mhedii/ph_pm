"use client";
import React, { useState } from "react";
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   PieChartOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import { Button, Menu } from "antd";

// type MenuItem = Required<MenuProps>["items"][number];
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  link?: any,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    link,
    children,
    label,
  } as MenuItem;
}

const items = [
  // getItem("All Projects", "1", "/dashboard", <DesktopOutlined />),
  {
    label: <Link href="/dashboard">All Projects</Link>,
    key: "1",
    icon: <DesktopOutlined />,
  },
];
// const items: MenuItem[] = [
//   getItem("All Projects", "1", "/dashboard", <DesktopOutlined />),
// ];
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [collapsed, setCollapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // const items: MenuItem[] = [
  //   {
  //     key: "1",
  //     label: (
  //       <Button
  //         type="primary"
  //         onClick={toggleCollapsed}
  //         style={{
  //           justifyItems: "center",
  //           textAlign: "end",
  //           justifyContent: "center",
  //           backgroundColor: "",
  //           display: "grid",
  //           placeItems: "center",
  //         }}
  //       >
  //         {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
  //       </Button>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     icon: <PieChartOutlined />,
  //     label: "All Projects",
  //     className: "mt-16",
  //   },
  // ];

  return (
    // <div className="flex flex-col ">
    //   <div className="h-screen flex  ">
    //     <Menu
    //       defaultSelectedKeys={["1"]}
    //       defaultOpenKeys={["sub1"]}
    //       mode="inline"
    //       theme="dark"
    //       inlineCollapsed={collapsed}
    //       items={items}
    //       style={{ paddingTop: 50, maxWidth: 256 }}
    //     />
    //     {/* <Button type="primary" onClick={toggleCollapsed}>
    //         {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    //       </Button> */}
    //     <div className=" w-screen px-20 pt-[50px] ">{children}</div>
    //   </div>
    // </div>
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
