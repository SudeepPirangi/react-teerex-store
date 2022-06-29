import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "rsuite/Navbar";
import Nav from "rsuite/Nav";

import { HomeIcon, GearIcon, CartIcon, LockIcon, UserIcon } from "../../FontAwesome";

function RegularNavbar() {
  const [activeKey, setActiveKey] = useState("1");

  const navbarBrandProps = {
    href: "/",
  };

  return (
    <Navbar appearance="inverse">
      <Navbar.Brand {...navbarBrandProps}>RSUITE</Navbar.Brand>
      <Nav onSelect={setActiveKey} activeKey={activeKey}>
        <Nav.Item as={Link} to="/" eventKey="1" icon={<HomeIcon />}>
          Home
        </Nav.Item>
        <Nav.Item as={Link} to="/products" eventKey="2">
          Products
        </Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item as={Link} to="/" eventKey="3" icon={<CartIcon />}>
          Cart
        </Nav.Item>
        <Nav.Menu icon={<UserIcon />} title="Username">
          <Nav.Item icon={<UserIcon />}>Profile</Nav.Item>
          <Nav.Item icon={<GearIcon />}>Settings</Nav.Item>
          <Nav.Item icon={<LockIcon />}>Logout</Nav.Item>
        </Nav.Menu>
      </Nav>
    </Navbar>
  );
}

export default RegularNavbar;
