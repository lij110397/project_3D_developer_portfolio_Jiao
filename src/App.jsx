import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Home';
import Project from './Project'
import { projectDetails } from './constants/project';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project projectDetails={projectDetails}/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
