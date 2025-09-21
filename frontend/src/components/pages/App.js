import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button, Typography, Select, MenuItem } from '@mui/material';

function App() {
  const [emotion, setEmotion] = useState('calm');
  const [melody, setMelody] = useState([]);
  
  const handleGenerateMelody = () => {
    axios.get(`http://localhost:5000/generate_melody?emotion=${emotion}`)
      .then((response) => {
        setMelody(response.data.melody);
      })
      .catch((error) => {
        console.error("Erro ao gerar melodia: ", error);
      });
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Geração Musical Colaborativa com IA
      </Typography>
      
      <Typography variant="h6" align="center" gutterBottom>
        Escolha uma emoção para gerar uma melodia
      </Typography>

      <Select
        value={emotion}
        onChange={(e) => setEmotion(e.target.value)}
        fullWidth
        variant="outlined"
        sx={{ marginBottom: 2 }}
      >
        <MenuItem value="calm">Calma</MenuItem>
        <MenuItem value="excited">Empolgado</MenuItem>
        <MenuItem value="sad">Triste</MenuItem>
      </Select>

      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerateMelody}
        fullWidth
        sx={{ marginBottom: 2 }}
      >
        Gerar Melodia
      </Button>

      <Typography variant="h6" align="center">
        Melodia Gerada:
      </Typography>
      
      <Typography variant="body1" align="center">
        {melody.length ? melody.join(' → ') : "Nenhuma melodia gerada ainda."}
      </Typography>
    </Container>
  );
}

export default App;
