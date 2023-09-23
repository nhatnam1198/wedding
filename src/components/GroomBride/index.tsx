import Card from './Card';
import './styles.css';

export default function GroomAndBrideSection() {
  return (
    <div className="section relative h-fit">
      <h1 className="section-title">Groom and Bride</h1>
      <div className="px-4 lg:px-28">
        In recent years, an alligator is an anthony’s event. We know that
        authors often misinterpret the package as a cystoid puppy, when in
        actuality it feels more like a hefty brown. The nervy doll reveals
        itself as an endless colony to those who look. ships are licensed
        ashtraies.
      </div>
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
      <div className="flex flex-col items-center gap-8">
        <Card
          imgUrl="./images/timeline-1.jpeg"
          title="How we first met"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non eaque ex quo iste totam ducimus commodi quibusdam porro vero reiciendis excepturi, repellendus reprehenderit ab ipsum nisi quia veniam officiis?"
          direction="horizontal"
        />
        <Card
          imgUrl="./images/timeline-2.jpeg"
          title="We fell in love"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non eaque ex quo iste totam ducimus commodi quibusdam porro vero reiciendis excepturi, repellendus reprehenderit ab ipsum nisi quia veniam officiis?"
          direction="horizontal"
        />
        <Card
          imgUrl="./images/timeline-3.jpeg"
          title="We are getting married!"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non eaque ex quo iste totam ducimus commodi quibusdam porro vero reiciendis excepturi, repellendus reprehenderit ab ipsum nisi quia veniam officiis?"
          direction="horizontal"
        />
        <h3 className="text-center">The story is to be continued...</h3>
      </div>
    </div>
  );
}
