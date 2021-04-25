import SideBar from "./component/sidebar/SideBar";
import Header from "./component/header/Header";
import RealTors from "./component/realtors/RealTors";
import Features from "./component/features/Features";
import Stories from "./component/stories/Stories";
import Homes from "./component/homes/Homes";
import Galleries from "./component/galleries/Galleries";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <RealTors />
      <Features />
      <Stories />
      <Homes />
      <Galleries />
      <Footer />
    </div>
  );
};

export default App;
