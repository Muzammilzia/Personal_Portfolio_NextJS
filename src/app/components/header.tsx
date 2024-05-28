"use client";
import React from "react";
import { ParticlesDesign } from "./particles-design";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Header = () => {
  return (
    <div style={{ height: "100vh", color: "white" }}>
      <ParticlesDesign />
      <Box sx={{ height: "100%" }}>
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            sx={{ margin: "0", height: "100%", alignItems: "center" }}
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                textAlign: { xs: "center", md: "left" },
                padding: { xs: "16px", md: "0" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                  fontWeight: "bold",
                }}
              >
                Muzzammil Zia
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                }}
              >
                Web and App Developer | Crafting Digital Solutions for Your
                Success
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
              }}
            >
              {/* photo here */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
