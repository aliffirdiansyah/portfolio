import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Alif Firdiansyah | Portfolio Website',
  description: 'Personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-fill container my-5" style={{ paddingTop: "70px" }}>
  {children}
</main>

        <Footer />
      </body>
    </html>
  )
}
