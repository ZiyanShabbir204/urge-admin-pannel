import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Button, Modal, Typography as MuiTypography } from "@mui/material";
import PerfumeGrid from "./ProductGrid/perfume/PerfumeGrid";
import CandleGrid from "./ProductGrid/candle/CandleGrid";
import PerfumeWaxGrid from "./ProductGrid/perfume-wax/PerfumeWaxGrid";

const VerticalTabs = () => {
  const [value, setValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddProduct = () => {
    if (value === 0) {
      console.log("Add Product to Perfume");
    } else if (value === 1) {
      console.log("Add Product to Perfume Wax");
    } else if (value === 2) {
      console.log("Add Product to Scented Candle");
    }
    handleCloseModal(); // Close the modal after action
  };

  return (
    <Box sx={{ display: "flex", height: 500 }}>
      {/* Vertical Tabs */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Perfume" />
        <Tab label="Perfume Wax" />
        <Tab label="Scented Candles" />
      </Tabs>

      {/* Tab Panels */}
      <Box sx={{ p: 3, flex: 1 }}>
        {/* Button above grid */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Add Product
          </Button>
        </Box>

        {/* Render grids based on tab */}
        {value === 0 && <PerfumeGrid />}
        {value === 1 && <PerfumeWaxGrid />}
        {value === 2 && <CandleGrid />}
      </Box>

      {/* Modal for Add Product */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Add Product
          </Typography>
          <MuiTypography variant="body2" gutterBottom>
            Are you sure you want to add a product to{" "}
            {value === 0
              ? "Perfume"
              : value === 1
              ? "Perfume Wax"
              : "Scented Candles"}?
          </MuiTypography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" onClick={handleCloseModal} color="error"> 
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleAddProduct}>
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default VerticalTabs;
