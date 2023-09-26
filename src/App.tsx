import AlbumSection from 'containers/Album';
import FullscreenPicture from './containers/FullscreenPicture';
import GroomAndBrideSection from 'containers/GroomBride';
import Footer from 'containers/Footer';

function App() {
  return (
    <div className="App">
      <FullscreenPicture />
      <GroomAndBrideSection />
      <AlbumSection />
      <div className="h-80" />
      <Footer />
    </div>
  );
}

export default App;
