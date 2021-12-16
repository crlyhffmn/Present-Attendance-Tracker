import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AccountPage from "./pages/AccountPage";
import ClassRegPage from "./pages/ClassRegPage";
import CreateClassPage from "./pages/CreateClassPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import ClassPage from "./pages/ClassPage"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/create-class' element={<CreateClassPage />} />
          <Route path='/my-account' element={<AccountPage />} />
          <Route path='/class' element={<ClassPage />} />
          <Route path='/course-reg' element={<ClassRegPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
