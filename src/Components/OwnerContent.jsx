import PropTypes from "prop-types";
import List from "@mui/material/List";
import PersonInfo from "./PersonInfo";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function OwnerContent() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const deleteHandler = (id) => {
    console.log(fakeData.filter((person) => person.id !== id));
  };

  const Content = () => {
    if (value === 0) {
      return (
        <TabPanel value={value} index={0}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {fakeData?.map((info, index) => (
              <PersonInfo
                key={index}
                OnDelete={deleteHandler}
                Name={info.name}
                ID={info.id}
              />
            ))}
          </List>
        </TabPanel>
      );
    } else {
      return "hello";
    }
  };

  return (
    <Box sx={{ width: "100%" ,minHeight:"80vh"}}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Teachers" {...a11yProps(0)} />
          <Tab label="Students" {...a11yProps(1)} />
        </Tabs>
      </Box>
      {Content()}
    </Box>
  );
}

const fakeData = [
  { name: "RC", id: "1" },
  { name: "Mahdi", id: "2" },
  { name: "Fateme", id: "3" },
  { name: "Vesal", id: "4" },
];
