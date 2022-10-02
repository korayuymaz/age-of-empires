import { useEffect } from "react";
import Header from "./Header";
import "./Units.scss";
import { Link } from "react-router-dom";

import { unitList } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Units() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.unitData);
  console.warn("Data of units", data);
  useEffect(() => {
    dispatch(unitList());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header currentPage={"Units Page"} />
      <div className="container">
        <TableContainer component={Paper}>
          <Table
            stickyHeader
            sx={{ maxWidth: 650 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Costs</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((unit, key) => (
                <TableRow
                  key={key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Link to={`/unit/${unit.id}`} className="link">
                    <TableCell component="th" scope="row" align="left">
                      {unit.id}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {unit.name}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {unit.age}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {unit.cost ? (
                        unit.cost.Gold ? (
                          <span> Gold: {unit.cost.Gold}</span>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                      {unit.cost ? (
                        unit.cost.Food ? (
                          <span> Food: {unit.cost.Food}</span>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                      {unit.cost ? (
                        unit.cost.Wood ? (
                          <span> Wood: {unit.cost.Wood}</span>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                      {unit.cost ? "" : "No Cost"}
                    </TableCell>
                  </Link>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Units;
