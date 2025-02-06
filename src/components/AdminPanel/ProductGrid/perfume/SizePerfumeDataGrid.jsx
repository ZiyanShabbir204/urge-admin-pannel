import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";

const SizeDataGrid = ({ sizes}) => {
    const columns = [
      { field: "size", headerName: "Size", flex: 1 },
      { field: "price", headerName: "Price", flex: 1 },
      { field: "quantity", headerName: "Quantity", flex: 1 },
      { field: "top_notes", headerName: "Top Notes", flex: 1 },
      { field: "heart_notes", headerName: "Heart Notes", flex: 1 },
      { field: "base_notes", headerName: "Base Notes", flex: 1 },
      {
        field: "img1",
        headerName: "Image 1",
        flex: 1,
        renderCell: (params) =>
          params.value ? (
            <img src={params.value} alt="Perfume" width="50" height="50" />
          ) : (
            "N/A"
          ),
      },
      {
        field: "img2",
        headerName: "Image 2",
        flex: 1,
        renderCell: (params) =>
          params.value ? (
            <img src={params.value} alt="Perfume" width="50" height="50" />
          ) : (
            "N/A"
          ),
      },
      {
        field: "action",
        headerName: "Actions",
        flex: 1,
        renderCell: (params) => (
          <div>
            <Button
              variant="contained"
              color="warning"
              size="small"
              style={{ marginRight: 5 }}
              onClick={() => handleEdit(params.row)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </Button>
          </div>
        ),
      },
    ];
  
    const handleEdit = (row) => {
      // console.log("Edit:", row);
      // Implement edit functionality
    };
  
    const handleDelete = (id) => {
      // console.log("Delete:", id);
      // Implement delete functionality
    };
  
    return <DataGrid rows={sizes} columns={columns} pageSizeOptions={[5, 10]} />;
  };
  
  export default SizeDataGrid;
  