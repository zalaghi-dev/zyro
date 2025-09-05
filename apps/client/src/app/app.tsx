import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/MainLayout';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { ChatRoom } from '../pages/ChatRoom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<ChatRoom />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
