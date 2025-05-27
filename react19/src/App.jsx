//let guest = 0;//we should not pass like this it wiill show unexpected result.
// Instead we should as a prop.

function App() {
  return (
    <>
      <h1>Keeping Components Pure</h1>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <Cup guest={4} />
      <Cup guest={5} />
    </>
  );
}
export default App;

const Cup = ({ guest }) => {
  //  guest = guest + 1;
  return (
    <h4>
      We have {guest} number of guests And we have to make {guest} of coffee.
    </h4>
  );
};
