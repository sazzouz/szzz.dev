import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Tooltip from "@material-ui/core/Tooltip";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import CardTravelOutlinedIcon from "@material-ui/icons/CardTravelOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import ProjectCard from "./ProjectCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" variant="outlined">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tooltip title="Projects" placement="bottom">
            <Tab
              icon={<BuildOutlinedIcon />}
              label="Projects"
              {...a11yProps(0)}
            />
          </Tooltip>
          <Tooltip title="Work" placement="bottom">
            <Tab
              icon={<CardTravelOutlinedIcon />}
              label="Work"
              {...a11yProps(1)}
            />
          </Tooltip>
          <Tooltip title="Educations" placement="bottom">
            <Tab
              icon={<SchoolOutlinedIcon />}
              label="Education"
              {...a11yProps(2)}
            />
          </Tooltip>
          <Tooltip title="Skills" placement="bottom">
            <Tab
              icon={<CategoryOutlinedIcon />}
              label="Skills"
              {...a11yProps(3)}
            />
          </Tooltip>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProjectCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProjectCard />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProjectCard />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProjectCard />
      </TabPanel>
    </div>
  );
}
