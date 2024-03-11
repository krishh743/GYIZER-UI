import React, { ReactNode } from "react";
import { Layout } from "antd";
import Header from "../header/Header";

const { Content } = Layout;

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Layout className="bg-background">
      <Header />
      <Content className=" text-white p-6">{children}</Content>
    </Layout>
  );
};

export default AppLayout;
