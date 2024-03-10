import React, { ReactNode } from "react";
import { Layout } from "antd";

const { Header, Content } = Layout;

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Layout className="bg-background">
      <Header
        className="flex justify-start items-center rounded-b-lg bg-[#242320] border-[2px] border-primary sticky top-0 z-10"
        style={{ zIndex: 1 }}
      >
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
      </Header>
      <Content style={{ padding: "2rem" }} className="bg-background text-white">
        {children}
      </Content>
    </Layout>
  );
};

export default AppLayout;
