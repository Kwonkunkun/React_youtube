import React, { Component } from "react";
import styles from "./sidebar.module.css";

class Sidebar extends Component {
    render() {
        return (
            <div className={styles.container}>
                <button>
                    <i className="fas fa-home"></i>
                    <span>홈</span>
                </button>
                <button>
                    <i className="fas fa-fire"></i>
                    <span>인기</span>
                </button>
                <button>
                    <i className="fas fa-envelope"></i>
                    <span>구독</span>
                </button>
                <button>
                    <i className="fas fa-box"></i>
                    <span>보관함</span>
                </button>
            </div>
        );
    }
}

export default Sidebar;
