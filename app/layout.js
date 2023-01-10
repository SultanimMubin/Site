import Favicon from '../components/Favicon'
import '../styles/globals.css'

function MyApp({ children }) {
    return <html>
        <head>
            <Favicon />
            <title>Sultanimmubin</title>
            <meta name="description" content="Observation, thought, impartiality" />
        </head>
        <body>
            {children}
            <footer>
                footer
            </footer>
        </body>
    </html>
}

export default MyApp
