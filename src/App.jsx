import { ToastContainer } from "react-toastify";
import Route from "./router/Route";
import Loading from "./components/Loading";
import { useAuth } from "./hooks/use-auth";

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return <Loading />;
  }
  return (
    <>
      <Route />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
