import useViewportWidth from 'hooks/useViewportWidth';
import Card from './Card';
import { TIMELINE_CARDS } from './constants';
import './styles.css';
import LazyBackgroundImage from 'components/LazyBackgroundImage';
import { HeartFilled } from '@ant-design/icons';
import CircleCard from './CircleCard';

export default function GroomAndBride() {
  const windowWidth = useViewportWidth();

  return (
    <LazyBackgroundImage
      src="/images/background-top.png"
      className="bg-contain bg-top bg-no-repeat relative"
    >
      <div className="section relative h-fit">
        <h1 className="section-title fade-in">Hành trình yêu</h1>
        <h2>2020-2023</h2>
        <div className="section-description fade-in">
          Nàng là một cô gái vui vẻ, hoạt bát còn chàng là một chàng trai lầm lì
          và gai góc. Dường như cả hai có hai thế giới hoàn toàn khác biệt. Tuy
          vậy nàng và chàng đã được gặp nhau giữa lòng Sài Gòn vào cái mùa đẹp
          nhất trong năm. Và dưới bầu trời xanh ngát, họ đã cùng nhau tạo nên
          một câu chuyện tình yêu đầy màu sắc.
        </div>
        <div className="flex flex-col items-center lg:flex-row">
          <CircleCard
            imgUrl="./images/groom.jpeg"
            title="Ngọc Hoàng"
            subtitle="Chú rể"
            imgPosition="right"
          />
          <div className="circle flex justify-center items-center">
            <HeartFilled className="text-[#826542]" />
          </div>
          <CircleCard
            imgUrl="./images/bride.jpeg"
            subtitle="Cô dâu"
            title="Tú Trinh"
            imgPosition="left"
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
