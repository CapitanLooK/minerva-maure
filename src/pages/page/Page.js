import { NavBar } from '../../components/navbar/NavBar'

export const Page = ({children}) =>{
    return(
        <main>
            <NavBar />
            <section>{children}</section>
        </main>
    )
}