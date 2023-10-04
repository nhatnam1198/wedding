import useViewportWidth from 'hooks/useViewportWidth';
import Card from './Card';
import { TIMELINE_CARDS } from './constants';
import './styles.css';
import LazyBackgroundImage from 'components/LazyBackgroundImage';

export default function GroomAndBride() {
  const windowWidth = useViewportWidth();

  return (
    <LazyBackgroundImage
      src="/images/background-top.png"
      className="bg-contain bg-top bg-no-repeat relative"
    >
      <div className="section relative h-fit">
        <h1 className="section-title fade-in">Groom and Bride</h1>
        <div className="section-description fade-in">
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

        <div
          className={`flex flex-col items-center gap-8 ${
            windowWidth > 900 && 'frame'
          }`}
        >
          {TIMELINE_CARDS.map((card, index) => (
            <Card
              {...card}
              key={card.title}
              direction="horizontal"
              imagePosition={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
          <h3 className="text-center">The story is to be continued...</h3>
        </div>
      </div>
    </LazyBackgroundImage>
  );
}
