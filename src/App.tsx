import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardListPage from './pages/BoardListPage';
import BoardDetailPage from './pages/BoardDetailPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/boards" element={<BoardListPage />} />
                <Route path="/boards/:id" element={<BoardDetailPage />} />
            </Routes>
        </Router>
    );
}
export default App;