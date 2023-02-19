import Button from "../components/Button";
import MovieType from "../components/types"
export function ButtonFilter(props: any) {
  const handleComedyFilter = () => {
    props.handleSetGenres([props.genre])
  };
  return <Button onClick={handleComedyFilter}>{props.genre.name}</Button>;
}
