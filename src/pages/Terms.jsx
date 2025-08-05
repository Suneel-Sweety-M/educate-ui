import { useRef, useState, useEffect, useMemo } from "react";

export default function Terms() {
  // Section Refs
  const introRef = useRef(null);
  const licenseRef = useRef(null);
  const liabilityRef = useRef(null);
  const commerceRef = useRef(null);
  const interactiveRef = useRef(null);
  const passwordsRef = useRef(null);
  const refundRef = useRef(null);
  const terminationRef = useRef(null);
  const otherRef = useRef(null);
  const disclaimerRef = useRef(null);

  const [activeSection, setActiveSection] = useState("General");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resize to check mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Section data
  const sections = useMemo(
    () => [
      { ref: introRef, name: "General", text: "This website (the “Site”) is owned and operated by IAG SERVICES FZCO d/b/a “Educate.io” (“IAG Online Services LTD,” “we” or “us”). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy, Acceptable Use Policy and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from IAG Online Services LTD. Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.We reserve the right to change these Terms of Service or to impose new conditions on use of the Site, from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.Intellectual Property Rights" },
      { ref: licenseRef, name: "Our Limited License To You", text: "This Site and all the materials available on the Site are the property of us and/or our affiliates or licensors, and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal noncommercial use. You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us. More specifically, unless explicitly authorized in these Terms of Service or by the owner of the materials, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium (including by email or other electronic means) any material from the Site. You may, however, from time to time, download and/or print one copy of individual pages of the Site for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices." },
      { ref: liabilityRef, name: "Your License To Us", text: "By posting or submitting any material (including, without limitation, comments, blog entries, Facebook postings, photos and videos) to us via the Site, internet groups, social media venues, or to any of our staff via email, text or otherwise, you are representing: (i) that you are the owner of the material, or are making your posting or submission with the express consent of the owner of the material; and (ii) that you are thirteen years of age or older. In addition, when you submit, email, text or deliver or post any material, you are granting us, and anyone authorized by us, a royalty-free, perpetual, irrevocable, non-exclusive, unrestricted, worldwide license to use, copy, modify, transmit, sell, exploit, create derivative works from, distribute, and/or publicly perform or display such material, in whole or in part, in any manner or medium, now known or hereafter developed, for any purpose." },
      { ref: commerceRef, name: "Online Commerce", text: "You represent that you are at least 18 years of age to create an account or make a purchase through the Site. If you are a parent or legal guardian permitting a person who is at least 16 years of age but under 18 years of age to create an account, you must supervise their use of Educate.io and assume any and all risks associated with their use of the Site. You are responsible for any and all account activity conducted by a minor on your account. If you are under 16 years of age, you may not use the Site. We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion." },
      { ref: interactiveRef, name: "Interactive Features", text: "This Site may include a variety of features, such as bulletin boards, web logs, chat rooms, and email services, which allow feedback to us and real-time interaction between users, and other features which allow users to communicate with others.Responsibility for what is posted on bulletin boards, web logs, chat rooms, and other public posting areas on the Site, or sent via any email services on the Site, lies with each user – you alone are responsible for the material you post or send. We do not control the messages, information or files that you or others may provide through the Site." },
      { ref: passwordsRef, name: "Passwords", text: "To use certain features of the Site, you will need a username and password, which you will receive through the Site’s registration process. You are responsible for maintaining the confidentiality of the password and account, and are responsible for all activities (whether by you or by others) that occur under your password or account.You agree to notify us immediately of any unauthorized use of your password or account or any other breach of security, and to ensure that you exit from your account at the end of each session. We cannot and will not be liable for any loss or damage arising from your failure to protect your password or account information.Limitation of LiabilityUNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE, OUR SUBSIDIARY AND PARENT COMPANIES OR AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, THE SITE, INCLUDING OUR MESSAGING, BLOGS, COMMENTS OF OTHERS, BOOKS, EMAILS, PRODUCTS, OR SERVICES, OR THIRD-PARTY MATERIALS, PRODUCTS."},
      { ref: refundRef, name: "Refund Policy", text: "Agency Accelerator We offer a 7-day money-back guarantee meaning you have up to seven days to get a full refund on your purchase price. The guarantee applies regardless of whether you’ve taken advantage of our offerings or not.Monetise‍ We offer a 7-day money-back guarantee meaning you have up to seven days to get a full refund on your purchase price. The guarantee applies regardless of whether you’ve taken advantage of our offerings or not." },
      { ref: terminationRef, name: "Termination", text: "We may cancel or terminate your right to use the Site or any part of the Site at any time without notice. In the event of cancellation or termination, you are no longer authorized to access the part of the Site affected by such cancellation or termination.The restrictions imposed on you with respect to material downloaded from the Site, and the disclaimers and limitations of liabilities set forth in these Terms of Service, shall survive.Refund PolicyYour purchase of a product or service or ticket to an event may or may not provide for any refund. Each specific product, service, event or course will specify its own refund policy." },
      { ref: otherRef, name: "Other", text: "The Digital Millennium Copyright Act of 1998 (the “DMCA”) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under the U.S. copyright law. If you believe in good faith that materials hosted by IAG SERVICES FZCO infringe your copyright, you, or your agent may send to IAG SERVICES FZCO a notice requesting that the material be removed or access to it be blocked.Any notification by a copyright owner or a person authorized to act on its behalf that fails to comply with requirements of the DMCA shall not be considered sufficient notice and shall not be deemed to confer upon IAG SERVICES FZCO actual knowledge of facts or circumstances from which infringing material or acts are evident." },
      { ref: disclaimerRef, name: "Disclaimer", text: "Although it is highly unlikely, This policy may be changed at any time at our discretion. If we should update this policy, we will post the updates to this page on our Website." },
    ],
    []
  );

  // Scroll to section
  const scrollTo = (ref, section) => {
    setActiveSection(section);
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Highlight active section on scroll
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
      {/* Page Heading */}
      <div style={{ textAlign: "center", padding: "30px 20px 20px" }}>
        <h1 style={{ fontSize: "34px", fontWeight: "bold" }}>TERMS & CONDITIONS</h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          padding: "20px",
        }}
      >
        {/* Sidebar or Dropdown */}
        {isMobile ? (
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <select
              value={activeSection}
              onChange={(e) => {
                const selected = sections.find((s) => s.name === e.target.value);
                if (selected) scrollTo(selected.ref, selected.name);
              }}
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#090979",
                color: "#fff",
                width: "90%",
                maxWidth: "400px",
              }}
            >
              {sections.map((section) => (
                <option key={section.name} value={section.name}>
                  {section.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <aside
            style={{
              flex: "1 1 250px",
              maxWidth: "280px",
              position: "sticky",
              top: "20px",
              alignSelf: "flex-start",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "22px", marginBottom: "20px", fontWeight: "600" }}>
              Table of Contents
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {sections.map((section) => (
                <li
                  key={section.name}
                  onClick={() => scrollTo(section.ref, section.name)}
                  style={{
                    fontSize: "18px",
                    marginBottom: "18px",
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

        {/* Content */}
        <main style={{ flex: "3 1 600px", paddingLeft: isMobile ? "0px" : "40px" }}>
          {sections.map((section) => (
            <section
              key={section.name}
              ref={section.ref}
              style={{
                marginBottom: "50px",
                transition: "transform 0.3s ease",
                transform: activeSection === section.name ? "scale(1.02)" : "scale(1)",
              }}
            >
              <h3 style={{ fontSize: isMobile ? "22px" : "30px", marginBottom: "12px", fontWeight: "bold" }}>
                {section.name}
              </h3>
              <p style={{ fontSize: isMobile ? "15px" : "18px", lineHeight: "1.8", color: "#b0c4de" }}>
                {section.text}
              </p>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
