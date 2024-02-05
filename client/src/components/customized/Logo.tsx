function Logo() {
  return (
    <>
      {/* Logo Element - Text */}
      <div className="flex-wrap items-center justify-center hidden px-4 space-x-2 underline md:flex underline-offset-4 ">
        <span className="text-xl font-thin text-center text-black ">
          Country
        </span>
        <span className="text-lg italic font-thin text-center text-black">
          n'
        </span>
        <span className="text-xl font-bold text-center text-black">
          Currency
        </span>
      </div>
    </>
  );
}

export default Logo;
