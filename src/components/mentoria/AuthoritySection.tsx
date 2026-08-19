import Image from "next/image";

export default function AuthoritySection() {
  return (
    <section className="mnt-section">
      <div className="mnt-authority">
        <div className="mnt-authority-image">
          <Image
            src="/images/grid/dani-editorial.png"
            alt="Daniele Mioranza, modelo profissional"
            fill
            sizes="(max-width: 767px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </div>

        <div>
          <span className="mnt-eyebrow">Sobre a consultora</span>
          <h2 className="mnt-h2">Quem já viveu esse mundo por dentro</h2>

          <p className="mnt-lede">
            Nascida no Paraná, Daniele deu os primeiros passos da carreira em São Paulo e desde
            então já passou por marcas como Melissa, Santa Lolla, Lilly Sarti, Reinaldo Lourenço,
            Chevrolet, Motorola, Converse, McDonald&apos;s e Johnnie Walker, além de editoriais
            nas revistas Vogue, ELLE e FFW.
          </p>
          <p className="mnt-lede">
            Hoje ela presta uma consultoria particular e exclusiva pra quem tem o sonho de entrar
            no mundo da moda mas não sabe por onde começar. Com diferentes modalidades de
            consultoria, Daniele destrincha o que fazer certo na hora de se inserir nesse mercado,
            trazendo um olhar pessoal sobre a própria carreira e a visão de quem já viveu por
            dentro desse universo que tanta gente quer alcançar.
          </p>
          <p className="mnt-lede">
            Do mundo das passarelas ao estúdio de fotografia, das revistas de moda aos sets de
            publicidade.
          </p>
        </div>
      </div>
    </section>
  );
}
