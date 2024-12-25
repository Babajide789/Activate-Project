import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import HomeIcon from "@mui/icons-material/Home";
import TodayIcon from "@mui/icons-material/Today";
import GroupsIcon from "@mui/icons-material/Groups";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

// Data Table Component
function DataTable() {
  const rows = [
    { id: 1, name: "John Doe", role: "Participant", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Organizer", status: "Pending" },
    { id: 3, name: "Alice Johnson", role: "Participant", status: "Active" },
    { id: 4, name: "Bob Brown", role: "Participant", status: "Inactive" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// TabPanel Component
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

function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 300,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          icon={<HomeIcon />}
          iconPosition="start"
          label="Create an Account"
          {...a11yProps(0)}
        />
        <Tab
          icon={<TodayIcon />}
          iconPosition="start"
          label="Join an Event"
          {...a11yProps(1)}
        />
        <Tab
          icon={<GroupsIcon />}
          iconPosition="start"
          label="Submit Requirements"
          {...a11yProps(2)}
        />
        <Tab
          icon={<FormatListNumberedIcon />}
          iconPosition="start"
          label="Get Shortlisted"
          {...a11yProps(3)}
        />
        <Tab
          icon={<HomeIcon />}
          iconPosition="start"
          label="Get the Highest Votes"
          {...a11yProps(4)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* Replace content with Data Table */}
        <DataTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h4>Join an Event</h4>
        <p>Lorem ipsum dolor sit amet consectetur. Sit</p>
        <p>curabitur nulla justo tellus amet. Ut placerat</p>
        <p>dolor massa metus quisque sodales semper.</p>
        <p>Hac donec vulputate pharetra augue eu congue</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h4>Submit Requirements</h4>
        <p>Lorem ipsum dolor sit amet consectetur. Sit</p>
        <p>curabitur nulla justo tellus amet. Ut placerat</p>
        <p>dolor massa metus quisque sodales semper.</p>
        <p>Hac donec vulputate pharetra augue eu congue</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h4>Get Shortlisted</h4>
        <p>Lorem ipsum dolor sit amet consectetur. Sit</p>
        <p>curabitur nulla justo tellus amet. Ut placerat</p>
        <p>dolor massa metus quisque sodales semper.</p>
        <p>Hac donec vulputate pharetra augue eu congue</p>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h4>Get the Highest Votes</h4>
        <p>Lorem ipsum dolor sit amet consectetur. Sit</p>
        <p>curabitur nulla justo tellus amet. Ut placerat</p>
        <p>dolor massa metus quisque sodales semper.</p>
        <p>Hac donec vulputate pharetra augue eu congue</p>
      </TabPanel>
    </Box>
  );
}

export default VerticalTabs;
