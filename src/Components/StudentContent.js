// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Link from "@mui/material/Link";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Grid } from "@mui/material";

import AddClass from "./AddClass";
import ClassInfo from "./ClassInfo";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
////student page/////
export default function StudentContent() {
  const [value, setValue] = useState(0);
  // const [anchorEl, setAnchorEl] = useState(null);
  //   const open = Boolean(anchorEl);
  //   const id = open ? "simple-popover" : undefined;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const deleteHandler = (id) => {
    console.log(fakeData.filter((person) => person.id !== id));
  };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const Content = () => {
    if (value === 0) {
      return (
        <TabPanel value={value} index={0}>
          <List>
            <Grid container columns={12}>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <AddClass title="Add Class" Organization="APS" />
                {fakeData}
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  bgcolor: "background.paper",
                }}
              >
                {fakeData?.map((info, index) => (
                  <ClassInfo
                    key={index}
                    OnDelete={deleteHandler}
                    Name={info.name}
                    ID={info.id}
                  />
                ))}
              </Grid>
            </Grid>
          </List>
        </TabPanel>
      );
    } else {
      return "hello";
    }
  };
  return (
    <Box sx={{ width: "100%", minHeight: "80vh" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Homeworks" {...a11yProps(0)} />
          {/* <Tab label="Students" {...a11yProps(1)} /> */}
        </Tabs>
      </Box>
      {Content()}
    </Box>
  );
}

const fakeData = [
  { name: "FreeCode Camp Challenge", id: "1" },
  { name: "ToDo List Web Site", id: "2" },
  { name: "Goodzila", id: "3" },
  { name: "Code Ware 8 Kata", id: "4" },
  { name: "TV Show Project", id: "5" },
];
