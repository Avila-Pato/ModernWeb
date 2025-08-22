import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Listing from "./pages/Listing"
import Footer from "./components/Footer"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import PropertyDetails from "./pages/PropertyDetails"
import MyBookings from "./pages/MyBookings"
import AgencyReg from "./components/AgencyReg"

function App() {

  return (
    <main>
      <Header />
      <AgencyReg />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:id" element={<PropertyDetails/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
