import AlbumSection from 'containers/Album';
import FullscreenPicture from './containers/FullscreenPicture';
import GroomAndBrideSection from 'containers/GroomBride';
import Footer from 'containers/Footer';
import WishBox from 'containers/WishBox';
import useFadeInScroll, { useSlideInOnScroll } from 'hooks/useAppearOnScroll';
import Invitation from 'containers/Invitation';

function App() {
  useSlideInOnScroll();
  useFadeInScroll();

  return (
    <div className="App">
      <FullscreenPicture />
      <GroomAndBrideSection />
      <Invitation />
      {/* <AlbumSection /> */}
      <WishBox />
      <Footer />
    </div>
  );
}

export default App;
