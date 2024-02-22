import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./alexa.png";
import CortanaImage from "./cortana.png";
import SiriImage from "./siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container"></div>
      <section className="section">
        <div className="columns">
          <div className="column is-2">
            <ProfileCard
              title="Alexa"
              handle="@alexa99"
              image={AlexaImage}
              description="Created by Amazon"
            />
          </div>
          <div className="column is-2">
            <ProfileCard
              title="Cortana"
              handle="@cortana32"
              image={CortanaImage}
              description="Created by Microsoft"
            />
          </div>
          <div className="column is-2">
            <ProfileCard
              title="Siri"
              handle="@siri01"
              image={SiriImage}
              description="Created by Apple"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
