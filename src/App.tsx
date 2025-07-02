import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";
import { CarouselDemo } from "@/components/carrousselDemo"; // o componente que monta os slides

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center gap-6">
        <CarouselDemo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
