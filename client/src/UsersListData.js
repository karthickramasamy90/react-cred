import React,{ useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";

import useTable from "./Pagination/UseTable";
import styles from "./Pagination/style.css";
import TableFooter from "./Pagination/TableFooter";

function UsersListData() {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const rowsPerPage = 10;
    const {slice, range} = useTable(list, page, rowsPerPage);

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        let url = "http://localhost:3001/getUsers";
        fetch(url).then(response => response.json())
        .then(data => setList(data))
    }

    return (
        <>
            <Row>
                <h4>List Data</h4>
                <Col md={8}>
                    {/* <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Post Id</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list && list.map((detail) => {
                                const {postId, id, name, email, body} = detail;
                                return (
                                    <tr>
                                        <td>{postId}</td>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table> */}
                    <Table striped bordered hover variant="light" className={styles.table}>
                        <thead className={styles.tableRowHeader}>
                        <tr>
                            <th className={styles.tableHeader}>Post Id</th>
                            <th className={styles.tableHeader}>ID</th>
                            <th className={styles.tableHeader}>Name</th>
                            <th className={styles.tableHeader}>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                            {slice.map((detail, index) => {
                                const {postId, id, name, email, body} = detail;

                                return(
                                    <tr className={styles.tableRowItems} key={index}>
                                        <td className={styles.tableCell}>{postId}</td>
                                        <td className={styles.tableCell}>{id}</td>
                                        <td className={styles.tableCell}>{name}</td>
                                        <td className={styles.tableCell}>{email}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
                </Col>
            </Row>
        </>
    )
}

export default UsersListData;
