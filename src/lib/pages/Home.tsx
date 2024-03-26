import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";

export default function Home() {
    return (
        <>
            <header className="mt-4 text-6xl uppercase">
                <Navbar />
            </header>
            <main className="flex justify-center">
                <div className="w-3/4 mt-4">
                    <Tabs />
                </div>
                <section className="mt-4"></section>
            </main>
        </>
    );
}
