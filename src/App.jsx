import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { ModalProvider } from "./lib/modalContext";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({
    Contact: undefined,
    Team: { title: undefined, description: undefined, servants: undefined },
    Testimonials: undefined,
    Header: undefined,
    Features: undefined,
    About: undefined,
    Services: { title: undefined, description: undefined, data: undefined },
    Gallery: { title: undefined, description: undefined, data: undefined },
  });
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div id={"app-modal"}>
      <ModalProvider>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        {/*<Services data={landingPageData.Services} />*/}
        <Gallery
          data={landingPageData.Services.data}
          title={landingPageData.Services.title}
          description={landingPageData.Services.description}
          id={"services"}
        />
        <Gallery
          data={landingPageData.Gallery.data}
          title={landingPageData.Gallery.title}
          description={landingPageData.Gallery.description}
          id={"portfolio"}
        />
        <Testimonials data={landingPageData.Testimonials} />
        <Team
          data={landingPageData.Team.servants}
          title={landingPageData.Team.title}
          description={landingPageData.Team.description}
        />
        <Contact data={landingPageData.Contact} />
      </ModalProvider>
    </div>
  );
};

export default App;
