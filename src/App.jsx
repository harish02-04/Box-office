import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Star from './pages/star';
import MainLayout from './components/main';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/star" element={<Star />}></Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>

        {/*<Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Tos />} />
        </Route>
  <Route path="contact-us" element={<Contact />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
