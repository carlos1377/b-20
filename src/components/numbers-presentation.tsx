import { TextScramble } from "./ui/text-scramble";

export function NumbersPresentation() {
  return (
    <div className="flex items-center justify-center p-5 gap-60 text-4xl">
      <div className="flex flex-col items-center">
        <TextScramble className="font-bold uppercase text-primary" speed={400}>
          12
        </TextScramble>
        <span className="text-xl">Câmaras Técnicas</span>
      </div>
      <div className="flex flex-col items-center">
        <TextScramble
          className="font-bold uppercase text-helper-green"
          speed={400}
        >
          29
        </TextScramble>
        <span className="text-xl">Entidades</span>
      </div>
      <div className="flex flex-col items-center">
        <TextScramble className="font-bold uppercase text-primary" speed={400}>
          90
        </TextScramble>
        <span className="text-xl">Diretrizes e Projetos de Ações</span>
      </div>
      <div className="flex flex-col items-center">
        <TextScramble
          className="font-bold uppercase text-helper-green"
          speed={400}
        >
          1
        </TextScramble>
        <span className="text-xl">Bento Gonçalves para desenvolver!</span>
      </div>
    </div>
  );
}
