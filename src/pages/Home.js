import React from "react";
import "../pages/Home.css"; // Import your custom styles for Home page

const Home = () => {
  return (
    <div className="home-page">
      <h2>Welcome to the Horde Fan Page!</h2>
      <p>Greetings, champion of the Horde! This page is dedicated to celebrating all things Horde in the world of Azeroth. Here, we honor the strength, resilience, and unity of the Horde as it stands against its enemies.</p>

      <section>
        <h3>Why the Horde?</h3>
        <p>The Horde is more than just a faction; it’s a brotherhood of various races united by a common purpose. From the mighty Orcs to the cunning Trolls, the powerful Tauren, and the undead Forsaken, each race brings its unique strength to the table. Together, we’ve stood against the Alliance’s forces, overcoming challenges with honor and strength.</p>
        <p>The Horde is a symbol of resilience, diversity, and unity. Unlike the Alliance, which is often seen as a collection of disparate factions bound by rules, the Horde is forged in the fires of war and respect for one another, no matter how different our races may be.</p>
      </section>

      <section>
        <h3>What’s on This Site?</h3>
        <p>This site is dedicated to all things Horde. Here’s what you’ll find:</p>
        <ul>
          <li><strong>The Lore:</strong> A rich history of the Horde's journey from its early days on Draenor to its current position in the world of Azeroth.</li>
          <li><strong>Character Profiles:</strong> Detailed biographies of the key figures who have shaped the Horde's destiny, from Thrall to Sylvanas, and beyond.</li>
          <li><strong>Geography:</strong> Visit the iconic locations of the Horde and learn about their rich history.</li>
        </ul>
        <p>Whether you're a long-time fan or new to the world of Warcraft, there's something for every champion of the Horde here.</p>
      </section>

      <section>
        <h3>Join Us!</h3>
        <p>Now is the time to show your loyalty to the Horde. Explore the site, learn about its history, meet the characters who make up its legacy, and stand tall with your fellow Horde members. Together, we are unstoppable!</p>
      </section>
    </div>
  );
};

export default Home;
