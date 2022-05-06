import React from 'react';
import Box from '@mui/material/Box';

import config from '../config';

export default function Footer() {

  const style = {

    container: {backgroundColor: '#00071a'},

    column: {
      float: 'left',
      padding: '24px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#ccccdd',
      letterSpacing: '0.1em',
    },

    rightColumn: {
      float: 'right',
      padding: '24px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#ccccdd',
      letterSpacing: '0.1em',
    }

  };

  return (
    <Box sx={style.container}>
      <Box sx={style.column}>Version: {config.VERSION}</Box>
      <Box sx={style.rightColumn}>Ecco Online © {config.YEAR}</Box>
    </Box>
  );
}

