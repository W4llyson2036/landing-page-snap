import '../style/main.css'

export default function Main() {
    return (
        <main className="main">
            <div className="main-side-left">
                <h1>Make remote work</h1>

                <p className="paragraph-uc">Get your team in sync, no matter your location. Streamline processes, 
                create team rituals, and watch productivity soar.</p>

                <button className="main-button">Learn more</button>

                <div className='main-wrap-icons'>
                    <svg className="clients-icon">
                        <use xlinkHref="svg/clients.svg#client-databiz"></use>
                    </svg>

                    <svg className="clients-icon">
                        <use xlinkHref="svg/clients.svg#client-audiophile"></use>
                    </svg>

                    <svg className="clients-icon">
                        <use xlinkHref="svg/clients.svg#client-meet"></use>
                    </svg>
                    
                    <svg className="clients-icon">
                        <use xlinkHref="svg/clients.svg#client-maker"></use>
                    </svg>
                </div>
            </div>

            <div className="main-side-rigth">
                <img 
                    src="images/image-hero-desktop.png" 
                    alt="image-hero" 
                    className="image-hero" 
                    data-image-hero-desktop="visible"
                />
                
                <img 
                    src="images/image-hero-mobile.png" 
                    alt="image-hero" 
                    className="image-hero"
                    data-image-hero-mobile="visible"
                />
            </div>
        </main>
    )
}                                             