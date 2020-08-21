import { Layout } from "antd";
import Head from "next/head";

import HeaderApp from "./header";
import SiderbarApp from "./sidebar";
import ContentApp from "./content";
import FooterApp from "./footer";

const SiderDemo = (props) => {
  const { children, routes } = props;

  return (
    <Layout>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>

      <SiderbarApp />
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderApp />
        <Layout>
          <ContentApp routes={routes && routes.length >= 1 ? routes : []}>
            {children}
          </ContentApp>
        </Layout>
        <FooterApp />
      </Layout>
    </Layout>
  );
};

export default SiderDemo;
