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
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "@/apicall";

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
  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const handleClick = (project: any) => {
    // Navigate to the dynamic route
    const name = project.toLowerCase();
    router.push(`/dashboard/${name}`);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-4  gap-4">
        {data.map((card: any) => (
          <Card
            onClick={() => handleClick(card.title)}
            key={card.id}
            className="hover:cursor-pointer"
            // actions={[
            //   <EditOutlined key="edit" />,
            //   <DeleteOutlined key="delete" />,
            // ]}
          >
            <Meta title={card.title} description={card.description} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
