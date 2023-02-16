import Header from "./Layout/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
