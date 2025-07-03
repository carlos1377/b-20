import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  const images = [
    {
      src: "/images/carrousel-1.png",
      caption:
        "Bento+20 visita obras do novo hospital municipal e estrutura da UPA 24h",
    },
    {
      src: "/images/carrousel-2.png",
      caption:
        "Bento+20 visita escolas municipais e reforça compromisso com a qualidade da educação básica",
    },
  ];

  return (
    <Carousel className="relative w-full max-w-3xl">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="relative">
            <img
              src={image.src}
              alt={`Imagem ${index + 1}`}
              className="w-200 h-140 object-cover rounded-2xl"
            />

            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center text-sm py-2 rounded-b-2xl">
              {image.caption}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
