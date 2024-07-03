import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Content from "@/components/Content";

export default function Page() {
    return (
        <section className={`
            flex flex-col gap-2 
            p-2 h-screen
        `}>
            <Header
                title="Minha aplicação"
                subtitle="Melhor aplicação da web!"
            />
            <Content />
            <Footer />
        </section>
    )
}