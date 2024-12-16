import React from "react";
import "../pages/Characters.css";
import thrallImg from "../assets/thrall.png";
import sylvanasImg from "../assets/sylvanas.png";
import voljinImg from "../assets/voljin.png";
import baineImg from "../assets/baine.png";
import guldanImg from "../assets/guldan.png";

const Characters = () => {
  return (
    <div className="characters-page">
      <h2>The Heroes and Legends of the Horde</h2>
      <p>The Horde is built upon the strength and sacrifices of its leaders. From the earliest days to its current state, these champions have defined the Horde’s legacy, leading it through war, conflict, and triumph. Here are some of the key figures who have shaped our story.</p>

      <section className="character-profile">
        <img src={thrallImg} alt="Thrall" className="character-image" />
        <div>
          <h3>Thrall – The Savior of the Horde</h3>
          <p>Born Go'el, Thrall was raised in captivity but went on to become the Warchief who led the Horde through some of its darkest days. His strength and wisdom helped bring the Horde from the brink of extinction to a united force, and his leadership turned the orcs from enemies of Azeroth into proud defenders of the world. A symbol of the Horde's potential for honor and unity, Thrall is more than a leader—he's a hero, the heart of the Horde.</p>
        </div>
      </section>

      <section className="character-profile">
        <img src={sylvanasImg} alt="Sylvanas Windrunner" className="character-image" />
        <div>
          <h3>Sylvanas Windrunner – The Banshee Queen</h3>
          <p>Sylvanas Windrunner is one of the most controversial and formidable leaders the Horde has ever known. After her tragic death at the hands of the Lich King, Sylvanas was reborn as the Banshee Queen, leading the Forsaken and becoming a powerful figure in the politics of the Horde. Her ruthless ambition, unyielding determination, and unapologetic methods have earned her both admiration and fear. Under her leadership, the Forsaken have risen to power, making Sylvanas one of the most influential figures in the world of Azeroth.</p>
        </div>
      </section>

      <section className="character-profile">
        <img src={voljinImg} alt="Vol'jin" className="character-image" />
        <div>
          <h3>Vol'jin – The Voice of the Darkspear</h3>
          <p>Vol'jin, leader of the Darkspear Trolls, played a crucial role in the Horde's survival during the Third War and later ascended to the position of Warchief. His wisdom and insight were instrumental in uniting the Horde against the Alliance and other threats. Vol'jin was a fierce defender of his people, and his leadership shaped the Horde's course during a time of great peril. A symbol of perseverance and strength, Vol'jin is forever etched into the history of the Horde.</p>
        </div>
      </section>

      <section className="character-profile">
        <img src={baineImg} alt="Baine Bloodhoof" className="character-image" />
        <div>
          <h3>Baine Bloodhoof – The Peacemaker</h3>
          <p>Baine Bloodhoof, son of the revered Cairne Bloodhoof, represents the heart of the Tauren people. As the current High Chieftain of the Tauren, Baine has stood as a steadfast voice of reason and unity within the Horde. While his views on peace and diplomacy sometimes clash with the more aggressive factions within the Horde, Baine's wisdom and compassion have made him one of the most respected leaders of the faction. He remains a key figure in the Horde’s future, committed to protecting his people and ensuring their survival.</p>
        </div>
      </section>

      <section className="character-profile">
        <img src={guldanImg} alt="Gul'dan" className="character-image" />
        <div>
          <h3>Gul'dan – The Betrayer</h3>
          <p>Gul'dan is a figure whose actions cast a long shadow over the history of the Horde. The first Orc Warlock and the creator of the dark powers that fueled the Horde's initial conquest of Azeroth, Gul'dan’s thirst for power and willingness to betray his own people made him one of the most dangerous and reviled figures in the world. His role in the destruction of Draenor and his manipulation of the Orcs for his own ambitions changed the course of history forever, leaving a legacy of corruption and ruin.</p>
        </div>
      </section>
    </div>
  );
};

export default Characters;
