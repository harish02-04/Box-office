import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Star from './pages/star';
import ShowId from './pages/showId';
import MainLayout from './components/main';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Globaltheme } from './theme';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Globaltheme>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/star" element={<Star />}></Route>
            </Route>
            <Route path="/show/:showId" element={<ShowId />}></Route>
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </Globaltheme>
    </QueryClientProvider>
  );
}

export default App;
