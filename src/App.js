import "./App.css";
import Intro from "./intro_view/Intro";
import WorkEXP from "./workEXP_view/WorkEXP";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import Divider from "@mui/material/Divider";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "64px",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MiniDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function AlertBox() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [openAlert, setOpenAlert] = React.useState(true);
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        [theme.breakpoints.up("md")]: {
          left: `calc(${theme.spacing(8)} + 1px)`,
        },
        right: 0,
      }}
      p={0}
    >
      <Collapse in={openAlert}>
        <Alert
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <strong>
            This website is still under development! Here be dragons.
          </strong>
        </Alert>
      </Collapse>
    </Box>
  );
}
function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {matches ? (
        <MiniDrawer variant="permanent" open={open}>
          <Box
            sx={{
              display: "flex",
              direction: "column",
              alignItems: "flex-start",
              PaddingLeft: "14px",
              flexGrow: 1,
            }}
          ></Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              direction: "column",
              alignItems: "flex-end",
              paddingLeft: "14px",
            }}
          >
            <ViewSidebarOutlinedIcon
              onClick={() => {
                setOpen(!open);
              }}
              sx={{
                fontSize: "2rem",
                color: "#707070",
                transform: "rotate(180deg)",
              }}
            />
          </Box>
        </MiniDrawer>
      ) : (
        <></>
      )}
      <Box flexGrow={1}>
        <AlertBox />
        <Intro />
        <WorkEXP />
      </Box>
    </Box>
  );
}

export default App;
