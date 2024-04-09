import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <Box padding={4}>
        <Outlet />
      </Box>
    </>
  )
}

export default Layout;