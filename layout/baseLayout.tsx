import Navbar from "../components/navbar";

export function BaseLayout({ children }) {
  return (
    <div className="w-100 h-100">
      <Navbar />
          <main className="w-100 h-100">{children}</main>
          <Footer/>
    </div>
  );
}
