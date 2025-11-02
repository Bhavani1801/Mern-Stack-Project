import React from 'react';

const About = () => {
  return (
    <main className="main-content">
      <section className="about-intro">
        <h2>About SheShelter</h2>
        <div className="mission-box">
          <h3>Our Mission</h3>
          <p>SheShelter is dedicated to creating a safer world for women by providing immediate access to safe spaces and emergency assistance. We believe every woman deserves the right to move freely without fear, and we're committed to making that vision a reality through technology and community support.</p>
        </div>
      </section>
      
      <section className="about-section">
        <h3>Our Vision</h3>
        <p>Our vision is to build a future where women can move freely without fear. We aim to create a nationwide network of safe spaces and integrate innovative safety tools that work in real time. Beyond immediate assistance, SheShelter is committed to raising awareness, educating communities, and empowering women with the knowledge and resources they need to stay safe.</p>
      </section>
      
      <section className="about-section">
        <h3>What We Do</h3>
        <p>We provide real-time shelter availability, an SOS alert system, and verified emergency contacts to enhance safety and peace of mind. Using advanced location technology, we connect women with the nearest verified safe locations, whether it's a shelter, community center, or trusted support organization. Our platform also provides direct access to emergency helpline numbers so that help is only a click away.</p>
      </section>

      <section className="about-section">
        <h3>How We Help</h3>
        <p>Our platform is built to be easy to use, even in stressful situations. We understand that during emergencies, every second counts. That's why SheShelter offers quick navigation to shelters, one-tap calling to emergency numbers, and secure location sharing with trusted contacts. By minimizing the steps required to get help, we ensure that users can act quickly and safely.</p>
      </section>

      <section className="features-section">
        <h3>What We Offer</h3>
        <ul className="features-list">
          <li>Instant access to nearby safe shelters with real-time availability updates</li>
          <li>Emergency SOS button with live location sharing to trusted contacts</li>
          <li>Quick dial to verified helpline numbers and emergency services</li>
          <li>24/7 updated shelter information with security verification</li>
          <li>Simple, intuitive interface designed for emergency situations</li>
          <li>Secure platform that respects user privacy and safety</li>
          <li>Strong partnerships with local safety networks and women's organizations</li>
          <li>Educational resources on personal safety and self-defense</li>
        </ul>
      </section>
    </main>
  );
};

export default About;