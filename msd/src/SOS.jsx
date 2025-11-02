import React, { useState } from 'react';

const SOS = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timer, setTimer] = useState(5);

  const handleSOSClick = () => {
    setIsModalOpen(true);
    
    // Countdown timer
    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          clearInterval(countdown);
          // Here you would actually send the emergency alert
          alert("Emergency alert sent! Help is on the way.");
          setIsModalOpen(false);
          return 5;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const cancelSOS = () => {
    setIsModalOpen(false);
    setTimer(5);
  };

  return (
    <main className="sos-container">
      <section className="emergency-banner">
        <div className="banner-content">
          <h1><i className="fas fa-exclamation-triangle"></i> Emergency Assistance</h1>
          <p>Immediate help when you need it most. Your safety is our priority.</p>
        </div>
      </section>

      <section className="sos-alert">
        <h2 className="sos-heading">Emergency SOS Alert</h2>
        <p className="sos-info">Press and hold the button below to send an immediate distress signal to emergency services and your trusted contacts.</p>
        
        <div className="sos-button-container">
          <button className="sos-btn" id="sosButton" onClick={handleSOSClick}>
            <span className="sos-text">SOS</span>
            <span className="sos-pulse"></span>
            <i className="fas fa-bell alarm-icon"></i>
          </button>
          <p className="sos-instructions">Click to activate emergency alert</p>
        </div>
      </section>

      <section className="emergency-steps">
        <h2><i className="fas fa-list-ol"></i> What Happens When You Activate SOS</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Alert Sent</h3>
            <p>Your emergency alert is immediately sent to local authorities and your emergency contacts.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Response Activated</h3>
            <p>Emergency services are notified with your information and will respond as quickly as possible.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Follow Instructions</h3>
            <p>Stay calm and follow any instructions provided by emergency responders.</p>
          </div>
        </div>
      </section>

      <section className="helplines">
        <h2><i className="fas fa-phone-alt"></i> Emergency Contact Numbers</h2>
        <div className="helpline-grid">
          <div className="helpline-category">
            <h3>National Helplines</h3>
            <ul className="helpline-list">
              <li className="helpline-item">Women's Helpline (All India): <span className="helpline-number">1091</span></li>
              <li className="helpline-item">National Emergency: <span className="helpline-number">112</span></li>
              <li className="helpline-item">Police: <span className="helpline-number">100</span></li>
              <li className="helpline-item">Ambulance: <span className="helpline-number">108</span></li>
            </ul>
          </div>
          <div className="helpline-category">
            <h3>Specialized Help</h3>
            <ul className="helpline-list">
              <li className="helpline-item">Child Helpline: <span className="helpline-number">1098</span></li>
              <li className="helpline-item">Domestic Violence: <span className="helpline-number">181</span></li>
              <li className="helpline-item">Senior Citizen: <span className="helpline-number">14567</span></li>
              <li className="helpline-item">Mental Health: <span className="helpline-number">08046110007</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="safety-tips">
        <h2><i className="fas fa-lightbulb"></i> Safety Tips</h2>
        <div className="tips-container">
          <div className="tip-card">
            <i className="fas fa-user-shield"></i>
            <h3>Be Aware</h3>
            <p>Always be aware of your surroundings and trust your instincts.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-map-marked-alt"></i>
            <h3>Know Locations</h3>
            <p>Identify safe places along your regular routes.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Keep Phone Ready</h3>
            <p>Have your phone charged and easily accessible.</p>
          </div>
        </div>
      </section>

      <div className={`emergency-modal ${isModalOpen ? 'active' : ''}`} id="emergencyModal">
        <div className="modal-content">
          <div className="modal-header">
            <i className="fas fa-exclamation-circle"></i>
            <h3>EMERGENCY ALERT ACTIVATED</h3>
          </div>
          <p>Help is on the way! Authorities have been notified.</p>
          <div className="modal-timer-container">
            <div className="modal-timer" id="modalTimer">{timer}</div>
            <span>seconds until alert is sent</span>
          </div>
          <div className="modal-actions">
            <button className="cancel-btn" id="cancelSosBtn" onClick={cancelSOS}>
              <i className="fas fa-times"></i> CANCEL ALERT
            </button>
          </div>
          <div className="modal-footer">
            <p>If this is a real emergency, stay on the line if possible.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SOS;