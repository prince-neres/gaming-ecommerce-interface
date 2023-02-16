import DefaultPage from 'components/DefaultPage';
import Category from 'pages/Category';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path='/categoria/:nameCategory' element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
