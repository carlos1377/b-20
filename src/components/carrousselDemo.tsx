import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  const images = [
    "https://i.pinimg.com/originals/44/2d/3a/442d3a1247a6d49406a57f4275c1e7c7.jpg",
    "https://wallpapers.com/images/hd/obito-uchiha-anime-4k-hd-wallpaper-azjpr5uz8lhc7yyf.jpg",
  ]

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <img
              src={src}
              alt={`Imagem ${index + 1}`}
              className="w-full aspect-square object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
