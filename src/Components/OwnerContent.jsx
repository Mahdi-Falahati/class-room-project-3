import PropTypes from "prop-types";

// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useState } from "react";
import TeachersList from "./TeacherList";
import ClassesList from "./ClassesList";
import StudentList from "./StudentList";
import HomeworkList from "./HomeworkList";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

export default function OwnerContent({ isOrgan, isClass, user }) {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleChangeTabOrgan = (event, newValue) => {
    console.log("newValue", newValue);
    setValue1(newValue);
  };
  const handleChangeTabClasses = (event, newValue) => {
    console.log("newValue", newValue);
    setValue2(newValue);
  };

  const Content = () => {
    if (user === "student" && isClass) {
      return <HomeworkList user={user} />;
    } else if (isOrgan && user === "Admin") {
      if (value1 === 0) {
        return (
          <TabPanel value={value1} index={0}>
            <TeachersList />
          </TabPanel>
        );
      } else if (value1 === 1) {
        return (
          <TabPanel value={value1} index={1}>
            <ClassesList />
          </TabPanel>
        );
      }
    }
    if (isClass) {
      console.log(isClass, isOrgan);
      if (value2 === 0 && user !== "student") {
        return (
          <TabPanel value={value2} index={0}>
            <StudentList />
          </TabPanel>
        );
      } else if (value2 === 1) {
        return (
          <TabPanel value={value2} index={1}>
            <HomeworkList user={user} />
          </TabPanel>
        );
      }
    }
  };

  return (
    <Box sx={{ width: "100%", minHeight: "80vh" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        {isOrgan && user === "Admin" ? (
          <Tabs
            value={value1}
            onChange={handleChangeTabOrgan}
            aria-label="basic tabs example"
          >
            <Tab label="Teachers" {...a11yProps(0)} />
            <Tab label="Classes" {...a11yProps(1)} />
          </Tabs>
        ) : isClass && user !== "student" ? (
          <Tabs
            value={value2}
            onChange={handleChangeTabClasses}
            aria-label="basic tabs example"
          >
            <Tab label="Students" {...a11yProps(0)} />
            <Tab label="Homework" {...a11yProps(1)} />
          </Tabs>
        ) : (
          ""
        )}
      </Box>
      {Content()}
    </Box>
  );
}
