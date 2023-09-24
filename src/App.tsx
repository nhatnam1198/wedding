import AlbumSection from 'components/Album';
import FullscreenPicture from './components/FullscreenPicture';
import GroomAndBrideSection from 'components/GroomBride';
import Footer from 'components/Footer';

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
