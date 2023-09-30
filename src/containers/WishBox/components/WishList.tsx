import { Wish } from 'api';
import WishCard from './WishCard';

export default function WishList({ wishes }: { wishes: Wish[] }) {
  return (
    <div className="flex flex-col items-center py-20">
      <img src="/images/floral-ring.png" className="w-[270px]" />
      <h1 className="section-title -translate-y-[210px]">Guestbook</h1>
      {wishes && wishes?.length > 0
        ? wishes?.map((wish) => <WishCard key={wish.content} {...wish} />)
        : 'It looks empty. Send the bridal couple your best wishes!'}
    </div>
  );
}
