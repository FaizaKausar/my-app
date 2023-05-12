
export default function Home({params}:{params:{foodie:any}}) {
    const {foodie}=params;
  return (
  <h1> I love  {foodie} </h1>
  );
}