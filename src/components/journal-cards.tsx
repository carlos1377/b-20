export function JournalCards() {
  return (
    <div className="flex flex-col items-center justify-center p-5 gap-5">
      <h2 className="justify-self-start text-4xl font-bold text-primary">
        Últimos jornais publicados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={`/jornal/jornal${index + 1}.png`}
              alt={`Jornal ${index + 1}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-muted-foreground text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
