
import { Footer } from "./containers/Footer"
import { NavBar } from "./containers/NavBar";
import { Home } from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import { Receiver } from "./screens/Receiver";
import { Share } from "./screens/Share";
import { Send } from "./screens/Send";
import { Go } from "./screens/Go";
import { Accept } from "./screens/Accept";

function App() {


  return (
    <>
      <NavBar items={[{ href: "/", title: "UPShare" }, { href: "/", title: "Learn More" }]} />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accept" element={<Accept />} />
          <Route path="/recevie/:id" element={<Receiver />} />
          <Route path="/share" element={<Share />} />
          <Route path="/send" element={<Send />} />
          <Route path="/go" element={<Go />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {/* <Footer  /> */}
    </>
  )
}

export default App
