import Footer from './components/Footer';
import Header from './components/Header';
import BottomSection from './section/BottomSection';
import MiddleSection from './section/MiddleSection';
import TopSection from './section/TopSection';
function App() {
  return (
    <div className='p-5'>
      <Header />
      <TopSection />
      <MiddleSection />
      <BottomSection />
      <Footer />
    </div>
  );
}

export default App;
