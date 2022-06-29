import { Outlet } from "react-router-dom";
import Container from "rsuite/Container";
import Header from "rsuite/Header";
import Content from "rsuite/Content";
import Footer from "rsuite/Footer";

import AppHeader from "../common-ui/header/AppHeader";

function Layout() {
  return (
    <Container className="app-layout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default Layout;
