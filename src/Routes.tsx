import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { RightController } from './components/RightControll';
import { LeftController } from './components/LeftControll';
export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/right" element={<RightController/>} />
                <Route path="/left" element={<LeftController/>} />
            </Routes>
        </Router>

    )
}
