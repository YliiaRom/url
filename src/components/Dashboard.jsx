import { use } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "./App";

export default function Dashboard() {
  const { isLoggedIn } = useUser();
  if (!isLoggedIn) {
    return <Navigate to="\home" replace />;
  }
  return (
    <>
      <h1>Ласкаво просимо в особистий кабінет</h1>;
    </>
  );
}
