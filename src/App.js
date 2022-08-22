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

function AlertBox() {
  const [openAlert, setOpenAlert] = React.useState(true);
  return (
    <Box sx={{ width: "100%", position: "absolute" }} p={0}>
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
          sx={{ mb: 2 }}
        >
          <strong>This website is still under development! Here be dragons.</strong>
        </Alert>
      </Collapse>
    </Box>
  );
}
function App() {
  return (
    <>
      <CssBaseline />
      <AlertBox />
      <Intro />
      <WorkEXP />
    </>
  );
}

export default App;
