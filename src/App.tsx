import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardListPage from './pages/BoardListPage';
import BoardDetailPage from './pages/BoardDetailPage';
import BoardWritePage from "./pages/BoardWritePage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/boards/write" element={<BoardWritePage />} />
                <Route path="/boards/:id" element={<BoardDetailPage />} />
                <Route path="/boards" element={<BoardListPage />} />
            </Routes>
        </Router>
    );
}
export default App;