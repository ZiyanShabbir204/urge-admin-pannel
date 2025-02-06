import React from 'react';
import { TextField, MenuItem, Grid, Typography } from '@mui/material';
import { useFormik } from 'formik';

const PerfumeForm = ({ initialValues, onSubmit }) => {
  const formik = useFormik({
    initialValues: initialValues || {
      name: '',
      type: '',
      gender: '',
      description: '',
      sizes: [
        {
          size: '',
          price: 0,
          quantity: 0,
          top_notes: '',
          heart_notes: '',
          base_notes: '',
          img1: '',
          img2: '',
        },
      ],
    },
    onSubmit: (values) => {
      // onSubmit(values)
      console.log("inside perfume", values)
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        {/* Product Name */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Product Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            required
          />
        </Grid>

        {/* Type */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Type"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            required
          />
        </Grid>

        {/* Gender */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            required
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Unisex">Unisex</MenuItem>
          </TextField>
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            multiline
            rows={4}
          />
        </Grid>

        {/* Sizes */}
        {formik.values.sizes.map((size, index) => (
          <Grid container spacing={3} key={index} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h6">Size {index + 1}</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Size (e.g., 50ml, 100ml)"
                name={`sizes[${index}].size`}
                value={size.size}
                onChange={formik.handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Price"
                name={`sizes[${index}].price`}
                type="number"
                value={size.price}
                onChange={formik.handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Quantity"
                name={`sizes[${index}].quantity`}
                type="number"
                value={size.quantity}
                onChange={formik.handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Top Notes"
                name={`sizes[${index}].top_notes`}
                value={size.top_notes}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Heart Notes"
                name={`sizes[${index}].heart_notes`}
                value={size.heart_notes}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Base Notes"
                name={`sizes[${index}].base_notes`}
                value={size.base_notes}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Image 1 URL"
                name={`sizes[${index}].img1`}
                value={size.img1}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Image 2 URL"
                name={`sizes[${index}].img2`}
                value={size.img2}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </form>
  );
};

export default PerfumeForm;