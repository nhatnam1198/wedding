import Card from './Card';

export default function GroomAndBrideSection() {
  return (
    <div className="section">
      <h1 className="section-title">Groom and Bride</h1>
      <p>
        In recent years, an alligator is an anthony’s event. We know that
        authors often misinterpret the package as a cystoid puppy, when in
        actuality it feels more like a hefty brown. The nervy doll reveals
        itself as an endless colony to those who look. ships are licensed
        ashtraies.
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        <Card
          imgUrl="./images/groom.jpeg"
          title="Ngọc Hoàng"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non eaque ex quo iste totam ducimus commodi quibusdam porro vero reiciendis excepturi, repellendus reprehenderit ab ipsum nisi quia veniam officiis?"
        />

        <Card
          imgUrl="./images/bride.jpeg"
          title="Tú Trinh"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non eaque ex quo iste totam ducimus commodi quibusdam porro vero reiciendis excepturi, repellendus reprehenderit ab ipsum nisi quia veniam officiis?"
        />
      </div>
    </div>
  );
}
