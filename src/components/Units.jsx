import { useEffect, useState } from "react";
import Header from "./Header";
import "./Units.scss";
import { Link } from "react-router-dom";

import { unitList, unitFilteredList } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function valuetext(value) {
  return `${value}`;
}

function Units() {
  const [age, setAge] = useState("All");
  const [woodCostValue, setWoodCostValue] = useState([0, 200]);
  const [foodCostValue, setFoodCostValue] = useState([0, 200]);
  const [goldCostValue, setGoldCostValue] = useState([0, 200]);

  const dispatch = useDispatch();
  let data = useSelector((state) => state.unitData);

  useEffect(() => {
    dispatch(unitList());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (age !== "All") {
      dispatch(unitFilteredList(age));
    } else {
      dispatch(unitList());
    }
    // eslint-disable-next-line
  }, [age]);

  useEffect(() => {
    console.log(woodCostValue)
    // eslint-disable-next-line
  }, [woodCostValue]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleWoodSliderChange = (event, newValue) => {
    console.log("Cost Range ", woodCostValue);
    setWoodCostValue(newValue);
  };

  const handleFoodSliderChange = (event, newValue) => {
    console.log("Cost Range ", foodCostValue);
    setFoodCostValue(newValue);
  };

  const handleGoldSliderChange = (event, newValue) => {
    console.log("Cost Range ", goldCostValue);
    setGoldCostValue(newValue);
  };

  return (
    <>
      <Header currentPage={"Units Page"} />
      <div className="unitsContent">
        <div className="filters">
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={"All"} selected>
                All
              </MenuItem>
              <MenuItem value="Dark">Dark</MenuItem>
              <MenuItem value="Feudal">Feudal</MenuItem>
              <MenuItem value="Castle">Castle</MenuItem>
            </Select>
          </FormControl>
          <div className="Sliders">
            <Box sx={{ width: 300 }} className="sliderBox">
              <FormControlLabel control={<Checkbox />} label="Wood" />
              <Slider
                getAriaLabel={() => "Cost Range"}
                value={woodCostValue}
                onChange={handleWoodSliderChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                max={200}
              />
              <div>
                {woodCostValue[0]} - {woodCostValue[1]}
              </div>
            </Box>
            <Box sx={{ width: 300 }} className="sliderBox">
              <FormControlLabel control={<Checkbox />} label="Food" />
              <Slider
                getAriaLabel={() => "Cost Range"}
                value={foodCostValue}
                onChange={handleFoodSliderChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                max={200}
              />
              <div>
                {foodCostValue[0]} - {foodCostValue[1]}
              </div>
            </Box>
            <Box className="sliderBox">
              <FormControlLabel control={<Checkbox />} label="Gold" />
              <Slider
                getAriaLabel={() => "Cost Range"}
                value={goldCostValue}
                onChange={handleGoldSliderChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                max={200}
              />
              <div>
                {goldCostValue[0]} - {goldCostValue[1]}
              </div>
            </Box>
          </div>
        </div>
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
                  <TableCell align="left">ID</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Age</TableCell>
                  <TableCell align="left">Costs</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((unit, key) => (
                  <TableRow
                    className="tableRowMaterial"
                    to={`/unit/${unit.id}`}
                    component={Link}
                    onTouchEnd
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="left">
                      {unit.id}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {unit.name}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
                      {unit.age}
                    </TableCell>
                    <TableCell component="th" scope="row" align="left">
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Units;
