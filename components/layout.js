import Footer from "./footer";
import Navbar from "./navbar";

export default function layout({children}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
