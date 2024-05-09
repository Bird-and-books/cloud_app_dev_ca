
import Form from "../components/NewArticleForm";

function Home() {
  return (
    <div className="home-page" data-testid='homePage'>
      <div className="screen1-bg">
      </div>
      <div className="discount-section">
          <Form />
      </div>
    </div>
  );
}
export default Home;
