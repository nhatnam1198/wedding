import Album from 'containers/Album';
import FullscreenPicture from './containers/FullscreenPicture';
import GroomAndBride from 'containers/GroomBride';
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
      <GroomAndBride />
      <Invitation />
      <Album />
      <WishBox />
      <Footer />
    </div>
  );
}

export default App;
