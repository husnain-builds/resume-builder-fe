import React, { useState, useEffect } from 'react'
import { Button, Container, Typography } from '@mui/material'
import axios from 'axios';
import { MESSAGES } from '../../utils/messages';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const handleRedirection = () =>{
    navigate('/profile')
  }
  return (
    <Container maxWidth="sm" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Typography variant="h2" textAlign={'center'} gutterBottom>{MESSAGES.WELCOME.TITLE}</Typography>
      <Typography variant="body1" paragraph>{MESSAGES.WELCOME.SUB_TEXT}</Typography>
      <Button variant="contained" color="primary" onClick={handleRedirection}>{MESSAGES.WELCOME.BUTTON_TEXT}</Button>
    </Container>
  )
}

export default Welcome