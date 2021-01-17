import React, { memo } from "react";
import styles from "../header.module.css";

const SearchForm = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const word = inputRef.current.value;

        //여기서 props의 onSearch에 word 넣는다.
        word && props.onSearch(word);
        formRef.current.reset();
    };

    return (
        <form
            className={styles.searchContainer}
            ref={formRef}
            onSubmit={onSubmit}
        >
            <input
                ref={inputRef}
                type="text"
                className="search-input"
                placeholder="Search.."
            ></input>
            <button className="search-button">
                <i className="fa fa-search"></i>
            </button>
        </form>
    );
});

export default SearchForm;
