interface CircleCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  imgPosition: 'left' | 'right';
}

export default function CircleCard(props: CircleCardProps) {
  const { title, imgUrl, subtitle, imgPosition } = props;

  return (
    <div
      className={`flex items-center gap-4 ${
        imgPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className="rounded-full w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="object-cover object-center h-auto w-full"
        />
      </div>
      <div className="text-[#57442c] flex flex-col gap-3 items-center">
        <div className="font-serif lg:text-4xl text-2xl">{title}</div>
        <h3>{`---- ${subtitle} ----`}</h3>
      </div>
    </div>
  );
}
