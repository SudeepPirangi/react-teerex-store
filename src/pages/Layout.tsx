import { Outlet } from "react-router-dom";
import Container from "rsuite/Container";
import Header from "rsuite/Header";
import Content from "rsuite/Content";

import AppHeader from "../common-ui/header/AppHeader";
import ShoppingCartProvider from "../context/ShoppingCartProvider";

function Layout() {
  return (
    <Container className="app-layout">
      <ShoppingCartProvider>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </ShoppingCartProvider>
    </Container>
  );
}

export default Layout;
