import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './Loader.module.css'

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }} className={styles.loader}>
      <CircularProgress />
    </Box>
  );
}
