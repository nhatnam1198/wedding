import LazyBackgroundImage from 'components/LazyBackgroundImage';
import InvitationCard from './InvitationCard';
import { INVITATION_INFO } from './constants';

export default function Invitation() {
  return (
    <LazyBackgroundImage
      src="/images/background-bottom.png"
      className="bg-contain bg-bottom bg-no-repeat relative pb-52 w-screen"
    >
      <div className="section">
        {INVITATION_INFO.map((info) => (
          <InvitationCard {...info} key={info.title} />
        ))}
      </div>
    </LazyBackgroundImage>
  );
}
