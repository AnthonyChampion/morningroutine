import TaskList from "./TaskList";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <>
      <section className="h-screen w-screen bg-black flex flex-col items-center">
        <h1 className="w-full text-center pt-6 text-yellow-500 font-bold text-xl">My Morning Routine</h1>
        <Weather />
        <TaskList />
        <Footer />
      </section>
    </>
  );
}

export default App;
