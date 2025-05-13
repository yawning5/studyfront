import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemberListPage from './pages/MemberListPage';
import BoardListPage from './pages/BoardListPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MemberListPage />} />
                <Route path="/boards" element={<BoardListPage />} />
            </Routes>
        </Router>
    );
}
export default App;