import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          {/* <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} /> */}
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
