function PersonCard({ name, age, occupation }) {
  console.log(name);
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </>
  );
}
export default PersonCard;
