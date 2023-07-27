import { Review } from "./components";
import reviews from "./constants";

const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review reviews={reviews} />
      </section>
    </main>
  );
};

export default App;
