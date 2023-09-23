import { useState } from "react";
import './Instamart.module.css'
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <>
      <h1>{title}</h1>

      {isVisible ? (
        <>
          <button onClick={() => setIsVisible(false)}>Hide</button>
          <p>{description}</p>
        </>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}
    </>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  return (
    <div>
      <Section
        title="Instamart About"
        description="Instamart description -- Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium sit nulla rerum delectus! Autem, fugit a quo in commodi consectetur reiciendis non, voluptatum enim nam quas voluptatibus perferendis eveniet."
        isVisible={visibleSection === "about"}
        setIsVisible={(cond) => {
          if (cond === true) {
            setVisibleSection("about");
          } else {
            setVisibleSection("");
          }
        }}
      />
      <Section
        title="Instamart Contacts"
        description="Instamart description -- Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium sit nulla rerum delectus! Autem, fugit a quo in commodi consectetur reiciendis non, voluptatum enim nam quas voluptatibus perferendis eveniet."
        setIsVisible={(cond) => {
          if (cond === true) {
            setVisibleSection("contacts");
          } else {
            setVisibleSection("");
          }
        }}
        isVisible={visibleSection === "contacts"}
      />
      <Section
        title="Instamart Services"
        description="Instamart description -- Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium sit nulla rerum delectus! Autem, fugit a quo in commodi consectetur reiciendis non, voluptatum enim nam quas voluptatibus perferendis eveniet."
        setIsVisible={(cond) => {
          if (cond === true) {
            setVisibleSection("services");
          } else {
            setVisibleSection("");
          }
        }}
        isVisible={visibleSection === "services"}
      />
    </div>
  );
};

export default Instamart;
