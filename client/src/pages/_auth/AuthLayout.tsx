import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="flex flex-row w-screen h-screen">
            <section className="flex flex-col items-center justify-center flex-1 w-screen px-10 md:w-1/2 md:px-20 md:py-10 bg-amber-400 md:bg-white">
              <div className="flex flex-wrap items-end justify-center px-4 space-x-2 md:hidden">
                <span className="text-2xl font-thin text-center text-black sm:text-3xl">
                  Country
                </span>
                <span className="text-lg italic font-thin text-center text-white sm:text-xl">
                  n'
                </span>
                <span className="text-2xl font-bold text-center text-white sm:text-3xl">
                  Currency
                </span>
              </div>
              <Outlet />
            </section>
            <div className="relative flex-col items-center justify-center flex-1 hidden object-cover w-1/2 h-screen px-10 py-10 bg-no-repeat bg-amber-400 md:flex">
              <div className="px-4 space-x-2 ">
                <span className="text-5xl font-thin text-center text-black">
                  Country
                </span>
                <span className="text-4xl italic font-thin text-center text-white">
                  n'
                </span>
                <span className="text-5xl font-bold text-center text-white">
                  Currency
                </span>
              </div>
              <div className="absolute bottom-0 flex items-center p-2 text-sm font-light text-center text-black md:pb-4">
                &copy; 2024 | Assignment of Anyfin by Charitha Dhananjaya
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AuthLayout;
