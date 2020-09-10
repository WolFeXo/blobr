import React, { Component } from "react";
import styles from "./css/sidebar.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css'

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class App extends Component {
  menu() {
    let i = 0;
    if (i == 0) {
      styles.visible({
        display: "block"
      })
      console.log('test')
    }
  }
  render() {
    return (
         <React.Fragment>
      <div className={styles.flexall}>
      <div className={styles.sidebar}>
            <div className={styles.titre}>
              <h2 className={styles.name}>Person Specter Litt</h2>
              <div className={styles.ico1} onClick={this.menu}>
                <p className={styles.name2}>Mike Ross</p>
                <div className={styles.balico}>
                  <i class="sort descending icon" ></i>
                </div>
              </div>
              <div className={styles.visible}>
                <div className={styles.menu}>
                  <div>
                    <div className={styles.align}>
                      <i class="user icon" ></i>
                      <p>Mike Ross</p>
                    </div>
                    <div className={styles.align}>
                      <i class="user icon"></i>
                      <p>Mike Ross</p>
                    </div>
                    <div className={styles.align}>
                      <i class="user icon" ></i>
                      <p>Mike Ross</p>
                    </div>
                  </div>

                </div>
              </div>
              </div>
              <ul>
                  <li><a href="#" className={styles.a1} ><i class="home icon"></i>Get started</a></li>
                  <li><a href="#" className={styles.a1}><i class="exchange icon"></i>Transactions</a></li>
                  <li className={styles.stat}><a href="#" className={styles.bla}><i class="chart line icon"></i>Statistics</a></li>
                  <li><a href="#" className={styles.a1}><i class="sliders horizontal icon"></i>Settings</a></li>
                  <li><a href="#" className={styles.a1}><i class="question circle outline icon"></i>Help center</a></li>
              </ul> 
          </div>
          <div className={styles.block}>
              
                <div className={styles.boxbody}>
                <div className={styles.boxhead}>
                  <p className={styles.texthead}>Statistics</p>
              </div>
                    <p className={styles.texthead}>Statistics</p>
                </div>
              </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
