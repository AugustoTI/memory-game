import { Card } from '../../components/Card';

const myAction = (id: string) => {
  console.log(id);
};

function App() {
  return (
    <>
      <Card back="🦊" flipped id="1" actionClickCard={myAction} />
      <Card back="🦊" flipped id="2" actionClickCard={myAction} />
      <Card back="🦊" flipped id="3" actionClickCard={myAction} />
      <Card back="🦊" flipped id="4" actionClickCard={myAction} />
    </>
  );
}

export default App;
