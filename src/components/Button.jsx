function Button({ onClick, text }) {
  return (
    <>
      <Button onClick={onClick}>{text}</Button>;
    </>
  );
}

export default Button;
