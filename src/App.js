import router from "Router";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
