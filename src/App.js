import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeCarousal from './components/HomeCarousal/HomeCarousal';
import NewsArticles from './components/NewsArticles/NewsArticles';

function App() {
  return (
    <div>
      <Header />
      <main>
        <HomeCarousal />
        <NewsArticles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
