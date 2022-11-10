import Favicon from '../components/Favicon'
import '../styles/globals.css'

function MyApp({ children }) {
    return <html>
        <head>
            <Favicon />
        </head>
        <body>
            {children}
        </body>
    </html>
}

export default MyApp
