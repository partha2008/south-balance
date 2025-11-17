import First from "./components/First";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <main className="grow">
        <Layout>
          <First />
        </Layout>
      </main>
    </div>
  );
}

export default App;
