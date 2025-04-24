import { ReactElement, useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import DrawerComponent from "./SideBar";
import NavBarComponent from "./NavBar";

const Layout = ({ children }: { children: ReactElement }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBarComponent open={open} handleDrawerOpen={handleDrawerOpen} />
      <DrawerComponent open={open} setOpen={setOpen} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 7.5 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
