import "@/assets/styles/global.styles.css"
import Navbar from "@/components/Navbar"
const layout = ({children}) => {
  return (
    <html>
        <body>
            <Navbar/>
            <main>{children}</main>
        </body>
    </html>
  )
}

export default layout