import React, { ReactNode } from "react";
import { Layout } from "antd";
import Header from "../header/Header";
import HeaderTwo from "../header2/Header2";
import TodoForm from "../../pages/TodoForm";

const { Content } = Layout;

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Layout className="bg-background">
      {/* <HeaderTwo /> */}
      <TodoForm />
      <Content className=" text-white p-6">{children}</Content>
    </Layout>
  );
};

export default AppLayout;
