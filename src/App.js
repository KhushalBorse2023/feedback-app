import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from './Component/FeedbackList'
import FeedbackStats from './Component/FeedbackStats'
import AboutIconLink from './Component/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import Header from './Component/Header'
import FeedbackForm from './Component/FeedbackForm'
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
