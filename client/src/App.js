import React from "react";
import { Layout, Image, Typography } from "antd"
import Logo from "./images/logo.png"
import Home from "./compenents/Home";
import styles from "./styles";


const { Title } = Typography
const { Header , Footer } = Layout


function App() {
  return (
    <>
    <Layout style={styles.Layout}>
      <Header style={styles.header}>
        <Image style={styles.image} width="45" preview="false" src={Logo} />
        &nbsp;
          <Title style={styles.title}>social</Title>
      </Header>
      <Home/>
      <Footer style={styles.footer}>2022 social media</Footer>
    </Layout>
    </>
  );
}

export default App;
