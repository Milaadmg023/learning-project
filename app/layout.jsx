import "@/assets/styles/global.styles.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
const layout = ({children}) => {
  return (
    <html>
        <body>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </body>
    </html>
  )
}

export default layout