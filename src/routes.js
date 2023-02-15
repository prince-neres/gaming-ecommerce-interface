import DefaultPage from "components/DefaultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<div>home</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
