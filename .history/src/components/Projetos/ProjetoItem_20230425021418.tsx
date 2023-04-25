interface ProjetoProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function ProjetoItem({ title, type, slug, img }: ProjetoProps) {
  return (
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>{type}</h2>

          <img src={slug} alt="imagemm" />
        </div>
      </section>
  );
}
