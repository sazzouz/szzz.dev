import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import ProjectCard from "../src/ProjectCard";
import styles from "../styles/Index.module.css";
import { CssBaseline } from "@material-ui/core";
import SimpleTabs from "../src/SimpleTabs";
import ScrollableTabsButtonAuto from "../src/Tabs";
import Types from "../src/Bio";

export default function Index() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            szzz.dev
          </Typography>
          <Types />
          {/* <div>
            <Link href="/about" color="secondary">
              about
            </Link>
          </div> */}
          {/* <Container maxWidth="sm"> */}
          <ScrollableTabsButtonAuto />
          {/* </Container> */}
          {/* <ProTip /> */}
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
