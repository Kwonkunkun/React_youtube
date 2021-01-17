import React, { PureComponent } from "react";
import SearchForm from "./SearchForm/searchForm";
import styles from "./header.module.css";

class Header extends PureComponent {
    render() {
        return (
            <nav className={styles.container}>
                <div className={styles.logo}>
                    <i className="fas fa-bars"></i>
                    <a href="" className={styles.icon}>
                        <i className="fab fa-youtube"></i>
                    </a>
                    <span className={styles.title}>Youtube</span>
                </div>
                <SearchForm onSearch={this.props.onSearch} />
                <div className={styles.menu}>
                    <i className="fas fa-video"></i>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-bell"></i>
                    <i className="fas fa-user-circle"></i>
                </div>
            </nav>
        );
    }
}

export default Header;
