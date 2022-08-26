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
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Global } from "@emotion/react";

const drawerWidth = 240;
const drawerBleeding = 56;

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
  width: "65px",
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

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
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
          left: "65px",
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
              justifyContent: open ? "initial" : "center",
              px: 2,
              flexGrow: 1,
            }}
          >
            <Box sx={{ mr: open ? 2 : "auto" }} pt={1}>
              <LanguageOutlinedIcon
                sx={{
                  fontSize: "2rem",
                }}
              />
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              direction: "column",
              alignItems: "flex-end",
              justifyContent: open ? "initial" : "center",
              px: 2,
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
                mr: open ? 2 : "auto",
              }}
            />
          </Box>
        </MiniDrawer>
      ) : (
        <>
          <Global
            styles={{
              ".MuiDrawer-root > .MuiPaper-root": {
                height: `calc(50% - ${drawerBleeding}px)`,
                overflow: "visible",
              },
            }}
          />
          <SwipeableDrawer
            anchor="bottom"
            swipeAreaWidth={drawerBleeding}
            onClose={() => {
              setOpen(false);
            }}
            onOpen={() => {
              setOpen(true);
            }}
            disableSwipeToOpen={false}
            open={open}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <StyledBox
              sx={{
                position: "absolute",
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: "visible",
                right: 0,
                left: 0,
              }}
            >
              <Puller />
              <Typography
                sx={{ p: 2, textAlign: "center", color: "text.secondary" }}
              >
                Menu
              </Typography>
            </StyledBox>
          </SwipeableDrawer>
        </>
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
