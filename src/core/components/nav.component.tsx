/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { AppRoutes } from "@/router";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const BasicTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const value =
    location.pathname === AppRoutes.pizza
      ? 0
      : location.pathname === AppRoutes.pasta
      ? 1
      : location.pathname === AppRoutes.cart
      ? 2
      : false;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (newValue === 0) {
      navigate(AppRoutes.pizza);
    } else if (newValue === 1) {
      navigate(AppRoutes.pasta);
    } else if (newValue === 2) {
      navigate(AppRoutes.cart);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <img
        src="/logo.webp"
        alt="TrastevereToGo"
        css={css`
          width: 300px;
          position: absolute;
          @media (max-width: 900px) {
          display: none;
        }
        `}
      />
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "transparent",
          backgroundColor: "#6ece90",
          paddingTop: 3
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          TabIndicatorProps={{ style: { backgroundColor: "white" } }}
        >
          <Tab
            label="Pizza"
            {...a11yProps(0)}
            sx={{
              "&.Mui-selected": { color: "white",},
            }}
          />
          <Tab
            label="Pasta"
            {...a11yProps(1)}
            sx={{
              "&.Mui-selected": { color: "white" },
            }}
          />
          <Tab
            label="Cart"
            {...a11yProps(2)}
            sx={{
              "&.Mui-selected": { color: "white" },
            }}
          />
        </Tabs>
      </Box>
    </Box>
  );
};
