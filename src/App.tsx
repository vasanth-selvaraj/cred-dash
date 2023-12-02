import { DashboardPage, MainLayout, CompanyDetails } from "./pages/PagesExport";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          }
        />
        <Route
          path="/comapany-details/:id"
          element={
            <MainLayout>
              <CompanyDetails />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
