import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { AiOutlineEnter } from 'react-icons/ai';
import '../index.css';

const Contact = () => {
  const containerRef = useRef();
  const subheadingRef = useRef();
  const buttonRef = useRef();
  const nameFormRef = useRef();
  const emailFormRef = useRef();
  const companyFormRef = useRef();
  const websiteFormRef = useRef();
  const budgetFormRef = useRef();
  const servicesFormRef = useRef();
  const descriptionFormRef = useRef();
  const confirmationRef = useRef();
  
  const [currentForm, setCurrentForm] = useState('welcome');
  const [selectedServices, setSelectedServices] = useState([]);

  // Initial animation for welcome content
  useEffect(() => {
    if (subheadingRef.current && buttonRef.current) {
      gsap.set([subheadingRef.current, buttonRef.current], {
        y: 50,
        opacity: 0,
      });

      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .to(subheadingRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.8,
        })
        .to(
          buttonRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          '-=0.4'
        );
    }
  }, []);

  // Handle form transitions
  const transitionToForm = (fromRef, toForm) => {
    if (fromRef.current) {
      gsap.to(fromRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.in',
        onComplete: () => {
          setCurrentForm(toForm);
          // Animate in new form
          setTimeout(() => {
            const nextRef =
              toForm === 'name' ? nameFormRef :
              toForm === 'email' ? emailFormRef :
              toForm === 'company' ? companyFormRef :
              toForm === 'website' ? websiteFormRef :
              toForm === 'budget' ? budgetFormRef :
              toForm === 'services' ? servicesFormRef :
              toForm === 'description' ? descriptionFormRef :
              confirmationRef;
            if (nextRef.current) {
              gsap.from(nextRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
              });
            }
          }, 10);
        },
      });
    }
  };

  const handleStartClick = () => transitionToForm(subheadingRef, 'name');
  const handleNameSubmit = () => transitionToForm(nameFormRef, 'email');
  const handleEmailSubmit = () => transitionToForm(emailFormRef, 'company');
  const handleCompanySubmit = () => transitionToForm(companyFormRef, 'website');
  const handleWebsiteSubmit = () => transitionToForm(websiteFormRef, 'budget');
  const handleBudgetSubmit = () => transitionToForm(budgetFormRef, 'services');
  const handleServicesSubmit = () => transitionToForm(servicesFormRef, 'description');
  const handleDescriptionSubmit = () => transitionToForm(descriptionFormRef, 'confirmation');

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <div ref={containerRef} className="container">
      {currentForm === 'welcome' && (
        <>
          <div ref={subheadingRef} className="welcome-section">
            <h1>GET IN CONTACT WITH US</h1>
            <p>Let us know your questions so we can get back to you</p>
          </div>
          <div ref={buttonRef} className="button-container">
            <button className="start-button" onClick={handleStartClick}>
              start
            </button>
            <div className="enter-text">
              <p>press <span>Enter</span></p>
              <AiOutlineEnter className="enter-icon" />
            </div>
          </div>
        </>
      )}

      {currentForm === 'name' && (
        <div ref={nameFormRef} className="form-container">
          <h1>What is your name?</h1>
          <input
            type="text"
            placeholder="Type your answer here........"
            className="form-input"
          />
          <div className="button-container">
            <button className="start-button" onClick={handleNameSubmit}>
              OK
            </button>
            <div className="enter-text">
              <p>press <span>Enter</span></p>
              <AiOutlineEnter className="enter-icon" />
            </div>
          </div>
        </div>
      )}

      {currentForm === 'email' && (
        <div ref={emailFormRef} className="form-container">
          <h1>What is your email address?</h1>
          <input
            type="email"
            placeholder="name@gmail.com"
            className="form-input"
          />
          <div className="button-container">
            <button className="start-button" onClick={handleEmailSubmit}>
              OK
            </button>
            <div className="enter-text">
              <p>press <span>Enter</span></p>
              <AiOutlineEnter className="enter-icon" />
            </div>
          </div>
        </div>
      )}

      {currentForm === 'company' && (
        <div ref={companyFormRef} className="form-container">
          <h1>What is your company name?</h1>
          <input
            type="text"
            placeholder="Type your answer here........"
            className="form-input"
          />
          <div className="button-container">
            <button className="start-button" onClick={handleCompanySubmit}>
              OK
            </button>
            <div className="enter-text">
              <p>press <span>Enter</span></p>
              <AiOutlineEnter className="enter-icon" />
            </div>
          </div>
        </div>
      )}

      {currentForm === 'website' && (
        <div ref={websiteFormRef} className="form-container">
          <h1>What is your business website?</h1>
          <input
            type="url"
            placeholder="https://"
            className="form-input"
          />
          <div className="button-container">
            <button className="start-button" onClick={handleWebsiteSubmit}>
              OK
            </button>
            <div className="enter-text">
              <p>press <span>Enter</span></p>
              <AiOutlineEnter className="enter-icon" />
            </div>
          </div>
        </div>
      )}

      {currentForm === 'budget' && (
        <div ref={budgetFormRef} className="form-container">
          <h1>What is your monthly budget?</h1>
          <input
            type="text"
            placeholder="Type your answer here........"
            className="form-input"
          />
          <div className="button-container">
            <button className="start-button" onClick={handleBudgetSubmit}>
              OK
            </button>
            <div className="enter-text">
              <p>press <span>Enter</span></p>
              <AiOutlineEnter className="enter-icon" />
            </div>
          </div>
        </div>
      )}

      {currentForm === 'services' && (
        <div ref={servicesFormRef} className="form-container">
          <h1>What type of services are you looking for?</h1>
          <div className="services-container">
            {['Web Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'Consulting'].map((service) => (
              <button
                key={service}
                className={`service-button ${selectedServices.includes(service) ? 'selected' : ''}`}
                onClick={() => handleServiceToggle(service)}
              >
                {service}
              </button>
            ))}
          </div>
          <div className="button-container">
            <button className="start-button" onClick={handleServicesSubmit}>
              OK
            </button>
            <div className="enter-text">
              <p>press <span>Enter</span></p>
              <AiOutlineEnter className="enter-icon" />
            </div>
          </div>
        </div>
      )}

      {currentForm === 'description' && (
        <div ref={descriptionFormRef} className="form-container">
          <h1>Provide a brief description of your organization</h1>
          <textarea
            placeholder="Type your answer here........"
            className="form-textarea"
          />
          <div className="button-container">
            <button className="start-button" onClick={handleDescriptionSubmit}>
              Submit
            </button>
            <div className="enter-text">
              <p>press <span>Enter</span></p>
              <AiOutlineEnter className="enter-icon" />
            </div>
          </div>
        </div>
      )}

      {currentForm === 'confirmation' && (
        <div ref={confirmationRef} className="confirmation-section">
          <h1>We'll get back to you shortly</h1>
          <p>Make sure to check your mails</p>
        </div>
      )}
    </div>
  );
};

export default Contact;