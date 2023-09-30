import AlbumSection from 'containers/Album';
import FullscreenPicture from './containers/FullscreenPicture';
import GroomAndBrideSection from 'containers/GroomBride';
import Footer from 'containers/Footer';
import WishBox from 'containers/WishBox';

function App() {
  return (
    <div className="App">
      <FullscreenPicture />
      <GroomAndBrideSection />
      <AlbumSection />
      <WishBox />
      <Footer />
    </div>
  );
}

export default App;
