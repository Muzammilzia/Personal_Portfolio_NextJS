"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { useWindowScroll } from "../hooks/use-window-scroll";

export const NavBar = () => {
  const [elevate, setElevate] = useState<boolean>(false);
  const offset = 64;
  const delay = 100;

  console.log(elevate);

  const handleWindowScroll = useCallback((): void => {
    if (window.scrollY > offset) {
      setElevate(true);
    } else {
      setElevate(false);
    }
  }, []);

  useWindowScroll({
    handler: handleWindowScroll,
    delay,
  });
  return (
    <Box sx={{ padding: "16px 0", position: "fixed", width: "100%", top: "0" }}>
      <Container
        sx={{
          borderRadius: "16px",
          backgroundColor: elevate ? '#121621' : 'transparent',
          boxShadow: elevate ? 8 : 0,
          color: "white",
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            height: "64px",
          }}
        >
          <Stack>dasd</Stack>
          <Stack
            direction="row"
            spacing={2}
          >
            <Typography>Home</Typography>            
            <Typography>Experience</Typography>            
            <Typography>Skills</Typography>            
            <Typography>Projects</Typography>            
          </Stack>
          <Stack>
            <Button variant="contained">
                Contact
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
