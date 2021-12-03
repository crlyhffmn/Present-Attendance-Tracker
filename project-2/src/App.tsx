import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AccountPage from "./pages/AccountPage";
import CreateClassPage from "./pages/CreateClassPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/create-class' element={<CreateClassPage />} />
        <Route path='/my-account' element={<AccountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
