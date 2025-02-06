import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
// import { fetchProducts } from '../../services/api';

const ProductTable = ({ productType, onEdit }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(productType);
      setProducts(data);
    };
    loadProducts();
  }, [productType]);

  const handleDelete = async (id) => {
    await deleteProduct(productType, id);
    setProducts(products.filter((product) => product._id !== id));
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product._id.includes(searchTerm)
  );

  return (
    <Paper>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {productType.replace(/([A-Z])/g, ' $1')}
        </Typography>
        <TextField
          label="Search by name or ID"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Toolbar>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Sizes</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.gender || '-'}</TableCell>
                <TableCell>
                  {product.sizes.map((size) => size.size).join(', ')}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => onEdit(product)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(product._id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ProductTable;