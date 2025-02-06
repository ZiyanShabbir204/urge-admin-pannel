import React, { useState } from 'react';
import { Tabs, Tab, Box, Button, Container, Paper, Typography } from '@mui/material';
import ProductTable from '../components/AdminPanel/ProductTable';
import ProductDialog from '../components/AdminPanel/ProductDialog';
import PerfumeForm from '../components/AdminPanel/ProductForm/PerfumeForm';
import PerfumeWaxForm from '../components/AdminPanel/ProductForm/PerfumeWaxForm';
import CandleForm from '../components/AdminPanel/ProductForm/CandleForm';
import VerticalTabs from '../components/AdminPanel/VerticalTab';

const AdminPage = () => {
 

  return (
  <>
  <VerticalTabs/>
  </>
  );
};

export default AdminPage;