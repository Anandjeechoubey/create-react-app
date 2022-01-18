const App = () => {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center text-white text-2xl bg-slate-800">
        <p>
          React + <code>TailwindCSS</code>
        </p>
        <a
          className="text-cyan-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="text-cyan-500"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tailwind
        </a>
      </header>
    </div>
  );
};

export default App;
