import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";
import { CarouselDemo } from "@/components/carrousselDemo";
import { NumbersPresentation } from "./components/numbers-presentation";
import { JournalCards } from "./components/journal-cards";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <Header />
      <section className="flex min-h-screen flex-col gap-10 my-4">
        <div className="flex items-center justify-center w-full gap-5 p-5">
          <h2 className="text-4xl font-bold text-primary leading-12 text-left max-w-[300px]">
            Pensar e agir para o{" "}
            <span className="text-emerald-400">futuro</span> de Bento Gonçalves
          </h2>
          <img
            src={"/images/globalization.svg"}
            alt="Globalização"
            className="h-200 w-200 object-cover"
          />
        </div>
        <NumbersPresentation />
        <JournalCards />
        <div className="flex items-center justify-center gap-20">
          <CarouselDemo />
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold text-primary leading-12  max-w-[300px] hover:underline cursor-pointer">
              Conheça nossas câmaras técnicas
            </h2>
            <Separator />
            <h2 className="text-4xl font-bold text-helper-green leading-12  max-w-[300px] hover:underline cursor-pointer">
              MASTERPLAN
            </h2>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
