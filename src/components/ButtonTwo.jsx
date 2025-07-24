function ButtonTwo({ onClick, name }) {
  return (
    <>
      <button onClick={onClick}>{name}</button>;
    </>
  );
}

export default ButtonTwo;
