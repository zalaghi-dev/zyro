import { Box, TextField, Button, List, ListItem } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ChatRoom = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const { t } = useTranslation();

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto' }}>
      <h2>{t('chat')}</h2>
      <List>
        {messages.map((msg, i) => (
          <ListItem key={i}>{msg}</ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label="Message"
        />
        <Button variant="contained" onClick={sendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};
