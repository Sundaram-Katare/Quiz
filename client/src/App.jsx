import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddQuiz from './pages/AddQuiz';
import Trivia from './pages/Trivia';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/addQuiz' element={<AddQuiz />} />
        <Route path='/trivia' element={<Trivia />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
