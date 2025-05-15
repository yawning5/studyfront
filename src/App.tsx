import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardListPage from './pages/BoardListPage';
import BoardDetailPage from './pages/BoardDetailPage';
import BoardWritePage from "./pages/BoardWritePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/boards/write" element={<BoardWritePage />} />
                <Route path="/boards/:id" element={<BoardDetailPage />} />
                <Route path="/boards" element={<BoardListPage />} />
            </Routes>
        </Router>
    );
}
export default App;