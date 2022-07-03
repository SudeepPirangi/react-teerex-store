import { useState } from "react";
import { Link } from "react-router-dom";
import { CartIcon, MenuIcon } from "../../FontAwesome";

import styles from "./MobileNavbar.module.css";
import SideDrawer from "./SideDrawer/SideDrawer";

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className={styles.customNavbar}>
        <div className="space-between">
          <div className={styles.customBrand}>TEEREX STORE</div>
          <div className="space-between">
            <ul className={styles.navOptions}>
              <li>
                <Link to="/cart">
                  <CartIcon />
                </Link>
              </li>
              <li>
                <span onClick={() => setOpen(true)}>
                  <MenuIcon />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SideDrawer open={open} setOpen={setOpen} />
    </>
  );
}

export default MobileNavbar;
