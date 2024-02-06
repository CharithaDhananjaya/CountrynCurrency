import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import ProtectedView from "../ProtectedView";

const userPageLayout = () => {
  const { user } = useAuth();

  return (
    <>
      {!user ? (
        // <Navigate to="/" />
        <ProtectedView />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};

export default userPageLayout;
