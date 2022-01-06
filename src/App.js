import './App.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function RecipeReviewCard() {
  return (
    <Card sx={{  marginTop: 15 , marginLeft:5, maxWidth: 345 , border: '2px solid black' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'grey' }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="Shahzaib Ansari (2019-SE-249)"
        subheader="I am a..."
      />
      <Button  sx={{width: 20 , marginLeft: 3}} variant="contained">Add</Button>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Name: Shahzaib Ansari <br />
         Roll: 2019-SE-249 <br />
         I am a student of Sir Syed University
        </Typography>
      </CardContent>
    </Card>
  );
}
