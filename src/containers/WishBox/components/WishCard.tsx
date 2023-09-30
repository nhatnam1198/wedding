import { Wish } from 'api';

export default function WishCard(props: Wish) {
  const { createdBy, content } = props;

  return (
    <div className="p-6 rounded-md w-11/12 lg:w-[600px] h-fit bg-[#d8c393] text-[#6e5435] grid gap-4">
      {content}
      <div className="bg-[#826542] rounded w-fit w-max-4/5 h-fit px-2 text-white">
        {createdBy}
      </div>
    </div>
  );
}
