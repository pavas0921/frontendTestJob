import { CustomRouterProvider } from "./router";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.div_main}>
      <CustomRouterProvider />
    </div>
  );
}

export default App;
