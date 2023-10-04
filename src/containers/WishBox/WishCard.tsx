import { Wish } from 'api';
import { useSlideInOnScroll } from 'hooks/useAppearOnScroll';

export default function WishCard(props: Wish) {
  const { createdBy, content } = props;

  useSlideInOnScroll();

  return (
    <div className="p-6 rounded-md max-w-[600px] w-11/12 h-fit bg-[#d8c393] text-[#6e5435] from-bottom slide-in relative cursor-pointer hover:scale-105">
      <div className="bg-[#826542] rounded w-fit w-max-4/5 h-fit px-3 py-0.5 text-white absolute -translate-y-9 z-1">
        {`@${createdBy}`}
      </div>
      {content}
    </div>
  );
}
