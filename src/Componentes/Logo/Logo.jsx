import CaminhoImgLogo from "../img/logo-horizontal.png"

function Logo(){
    return(
        <>
            <a className="block h-22 my-2 ml-4" href="/">
                <img
                    src= {CaminhoImgLogo}
                    alt="Logo"
                    className="w-full h-full object-contain"
                />
            </a>
        </>
    )
}

export default Logo