export function NewsImages() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
        Pensar e agir para o <span className="text-emerald-400">futuro</span> de
        Bento Gonçalves
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 p-5">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[600px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-[url(/images/carrousel-1.png)]" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-0 w-full p-3">
            <h3 className="text-white text-base md:text-2xl text-center md:text-left font-bold">
              Bento+20 visita obras do novo hospital municipal e estrutura da
              UPA 24h
            </h3>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/3 gap-5">
          <div className="relative w-full h-[140px] md:h-[290px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-[url(/images/carrousel-2.png)]" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-0 w-full p-3">
              <h3 className="text-white text-base md:text-2xl text-center md:text-left font-bold">
                Bento+20 visita escolas municipais e reforça compromisso com a
                qualidade da educação básica
              </h3>
            </div>
          </div>

          <div className="relative w-full h-[140px] md:h-[290px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-[url(/images/carrousel-3.jpg)]" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-0 w-full p-3">
              <h3 className="text-white text-base md:text-2xl text-center md:text-left font-bold">
                Bento+20 participa do 1º Fórum MetroSerra de Inovação e
                compartilha experiência com gestão colaborativa
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
