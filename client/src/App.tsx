import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./hooks/useAuth";

import AuthLayout from "./pages/_auth/AuthLayout";
import SignInForm from "./pages/_auth/forms/SignInPage";
import SignUpForm from "./pages/_auth/forms/SignUpPage";

import UserPageLayout from "./pages/_userpages/UserPageLayout";
import UserPage from "./pages/_userpages/pages/UserPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route element={<AuthLayout />}>
              <Route index element={<SignInForm />} />
              <Route path="/sign-up" element={<SignUpForm />} />
            </Route>
            {/* Private Routes */}
            <Route element={<UserPageLayout />}>
              <Route path="/user" element={<UserPage />}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
