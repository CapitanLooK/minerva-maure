import { NavBar } from '../../components/navbar/NavBar'
import { Footer } from '../../components/footer/Footer'

export const Page = ({children}) =>{
    return(
        <main>
            <NavBar />
            <section>{children}</section>
            <Footer />
        </main>
    )
}