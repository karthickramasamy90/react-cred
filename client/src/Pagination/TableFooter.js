import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import styles from "./Table.css";

const TableFooter = ({range, setPage, page, slice}) => {
    useEffect(() => {
        if(slice.length < 1 && page !== 1 ) {
            setPage(page - 1);
        }
    },[slice, page, setPage]);

    return(
        <div className={styles.tableFooter}>
            {range.map((ele, index) => {
                return(
                    <Button
                        key={index}
                        className={
                            `${styles.button} ${
                                page === ele ? styles.activeButton : styles.inactiveButton
                            }`
                        }
                        onClick={() => setPage(ele)}
                    >
                        {ele}
                    </Button>
                )
            })}
        </div>
    )
}

export default TableFooter;