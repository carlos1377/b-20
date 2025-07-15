import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";
import { NewsImages } from "@/components/carrousselDemo";
import { NumbersPresentation } from "./components/numbers-presentation";
import { JournalCards } from "./components/journal-cards";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <div className="flex flex-col bg-background text-foreground gap-10">
      <Header />
      <section className="container mx-auto flex flex-col gap-18 px-4">
        <NewsImages />
        <NumbersPresentation />
        <JournalCards />
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 p-4 md:h-24 mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight max-w-[300px] text-center md:text-left hover:underline cursor-pointer">
            Conheça nossas câmaras técnicas
          </h2>

          <Separator orientation="horizontal" className="md:hidden w-20" />
          <Separator orientation="vertical" className="hidden md:block" />

          <h2 className="text-2xl md:text-4xl font-bold text-helper-green leading-tight max-w-[300px] text-center md:text-left hover:underline cursor-pointer">
            MASTERPLAN
          </h2>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
