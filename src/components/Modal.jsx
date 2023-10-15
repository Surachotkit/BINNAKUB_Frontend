export default function Modal({ children }) {
  return (
    <>
      {/* black dog */}
      <div className="fixed inset-0 bg-white opacity-70 z-20"></div>
      <div className="fixed inset-0 z-30">
        <div className="flex justify-center items-center min-h-full p-4 ">
          {/* container */}
          <div className="flex flex-col justify-center rounded-lg w-[30rem] h-full py-6 bg-white shadow-2xl border">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
