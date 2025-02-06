import React, { useEffect, useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import Datagrid from "../../Datagrid";
import SizeDataGrid from "./SizeCandleDataGrid";
import useFetchRow from "../../../../hooks/useFetchRow";

const CandleGrid = () => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [open, setOpen] = useState(false);
  const { rows } = useFetchRow("scented-candles"); // Fetch candle data

  // Open Modal and Set Sizes Data
  const handleOpen = (sizes) => {
    const sizeID = sizes.map((size) => ({
      ...size,
      id: size._id,
    }));
    setSelectedSizes(sizeID);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Main DataGrid Columns
  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "intro", headerName: "Introduction", width: 200 },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => handleOpen(params.row.sizes)}
        >
          View Sizes
        </Button>
      ),
    },
  ];

  return (
    <>
      <Datagrid rows={rows} columns={columns} loading={false} />

      {/* Modal for Sizes */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1000,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <h2>Candle Sizes</h2>
          <SizeDataGrid sizes={selectedSizes} />
        </Box>
      </Modal>
    </>
  );
};

export default CandleGrid;
