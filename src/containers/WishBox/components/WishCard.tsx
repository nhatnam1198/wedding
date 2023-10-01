import { Wish } from 'api';
import { useSlideInOnScroll } from 'hooks/useAppearOnScroll';

export default function WishCard(props: Wish) {
  const { createdBy, content } = props;

  useSlideInOnScroll();

  return (
    <div className="p-6 rounded-md w-11/12 lg:w-[600px] h-fit bg-[#d8c393] text-[#6e5435] from-bottom slide-in relative">
      <div className="bg-[#826542] rounded w-fit w-max-4/5 h-fit px-3 py-0.5 text-white absolute -translate-y-9 z-1">
        {`@${createdBy}`}
      </div>
      {content}
    </div>
  );
}
