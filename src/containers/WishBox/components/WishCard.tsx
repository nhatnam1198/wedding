import { Wish } from 'api';
import { useSlideInOnScroll } from 'hooks/useAppearOnScroll';

export default function WishCard(props: Wish) {
  const { createdBy, content } = props;

  useSlideInOnScroll();

  return (
    <div className="p-6 rounded-md w-11/12 lg:w-[600px] h-fit bg-[#d8c393] text-[#6e5435] grid gap-4 from-bottom slide-in">
      {content}
      <div className="bg-[#826542] rounded w-fit w-max-4/5 h-fit px-2 text-white">
        {createdBy}
      </div>
    </div>
  );
}
