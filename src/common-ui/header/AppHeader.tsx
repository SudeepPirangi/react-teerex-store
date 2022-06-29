import Grid from "rsuite/Grid";
import Row from "rsuite/Row";
import Col from "rsuite/Col";

import RegularNavbar from "./regular-navbar/RegularNavbar";
import MobileNavbar from "./mobile-navbar/MobileNavbar";

const AppHeader = (props: any): JSX.Element => {
  return (
    <Grid fluid style={{ padding: 0 }}>
      <Row className="mobile-display-nav">
        <Col smHidden mdHidden lgHidden xlHidden xxlHidden xs={24}>
          <MobileNavbar />
        </Col>
      </Row>
      <Row className="bigger-display-nav">
        <Col xsHidden sm={24}>
          <RegularNavbar />
        </Col>
      </Row>
    </Grid>
  );
};

export default AppHeader;
