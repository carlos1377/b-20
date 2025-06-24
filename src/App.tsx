import { Button } from "@/components/ui/button";
import { Header } from "./components/nav/header";
import { Footer } from "./components/nav/footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
