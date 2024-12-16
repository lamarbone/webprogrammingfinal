import React from "react";
import "../pages/Geography.css";
import orgImg from "../assets/orgrimmar.png";
import ucImg from "../assets/undercity.png";
import tbImg from "../assets/thunderbluff.png";
import silvermoonImg from "../assets/silvermoon.png"; 

const Geography = () => {
  return (
    <div className="geography-page">
      <h2>The Cities of the Horde</h2>
      <p>The Horde is not only a force of war, but also a collection of thriving cities and strongholds that stand as symbols of its power, culture, and unity. From the scorched deserts of the Barrens to the icy tundras of Northrend, the Horde has built some of the most formidable and legendary cities in Azeroth. These cities are home to the different races of the Horde and serve as a beacon of strength for all who call the Horde their home.</p>

      <section className="city-profile">
        <img src={orgImg} alt="Orgrimmar" className="city-image" />
        <div>
          <h3>Orgrimmar – The Heart of the Horde</h3>
          <p>Orgrimmar, the capital city of the Orcs and the seat of the Warchief, stands as the heart of the Horde. Located in the northern part of Durotar, Orgrimmar is a bustling, fortified city, built into the very cliffs of the land. It is a city of warriors, traders, and diplomats, where the future of the Horde is shaped. Under the leadership of the Warchief, Orgrimmar serves as the nerve center of the Horde's military and political activities. It is a symbol of the Horde's enduring strength and unity.</p>
        </div>
      </section>

      <section className="city-profile">
        <img src={ucImg} alt="Undercity" className="city-image" />
        <div>
          <h3>Undercity – The Forsaken's Domain</h3>
          <p>Located beneath the ruins of Lordaeron, Undercity is the stronghold of the Forsaken, led by the Banshee Queen, Sylvanas Windrunner. A city built in secrecy and shadow, Undercity is a labyrinth of tunnels, ancient crypts, and dark chambers, all hidden beneath the surface of the land. While it remains a place of sorrow and loss for its inhabitants, it is also a symbol of defiance. The Forsaken's resilience and refusal to fade into oblivion make Undercity one of the most iconic cities within the Horde.</p>
        </div>
      </section>

      <section className="city-profile">
        <img src={tbImg} alt="Thunder Bluff" className="city-image" />
        <div>
          <h3>Thunder Bluff – The Home of the Tauren</h3>
          <p>Thunder Bluff, the majestic city of the Tauren, is perched atop towering mesas in the Barrens. It is a place of spiritual reverence, where the Tauren honor their ancestors and commune with the Earthmother. Led by Baine Bloodhoof, Thunder Bluff serves as the spiritual and political center of the Tauren people. Its intricate, sprawling walkways and great totemic structures reflect the Tauren’s deep connection to nature and the Earth, making Thunder Bluff one of the most peaceful and revered cities in the Horde.</p>
        </div>
      </section>

      <section className="city-profile">
        <img src={silvermoonImg}alt="Silvermoon" className="city-image" />
        <div>
          <h3>Silvermoon – The City of the Elves</h3>
          <p>Silvermoon, the capital of the Blood Elves, is a city of immense beauty and ancient magic. Located in the Eastern Kingdoms, Silvermoon is a city of towering spires, shimmering fountains, and delicate architecture. Once the jewel of the High Elves, Silvermoon was nearly destroyed by the Scourge during the Third War. However, the Blood Elves rebuilt it, and under the leadership of Lor'themar Theron, it became one of the most magical and influential cities in the Horde. It is a testament to the resilience and strength of the Elves.</p>
        </div>
      </section>

      

    </div>
  );
};

export default Geography;
