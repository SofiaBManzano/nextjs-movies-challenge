import Button from "../components/Button";
import Link from "next/link";



export default function logOut() {
  const handleLogOut = () => {
    localStorage.getItem("token");
    localStorage.removeItem("token");
  };
  return (
    <>
      <Button primary={true}>
        <Link href="/login" onClick={handleLogOut}>
          Sign out
        </Link>
      </Button>
    </>
  );
}
