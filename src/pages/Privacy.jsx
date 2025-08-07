import { useRef, useState, useEffect, useMemo } from "react";

export default function Privacy() {
  const purposeRef = useRef(null);
  const importantinformationRef = useRef(null);
  const contactdetailsRef = useRef(null);
  const wecollectthefollowingRef = useRef(null);
  const useyourinformationRef = useRef(null);
  const purposeofusinginformationRef = useRef(null);
  const sharingyourinformationRef = useRef(null);
  const storeyourinformationRef = useRef(null);
  const childrensprivacyRef = useRef(null);
  const otherwebsitesandservicesRef = useRef(null);
  const dataprotectionrightsRef = useRef(null);
  const questionsRef = useRef(null);
  const changestoourprivacypolicyRef = useRef(null);

  const [activeSection, setActiveSection] = useState("Purpose");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sections = useMemo(
    () => [
      { ref: purposeRef, name: "Purpose of this Privacy Policy", text: "IAG SERVICES FZCO respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you." },
      { ref: importantinformationRef, name: "Important Information", text: "This privacy policy aims to give you information on how IAG SERVICES FZCO collects and processes your personal data through your use of this website, including any data you may provide through this website when you subscribe OR purchase a product or service OR take part in a competition.This website is not intended for children and we do not knowingly collect data relating to children." },
      { ref: contactdetailsRef , name: "Contact Details", text: "If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:Full name of legal entity: IAG SERVICES FZCO (Educate IO)Email address: support@growyouragency.com You have the right to make a complaint at any time to the Information Commissioner's Office (ICO). We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance." },
      { ref: wecollectthefollowingRef, name: "We Collect The Following", text: "Information you provide to us directly:‍When you register for an account via email, we collect your full name, password, and email address.Technical information we collect:‍Any use of IAG SERVICES FZCO’s website and/or software may result in the collection of technical information such as your computer’s IP address, mobile device identifier, meta data, operating system, browser name/version, the referring web page, requested page; such information is used to help us understand the overall usage pattern of our website and software.We also use third-party analytics tools to help us measure how you use our website. These tools collect information sent by your device or our Service, including how you like to use our software and website which can help us in improving our Service." },
      { ref: useyourinformationRef, name: "How We Use Your Information", text: "Help you efficiently access your information after you sign in. We remember information so you will not have to re-enter it during your visit or the next time you visit the service. Provide personalized content and information to you and others, which could include online ads or other forms of marketing. Provide, improve, test, and monitor the effectiveness of our service. Develop and test new products and features. Monitor metrics such as total number of visitors, traffic, and demographic patterns. Diagnose or fix technology problems. Automatically update IAG SERVICES FZCO’s application on your device. We have set out below, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please contact us if you need details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out below." },
      { ref: purposeofusinginformationRef, name: "Purpose Of Using Your Information", text: "Marketing We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising.Promotional offers from usWe may use your Identity, Contact, Technical, Usage and Profile Data to form view on what we think you may want or need, or what may be of interest to you.This is how we decide which products, services and offers may be relevant for you (we call this marketing).You will receive marketing communications from us if you have requested information from us or purchased goods or services from us and you have not opted out of receiving that marketing.Third-Party MarketingWe will get your express opt-in consent before we share your personal data with any third party for marketing purposes."},
      { ref: sharingyourinformationRef, name: "Sharing Your Information", text: "We will not rent or sell your information to third parties outside of IAG SERVICES FZCO without your consent, except as noted in this Policy.Parties with whom we may share your information:We may share User Content not personal information with potential business partners, service providers as a way of improving our service and providing relevant content. This will be done under confidentiality terms.We may remove parts of data that can identify you and share anonymized data with other parties. We may also combine your information with other information in a way that it is no longer associated with you and share that aggregated information.We may be required to disclose your information without your prior consent by law for the following reasons:Comply with law or legal processProtect and defend our rights and property, or the rights and property of a third partyProtect us against misuse or unauthorized use of any of IAG SERVICES FZCO’s products, software, services, or other proprietary materialsPrevent death or imminent bodily harm. prevent and address fraud and other illegal activity"},
      { ref: storeyourinformationRef, name: "How We Store Your Information", text: "We use commercially reasonable precautions to help keep your personal information safe and stored securely. However, we cannot ensure the security of any information you transmit to IAG SERVICES FZCO or guarantee that information on the Service may not be accessed, disclosed, altered, or destroyed.Please do your part to help us. You are responsible for maintaining the secrecy of your unique password and account information, and for controlling access to emails between you and IAG SERVICES FZCO, at all times.Your privacy settings may also be affected by changes to the social media services in which you connect to. We are not responsible for the functionality, privacy, or security measures of any other organization.Following termination or deactivation of your account, IAG SERVICES FZCO, its Affiliates, or its Service Providers may retain information (including your profile information) and User Content for a commercially reasonable time for backup, archival, and/or audit purposes. " },
      { ref: childrensprivacyRef, name: "Children's Privacy", text: "IAG SERVICES FZCO does not knowingly collect or solicit any information from anyone under the age of 13 or knowingly allow such persons to register for the Service. The Service and its content are not directed at children under the age of 13.In the event that we learn that we have collected personal information from a child under age 13 without parental consent, we will delete that information as quickly as possible.If you believe that we might have any information from or about a child under 13, please contact us." },
      { ref: otherwebsitesandservicesRef, name: "Other Websites And Services", text: "We are not responsible for the practices employed by any websites or services linked to or from our Service, including the information or content contained within them. Please remember that when you use a link to go from our Service to another website or service, our Privacy Policy does not apply to those third-party websites or services.Your browsing and interaction on any third-party website or service, including those that have a link on our website/software, or are accessed through our web/in-app browser are subject to that third party's own rules and policies.In addition, you agree that we are not responsible and do not have control over any third-parties that you authorize to access your User Content.If you are using a third-party website or service and you allow them to access your User Content you do so at your own risk." },
      { ref: dataprotectionrightsRef, name: "Your Data Protection Rights Under The General Data Protection Regulation", text: "If you are a resident of the EEA or the UK, you have the following data protection rights: If you wish to access, correct, update, or request deletion of your personal information, you can do so at any time by emailing us at support@educate.io.In addition, you can object to the processing of your personal information, ask us to restrict the processing of your personal information, or request portability of your personal information. Again, you can exercise these rights by emailing us.You have the right to opt-out of marketing communications we send you at any time. You can exercise this right by clicking on the unsubscribe or opt-out link in the marketing emails we send you. To opt-out of other forms of marketing, please contact us by email.Similarly, if we have collected and process your personal information with your consent, then you can withdraw your consent at any time.Withdrawing your consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.You have the right to complain to a data protection authority about our collection and use of your personal information. For more information, please contact your local data protection authority.We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws." },
      { ref: questionsRef, name: "Questions", text: "If you have any questions about this Privacy Policy or the Service, please find the appropriate support channel in the website settings or contact us at support@educate.io."},
      { ref: changestoourprivacypolicyRef, name: "Changes To Our Privacy Policy", text: "IAG SERVICES FZCO may modify or update this Privacy Policy from time to time, so please review it periodically. We may provide you additional forms of notice of modifications or updates as appropriate under the circumstances.Your continued use of the website or the Service after any modification to this Privacy Policy will constitute your acceptance of such modification." },

    ],
    []
  );

    const scrollTo = (ref, section) => {
    setActiveSection(section);

    if (isMobile) {
      setMenuOpen(false);
      // Wait for menu to close before scrolling
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }


  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.reduce(
          (max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max,
          { intersectionRatio: 0 }
        );
        if (visibleEntry && visibleEntry.isIntersecting) {
          const section = sections.find(
            (s) => s.ref.current === visibleEntry.target
          );
          if (section) setActiveSection(section.name);
        }
      },
      { threshold: [0.3, 0.6] }
    );

    sections.forEach((s) => {
      if (s.ref.current) observer.observe(s.ref.current);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to bottom right, #000000, #020024, #090979, #000000)",
        color: "#fff",
      }}
    >
      <div style={{ textAlign: "center", padding: "40px 20px 20px" }}>
        <h1 style={{ fontSize: "50px", fontWeight: "bold", letterSpacing: "1px" }}>
          Privacy Policy
        </h1>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", padding: "20px", flexWrap: "wrap" }}>
        {/* Sidebar (only for desktop) */}
        {!isMobile && (
          <aside
            style={{
              flex: "1 1 250px",
              maxWidth: "300px",
              position: "sticky",
              top: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "22px", marginBottom: "20px", fontWeight: "600", textAlign: "center" }}>
              Table of contents
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "center" }}>
              {sections.map((section) => (
                <li
                  key={section.name}
                  onClick={() => scrollTo(section.ref, section.name)}
                  style={{
                    fontSize: "18px",
                    marginBottom: "20px",
                    cursor: "pointer",
                    color: activeSection === section.name ? "#fff" : "#ccc",
                    fontWeight: activeSection === section.name ? "bold" : "normal",
                    transform: activeSection === section.name ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {section.name}
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Dropdown (only for mobile) */}
        {isMobile && (
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "transparent",
                color: "#fff",
                padding: "12px 20px",
                fontSize: "18px",
                border: "1px solid #555",
                borderRadius: "8px",
                width: "100%",
                textAlign: "left",
                cursor: "pointer"
              }}
            >
              {activeSection}
            </button>
            {menuOpen && (
              <ul
                style={{
                  listStyle: "none",
                  padding: "10px",
                  margin: "10px 0",
                  background: "transparent",
                  border: "1px solid #555",
                  borderRadius: "8px",
                }}
              >
                {sections.map((section) => (
                  <li
                    key={section.name}
                    onClick={() => scrollTo(section.ref, section.name)}
                    style={{
                      padding: "10px",
                      cursor: "pointer",
                      color: activeSection === section.name ? "#fff" : "#ccc",
                    }}
                  >
                    {section.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Content */}
        <main style={{ flex: "3 1 600px", paddingLeft: "40px" }}>
          {sections.map((section) => (
            <section
              key={section.name}
              ref={section.ref}
              style={{
                marginBottom: "60px",
                transition: "transform 0.3s ease",
                transform: activeSection === section.name ? "scale(1.02)" : "scale(1)",
              }}
            >
              <h3 style={{ fontSize: "32px", marginBottom: "15px", fontWeight: "bold", color: "#fff" }}>
                {section.name}
              </h3>
              <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#b0c4de" }}>
                {section.text}
              </p>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
