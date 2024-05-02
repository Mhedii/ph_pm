"use client";
import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useRouter } from "next/navigation";

const { Meta } = Card;

const AllProjects = () => {
  const cardsData = [
    {
      title: "title1",
      description: "This is the description for card 1",
      avatarSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
      coverSrc:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      title: "title2",
      description: "This is the description for card 2",
      avatarSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
      coverSrc:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      title: "title3",
      description: "This is the description for card 2",
      avatarSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
      coverSrc:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      title: "title4",
      description: "This is the description for card 2",
      avatarSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
      coverSrc:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      title: "title5",
      description: "This is the description for card 2",
      avatarSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
      coverSrc:
        "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    // Add more card data as needed
  ];
  const router = useRouter();

  const handleClick = (project: any) => {
    // Navigate to the dynamic route
    router.push(`/dashboard/${project}`);
  };
  return (
    <div>
      <div className="grid grid-cols-4  gap-4">
        {cardsData.map((card, index) => (
          <Card
            onClick={() => handleClick(card.title)}
            key={card.title}
            className="hover:cursor-pointer"
            // style={{ width: 300 }}

            actions={[
              // <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              // <EllipsisOutlined key="ellipsis" />,
              <DeleteOutlined key="delete" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
