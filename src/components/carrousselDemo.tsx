import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  const images = [
    "/images/imagem1.jpg",
    "/images/imagem2.jpg",
  ];

  return (
    <div className="w-full" style={{ marginTop: "-320px" }}> {/* SUBSTITUA "80px" PELA ALTURA EXATA DO SEU HEADER */}
      <Carousel>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <img
                src={src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-[600px] object-cover" // Altura fixa de 300px (ajuste conforme necessário)
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}