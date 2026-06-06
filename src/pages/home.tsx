import About from "../components/About";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {

    return (
        <>
            <Header isHidden={false} />
            <Benefits />
            <About />
            <Footer isHidden={false} />
        </>
    )
};
