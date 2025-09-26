export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away👜</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h1>What do you need for your trip ? </h1>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer>
      <em>👜You will X items on your list, and you alredy packed x(X%)</em>
    </footer>
  );
}
