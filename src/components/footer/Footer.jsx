import '../../index.css'

export const Footer = () => {
    return (
        <div className="bg-black w-full p-10">
            <div>
                <p className="text-white capitalize">seguinos en las redes</p>
                <a href="https://www.facebook.com/minerva.lenceria.artesanal.arg/" target="_blank" rel="noreferrer"><i className="text-white fab fa-facebook-square p-5"></i></a>
                <a href="https://www.instagram.com/minerva.lingerie.arg/" target="_blank" rel="noreferrer"><i className="text-white fab fa-instagram p-5"></i></a>
            </div>
            <p className="text-white text-center capitalize">desarrollado por <a href="https://alejandromaure.netlify.app" target="_blank" rel="noreferrer" className="capitalize text-white">alejandro maure</a></p>
        </div>
    )
}