import { TextScramble } from "./ui/text-scramble";

export function NumbersPresentation() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center p-5 gap-10 md:gap-20 text-2xl md:text-4xl bg-accent mx-auto rounded-lg">
      <div className="flex flex-col items-center text-center">
        <TextScramble className="font-bold uppercase text-primary" speed={400}>
          12
        </TextScramble>
        <span className="text-base md:text-lg text-foreground/80 font-medium">
          Câmaras Técnicas
        </span>
      </div>
      <div className="flex flex-col items-center text-center">
        <TextScramble
          className="font-bold uppercase text-helper-green"
          speed={400}
        >
          29
        </TextScramble>
        <span className="text-base md:text-lg text-foreground/80 font-medium">
          Entidades
        </span>
      </div>
      <div className="flex flex-col items-center text-center">
        <TextScramble className="font-bold uppercase text-primary" speed={400}>
          90
        </TextScramble>
        <span className="text-base md:text-lg text-foreground/80 font-medium">
          Diretrizes e Projetos de Ações
        </span>
      </div>
      <div className="flex flex-col items-center text-center">
        <TextScramble
          className="font-bold uppercase text-helper-green"
          speed={400}
        >
          1
        </TextScramble>
        <span className="text-base md:text-lg text-foreground/80 font-medium">
          Bento Gonçalves para desenvolver!
        </span>
      </div>
    </div>
  );
}
