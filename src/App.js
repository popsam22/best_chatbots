import React from "react";
import "bulma/css/bulma.css";
import ProfileCard from "./components/ProfileCard";
import Bing from "./images/bing.jpeg";
import Bard from "./images/bard.jpeg";
import ChatGPT from "./images/chat.jpeg";

const App = () => {
  return (
    <div>
      <div>
        <section className="hero is-info">
          <div className="hero-body">
            <p className="title">Personal AI chatbots</p>
          </div>
        </section>
      </div>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                name="ChatGPT"
                handle="@openai_2022"
                imageSrc={ChatGPT}
                about="AI language model for natural language processing."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                name="Bard"
                handle="@google_Bard"
                imageSrc={Bard}
                about="Google's language model for natural language generation."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                name="The new Bing"
                handle="@new_bing2023"
                imageSrc={Bing}
                about="Microsoft's revamped search engine taking the internet by surprise"
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
