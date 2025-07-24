import PersonCard from "./components/PersonCard.jsx";
import Button from "./components/Button.jsx";
import ButtonTwo from "./components/ButtonTwo.jsx";
function App() {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <>
      <PersonCard name="Tori" age="38" occupation="farmer" />
      <Button text="clickMe" onClick={handleClick} />
      <ButtonTwo name="Sarah" onClick={handleClick} />
    </>
  );
}

export default App;
