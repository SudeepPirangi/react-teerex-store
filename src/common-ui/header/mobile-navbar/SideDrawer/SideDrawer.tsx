import { Link } from "react-router-dom";
import Drawer from "rsuite/Drawer";
import { CartIcon, GearIcon, HomeIcon, LockIcon, ProductsIcon, UserIcon } from "../../../FontAwesome";

import styles from "./SideDrawer.module.css";

function SideDrawer(props: any) {
  const { open, setOpen } = props;
  return (
    <Drawer className={styles.sideDrawer} size="full" backdrop="static" open={open} onClose={() => setOpen(false)}>
      <Drawer.Header className={styles.sideDrawerHeader}>
        <Drawer.Title>TEEREX STORE</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <div className="vertical-flex vertically-away" style={{ height: "100%" }}>
          <ul>
            <li>
              <Link to="/">
                <HomeIcon />
                Home
              </Link>
            </li>
            <li>
              <Link to="/products">
                <ProductsIcon />
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <CartIcon />
                Cart
              </Link>
            </li>
            <li>
              <Link to="#">
                <UserIcon />
                Profile
              </Link>
            </li>
            <li>
              <Link to="#">
                <GearIcon />
                Settings
              </Link>
            </li>
            <li>
              <Link to="#">
                <LockIcon />
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </Drawer.Body>
    </Drawer>
  );
}

export default SideDrawer;
