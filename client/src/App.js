import React from "react";
import { Layout, Image, Typography } from "antd"
import Logo from "./images/logo.png"
import Home from "./compenents/Home";

const { Title } = Typography
const { Header , Footer } = Layout
function App() {
  return (
    <>
    <Layout>
      <Header>
        <Image width="45" preview="false" src={Logo} />
        &nbsp;
          <Title>social media</Title>
      </Header>
      <Home/>
      <Footer>2022 social media</Footer>
    </Layout>
    </>
  );
}

export default App;
