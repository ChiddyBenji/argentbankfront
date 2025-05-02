import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './components/Auth/SignInPage';
import UserPage from './pages/User';
import PrivateRoute from './components/Common/PrivateRoute';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route 
          path="/user" 
          element={
            <PrivateRoute element={<UserPage />} />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;