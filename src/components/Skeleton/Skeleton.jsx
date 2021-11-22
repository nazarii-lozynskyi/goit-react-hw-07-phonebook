import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';

export default function Variants() {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton
          variant="circular"
          width={40}
          height={40}
          style={{ marginRight: 5 }}
        />
        <Skeleton variant="text" width={210} height={20} />
      </Box>

      <Skeleton
        variant="text"
        width={100}
        height={20}
        style={{ marginLeft: 45 }}
      />
    </Box>
  );
}
