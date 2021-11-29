import AppRouter from "./routers/AppRouter";
import AuthProvider from "./auth/AuthProvider";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;