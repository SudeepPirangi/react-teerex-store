import Container from "rsuite/Container";
import Row from "rsuite/Row";

import styles from "./Home.module.css";

function Home() {
  return (
    <Container>
      <Row className={styles.placeHolder}>
        <h1>TeeRex Home</h1>
        <h4>Work in progress</h4>
        <h5>Feel free to explore the website till then</h5>
      </Row>
    </Container>
  );
}

export default Home;
