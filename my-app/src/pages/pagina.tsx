import "@/app/globals.css";

import DinamicPage from "@/components/dinamic-page/DinamicPage";

export default function Page() {
    return (
        <DinamicPage
            headerTitle="Minha Página"
            headerSubtitle="Estou na pasta pages"
        >
            <h2 className="font-black">
                Página
            </h2>
            <p className="text-lg">
                Esta página está sendo construída no diretório pages
            </p>
        </DinamicPage>
    );
}