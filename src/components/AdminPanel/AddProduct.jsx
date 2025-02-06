import React, { useState } from "react";
import { useFormik, FieldArray } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const productSchemas = {
  Perfume: Yup.object().shape({
    name: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    description: Yup.string(),
    sizes: Yup.array().of(
      Yup.object().shape({
        size: Yup.string().required("Required"),
        price: Yup.number().required("Required"),
        quantity: Yup.number().required("Required"),
      })
    ),
  }),
};

const AddProduct = () => {
  const [productType, setProductType] = useState("Perfume");

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      gender: "",
      description: "",
      sizes: [{ size: "", price: "", quantity: "" }],
    },
    validationSchema: productSchemas[productType],
    onSubmit: (values) => {
      console.log("Submitted Values:", values);
    },
  });

  return (
    <Box p={3}>
      <Typography variant="h4">Add Product</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Product Type</InputLabel>
        <Select
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
        >
          <MenuItem value="Perfume">Perfume</MenuItem>
        </Select>
      </FormControl>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Type"
          name="type"
          value={formik.values.type}
          onChange={formik.handleChange}
          error={formik.touched.type && Boolean(formik.errors.type)}
          helperText={formik.touched.type && formik.errors.type}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Gender</InputLabel>
          <Select
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Unisex">Unisex</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />

        <Typography variant="h6" mt={2}>Sizes</Typography>
        <FieldArray
          name="sizes"
          render={(arrayHelpers) => (
            <>
              {formik.values.sizes.map((size, index) => (
                <Box key={index} display="flex" gap={2} alignItems="center" mb={2}>
                  <TextField
                    label="Size"
                    name={`sizes.${index}.size`}
                    value={size.size}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.sizes?.[index]?.size &&
                      Boolean(formik.errors.sizes?.[index]?.size)
                    }
                    helperText={
                      formik.touched.sizes?.[index]?.size &&
                      formik.errors.sizes?.[index]?.size
                    }
                  />
                  <TextField
                    label="Price"
                    type="number"
                    name={`sizes.${index}.price`}
                    value={size.price}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.sizes?.[index]?.price &&
                      Boolean(formik.errors.sizes?.[index]?.price)
                    }
                    helperText={
                      formik.touched.sizes?.[index]?.price &&
                      formik.errors.sizes?.[index]?.price
                    }
                  />
                  <TextField
                    label="Quantity"
                    type="number"
                    name={`sizes.${index}.quantity`}
                    value={size.quantity}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.sizes?.[index]?.quantity &&
                      Boolean(formik.errors.sizes?.[index]?.quantity)
                    }
                    helperText={
                      formik.touched.sizes?.[index]?.quantity &&
                      formik.errors.sizes?.[index]?.quantity
                    }
                  />
                  <IconButton
                    color="secondary"
                    onClick={() => arrayHelpers.remove(index)}
                    disabled={formik.values.sizes.length === 1}
                  >
                    <Remove />
                  </IconButton>
                </Box>
              ))}
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() =>
                  arrayHelpers.push({ size: "", price: "", quantity: "" })
                }
              >
                Add Size
              </Button>
            </>
          )}
        />

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
