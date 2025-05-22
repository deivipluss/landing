export interface ProposalSlideType {
  title: string;
  content: string;
  bg?: string;
}

export const proposalSlides: ProposalSlideType[] = [
  { title: "Bienvenido", content: "Esta es mi landing personal.", bg: "bg-blue-500" },
  { title: "Sobre mí", content: "Soy desarrollador web con experiencia en React y Node.js.", bg: "bg-green-500" },
  { title: "Contacto", content: "Puedes contactarme en miemail@ejemplo.com", bg: "bg-purple-500" },
];
