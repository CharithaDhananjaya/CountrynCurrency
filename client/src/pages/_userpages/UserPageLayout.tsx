import { Outlet, Navigate } from "react-router-dom";

const userPageLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};

export default userPageLayout;
