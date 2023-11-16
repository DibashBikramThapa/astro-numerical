export default function navbar() {
    return (
        <div className="flex items-center gap-3 justify-center astro-bg min-h-[14rem]">
            <img className="h-40 w-40" src={'/images/astro-logo.png'}/>
            <div>
                <h3>AstroNumeral</h3>
                <p className="grid justify-center">Discover Your Cosmic Code, Illuminate Your Path.</p>
            </div>
        </div>
    )
}
