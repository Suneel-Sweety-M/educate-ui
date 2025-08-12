import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { Section } from "../components/career/section";
import '../components/career/career.css';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'


export default function JobDetail() {
    const jobs = [
        {
            id: 1,
            slug: "vlog-editor",
            title: "VLOG EDITOR",
            datePosted: "August 2, 2025",
            team: "Creative",
            location: "Remote",
            type: "Full-time",
            image: "https://educate.io/images/Vlog-Editor-Thumbnail-1-p-1080.jpg",
            summary: "Join Team Educate as a passionate Vlog Editor. Immerse yourself in the world of vlogging, where your editing expertise meets your storytelling flair. You’ll be at the forefront of crafting engaging and visually captivating vlogs for Iman Gadzhi and our content team, helping us deliver compelling narratives that resonate with our audience. If you’re excited about bringing vlogs to life and pushing the boundaries of online content, this is the role for you.",
            role: "Vlog Storyteller As a Vlog Editor at Team Educate, your main responsibility will be to create dynamic and visually engaging vlogs that connect with our audience on a personal level. You will work closely with Iman Gadzhi and the content team to develop and execute strategies that amplify our storytelling and elevate our content to new heights.The ideal candidate should have a proven track record of success in vlog editing, with a strong ability to craft compelling narratives. You should be a creative thinker who can identify opportunities to enhance our vlogs with your unique touch. Strong communication skills, both written and verbal, are essential.",
          who: "We're looking for a creative mind with experience in motion design.", // dont write backend
            responsibilities: [ // dont want for backend
                "Work on a wide variety of creative projects, with a primary focus on vlogs, but also including YouTube videos, Ads, Programs, and internal videos",
                "Stay up-to-date with deliverables while constantly striving to improve your skills and our content output.",
                "Attend daily team calls with the Editing team (12:00 GMT) and Content Creation team (15:00 GMT) from Monday to Friday.",
                "Coordinate with your Head of Dept on a weekly basis to ensure all deliverables are met.",
                "Work proactively behind the scenes to learn new creative skills and techniques that can help you tell better stories and produce better content for Educate."
            ],
            requirementsDetails: [
                {
                    title: "Edit Vlogs For YouTube",
                    subtitle: "Elevate our vlog content to the next level.",
                    description:
                        "You’ll collaborate closely with our lead editor, taking charge of editing several of our vlogs. Your role will ensure timely delivery without sacrificing quality.",
                },
                {
                    title: "Create Captivating Visuals",
                    subtitle: "We need a visual storytelling expert.",
                    description:
                        "Craft narratives using motion graphics, sound design, and visual pacing that keeps viewers engaged from start to finish.",
                },
                {
                    title: "Collaborate on Creative Direction",
                    subtitle: "Your input will shape the vision.",
                    description:
                        "Work with producers and directors to pitch and iterate on ideas that align with our content goals.",
                },
            ],
            tools: [
                {
                    name: "DaVinci Resolve",
                    icon: "https://educate.io/images/66f0575c21c901941eb32372_davinci-resolve-icon-p-500.png",
                    description: "Primary tool for color grading and advanced editing.",
                },
                {
                    name: "Premiere Pro",
                    icon: "https://educate.io/images/Adobe_Premiere_Pro_CC_icon.svg-p-500.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
                {
                    name: "After Effects",
                    icon: "https://educate.io/images/Adobe_After_Effects_CC_icon.svg-p-500.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
                {
                    name: "Frame.io",
                    icon: "https://educate.io/images/20175-a3c7192a-b6e6-45f1-93ef-8c9a19eb89b3.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
            ],
            shouldNotApplyIf: [
                "You’re not comfortable with fast-paced environments.",
                "You prefer working in large, rigid corporate structures.",
                "You’re unwilling to adapt to evolving project requirements.",
            ],
            applyLink: "https://example.com/apply/vlog-editor", 
        },













        {
            id: 2,
            slug: "closer",
            title: "Closer",
            datePosted: "August 3, 2025",
            team: "Sales",
            location: "Remote",
            type: "Full-time",
            image: "https://educate.io/images/CLOSER-min-p-1080.jpg",
            summary: "As a Closer, you’ll convert qualified leads into customers with empathy and precision.",
            role: "Work closely with the sales team to finalize deals.",
            who: "You're persuasive, empathetic, and focused on results.",
            responsibilities: [
                "Engage with inbound leads",
                "Guide prospects through the decision process",
                "Achieve monthly sales targets",
            ],
            requirementsDetails: [
                {
                    title: "Sales Mastery",
                    subtitle: "You must be a confident communicator.",
                    description:
                        "Understanding client needs and clearly articulating value is key to this role.",
                },
                {
                    title: "CRM Proficiency",
                    subtitle: "Track and manage leads efficiently.",
                    description:
                        "You’ll be expected to use tools like HubSpot or Salesforce to keep pipelines updated.",
                },
                {
                    title: "Results Driven",
                    subtitle: "Numbers matter.",
                    description:
                        "You’ll be working toward monthly KPIs and closing quotas, so performance matters.",
                },
            ],
            tools: [
                {
                    name: "DaVinci Resolve",
                    icon: "https://educate.io/images/66f0575c21c901941eb32372_davinci-resolve-icon-p-500.png",
                    description: "Primary tool for color grading and advanced editing.",
                },
                {
                    name: "Premiere Pro",
                    icon: "https://educate.io/images/Adobe_Premiere_Pro_CC_icon.svg-p-500.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
                {
                    name: "After Effects",
                    icon: "https://educate.io/images/Adobe_After_Effects_CC_icon.svg-p-500.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
                {
                    name: "Frame.io",
                    icon: "https://educate.io/images/20175-a3c7192a-b6e6-45f1-93ef-8c9a19eb89b3.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
            ],
            shouldNotApplyIf: [
                "You struggle with rejection or handling objections.",
                "You dislike structured sales processes.",
            ],
            applyLink: "https://example.com/apply/closer",
        },
        {
            id: 3,
            slug: "video-editor",
            title: "Video Editor",
            datePosted: "August 2, 2025",
            team: "Creative",
            location: "Remote",
            type: "Full-time",
            image: "https://educate.io/images/666a12bf627c78759b8ca105_Video-Editor-p-1080.webp",
            summary: "As a Video Editor, you'll shape our creative content...",
            role: "You'll work with the content team to deliver impactful visuals.",
            who: "We're looking for a creative mind with experience in motion design.",
            responsibilities: [
                "Edit promotional videos",
                "Collaborate with creative directors",
                "Maintain visual consistency"
            ],
            requirementsDetails: [
                {
                    title: "Edit Vlogs For YouTube",
                    subtitle: "Elevate our vlog content to the next level.",
                    description:
                        "You’ll collaborate closely with our lead editor, taking charge of editing several of our vlogs. Your role will be pivotal in ensuring that our team can efficiently manage multiple projects while maintaining the high-quality output our audience expects.",
                },
                {
                    title: "Create Captivating Visuals",
                    subtitle: "We need a visual storytelling expert.",
                    description:
                        "Our vlogs aren’t just about daily activities—they’re crafted narratives that need to captivate from start to finish. You’ll be responsible for incorporating motion graphics and visuals that enhance our storytelling, transforming raw footage into cinematic experiences that engage and entertain.",
                },
                {
                    title: "Collaborate on Creative Direction",
                    subtitle: "Your input will shape the vision.",
                    description:
                        "Work alongside our creative team to brainstorm, pitch, and execute new ideas for our content. You’ll help develop the tone, style, and pacing of our vlogs to ensure they align with our brand’s storytelling goals.",
                },
            ],

            tools: [
                {
                    name: "DaVinci Resolve",
                    icon: "https://educate.io/images/66f0575c21c901941eb32372_davinci-resolve-icon-p-500.png",
                    description: "Primary tool for color grading and advanced editing.",
                },
                {
                    name: "Premiere Pro",
                    icon: "https://educate.io/images/Adobe_Premiere_Pro_CC_icon.svg-p-500.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
                {
                    name: "After Effects",
                    icon: "https://educate.io/images/Adobe_After_Effects_CC_icon.svg-p-500.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
                {
                    name: "Frame.io",
                    icon: "https://educate.io/images/20175-a3c7192a-b6e6-45f1-93ef-8c9a19eb89b3.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
            ],
            shouldNotApplyIf: [
                "You’re not comfortable with fast-paced environments.",
                "You prefer working in large, rigid corporate structures.",
                "You’re unwilling to adapt to evolving project requirements.",
            ],
            applyLink: "https://example.com/apply/video-editor",

        },
        {
            id: 4,
            slug: "customer-support",
            title: "Customer Support Representative",
            datePosted: "August 1, 2025",
            team: "Support",
            location: "Remote",
            type: "Full-time",
            image: "https://educate.io/images/Educate-p-1080.png",
            summary: "Be the first point of contact for our users and help solve their issues with care.",
            role: "Resolve customer issues via email and chat.",
            who: "A patient, empathetic problem-solver with excellent writing skills.",
            responsibilities: [
                "Respond to customer inquiries",
                "Document FAQs and solutions",
                "Collaborate with product teams to resolve issues",
            ],
            requirementsDetails: [
                {
                    title: "Clear Communication",
                    subtitle: "You must write well.",
                    description: "90% of your job is writing effective, kind, and helpful responses.",
                },
                {
                    title: "Tech Familiarity",
                    subtitle: "Know the tools we use.",
                    description: "Experience with helpdesk tools like Zendesk or Intercom is preferred.",
                },
                {
                    title: "Empathy Is Everything",
                    subtitle: "We want customers to feel heard.",
                    description: "You’ll help users feel valued even when they’re frustrated.",
                },
            ],
            tools: [
                {
                    name: "DaVinci Resolve",
                    icon: "https://educate.io/images/66f0575c21c901941eb32372_davinci-resolve-icon-p-500.png",
                    description: "You need to be a master of DaVinci Resolve. This will be your primary tool for colour grading and advanced editing. You must ensure that your vlogs are not only visually stunning but also colour-balanced and professionally polished.",
                },
                {
                    name: "Premiere Pro",
                    icon: "https://educate.io/images/Adobe_Premiere_Pro_CC_icon.svg-p-500.png",
                    description: "Being an expert in Premiere Pro is equally important. Your proficiency in Premiere Pro will set the foundation for our content, making your mastery of this tool essential for delivering high-quality videos.",
                },
                {
                    name: "After Effects",
                    icon: "https://educate.io/images/Adobe_After_Effects_CC_icon.svg-p-500.png",
                    description: "After Effects is your go-to tool for creating motion graphics and visual effects. You understand all of its features, specs, and functionalities to ensure that it seamlessly integrates into the final vlog.",
                },
                {
                    name: "Frame.io",
                    icon: "https://educate.io/images/20175-a3c7192a-b6e6-45f1-93ef-8c9a19eb89b3.png",
                    description: "Frame.io will be your main collaboration tool for feedback and project management. Allowing for efficient communication with the team and quick iterations for high-quality final products.",
                },
            ],
            shouldNotApplyIf: [
                "You dislike repetitive tasks.",
                "You get easily frustrated by user errors.",
            ],
            applyLink: "https://example.com/apply/customer-support",
        },
        {
            id: 5,
            slug: "south-african-talent",
            title: "South African Talent",
            datePosted: "July 25, 2025",
            team: "General",
            location: "Remote",
            type: "Full-time",
            image: "https://educate.io/images/Educate_1-p-1080.png",
            summary: "We're building a team of talented professionals in South Africa.",
            role: "Join our talent pool for upcoming roles.",
            who: "Motivated individuals from any discipline.",
            responsibilities: [
                "Work on cross-functional projects",
                "Collaborate across departments",
            ],
            requirementsDetails: [
                {
                    title: "Be Proactive",
                    subtitle: "We love self-starters.",
                    description: "You’ll need to manage your time well and seek out ways to contribute.",
                },
                {
                    title: "Strong Communication",
                    subtitle: "Remote work requires clarity.",
                    description: "Written and verbal communication skills are essential in our async-first environment.",
                },
                {
                    title: "Growth Mindset",
                    subtitle: "We care more about potential than experience.",
                    description: "Show us your hunger to learn, adapt, and thrive.",
                },
            ],
            tools: [
                {
                    name: "DaVinci Resolve",
                    icon: "https://educate.io/images/66f0575c21c901941eb32372_davinci-resolve-icon-p-500.png",
                    description: "Primary tool for color grading and advanced editing.",
                },
                {
                    name: "Premiere Pro",
                    icon: "https://educate.io/images/Adobe_Premiere_Pro_CC_icon.svg-p-500.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
                {
                    name: "After Effects",
                    icon: "https://educate.io/images/Adobe_After_Effects_CC_icon.svg-p-500.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
                {
                    name: "Frame.io",
                    icon: "https://educate.io/images/20175-a3c7192a-b6e6-45f1-93ef-8c9a19eb89b3.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
            ],
            shouldNotApplyIf: [
                "You're not based in South Africa",
                "You’re not interested in remote work",
                "You struggle with async communication",
            ],

            applyLink: "https://example.com/apply/south-african-talent",
        },
        {
            id: 6,
            slug: "thumbnail-designer",
            title: "Thumbnail Designer",
            datePosted: "August 3, 2025",
            team: "Creative",
            location: "Remote",
            type: "Full-time",
            image: "https://educate.io/images/Educate_2-p-1080.png",
            summary: "Design eye-catching thumbnails for YouTube and social media.",
            role: "Turn briefs into scroll-stopping visuals.",
            who: "A designer with a strong sense of composition and color.",
            responsibilities: [
                "Create 3-5 thumbnails per week",
                "Interpret branding requirements",
                "A/B test thumbnails with the content team"
            ],
            requirementsDetails: [
                {
                    title: "Edit Vlogs For YouTube",
                    subtitle: "Elevate our vlog content to the next level.",
                    description:
                        "You’ll collaborate closely with our lead editor, taking charge of editing several of our vlogs. Your role will be pivotal in ensuring that our team can efficiently manage multiple projects while maintaining the high-quality output our audience expects.",
                },
                {
                    title: "Create Captivating Visuals",
                    subtitle: "We need a visual storytelling expert.",
                    description:
                        "Our vlogs aren’t just about daily activities—they’re crafted narratives that need to captivate from start to finish. You’ll be responsible for incorporating motion graphics and visuals that enhance our storytelling, transforming raw footage into cinematic experiences that engage and entertain.",
                },
                {
                    title: "Collaborate on Creative Direction",
                    subtitle: "Your input will shape the vision.",
                    description:
                        "Work alongside our creative team to brainstorm, pitch, and execute new ideas for our content. You’ll help develop the tone, style, and pacing of our vlogs to ensure they align with our brand’s storytelling goals.",
                },
            ],

            tools: [
                {
                    name: "DaVinci Resolve",
                    icon: "https://educate.io/images/66f0575c21c901941eb32372_davinci-resolve-icon-p-500.png",
                    description: "Primary tool for color grading and advanced editing.",
                },
                {
                    name: "Premiere Pro",
                    icon: "https://educate.io/images/Adobe_Premiere_Pro_CC_icon.svg-p-500.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
                {
                    name: "After Effects",
                    icon: "https://educate.io/images/Adobe_After_Effects_CC_icon.svg-p-500.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
                {
                    name: "Frame.io",
                    icon: "https://educate.io/images/20175-a3c7192a-b6e6-45f1-93ef-8c9a19eb89b3.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
            ],
            shouldNotApplyIf: [
                "You’re not comfortable with fast-paced environments.",
                "You prefer working in large, rigid corporate structures.",
                "You’re unwilling to adapt to evolving project requirements.",
            ],
            applyLink: "https://example.com/apply/thumbnail-designer",

        },
        {
            id: 7,
            slug: "senior-copywriter",
            title: "Senior Copywriter",
            datePosted: "July 28, 2025",
            team: "Marketing",
            location: "Remote",
            type: "Full-time",
            image: "https://educate.io/images/Educate_3-p-1080.png",
            summary: "Craft compelling copy for campaigns and product launches.",
            role: "Collaborate with designers and marketers to tell our story.",
            who: "Someone who thinks in headlines and writes to convert.",
            responsibilities: [
                "Write long-form and short-form copy",
                "Support product and brand marketing",
                "Develop brand voice guidelines"
            ],
            requirementsDetails: [
                {
                    title: "Edit Vlogs For YouTube",
                    subtitle: "Elevate our vlog content to the next level.",
                    description:
                        "You’ll collaborate closely with our lead editor, taking charge of editing several of our vlogs. Your role will be pivotal in ensuring that our team can efficiently manage multiple projects while maintaining the high-quality output our audience expects.",
                },
                {
                    title: "Create Captivating Visuals",
                    subtitle: "We need a visual storytelling expert.",
                    description:
                        "Our vlogs aren’t just about daily activities—they’re crafted narratives that need to captivate from start to finish. You’ll be responsible for incorporating motion graphics and visuals that enhance our storytelling, transforming raw footage into cinematic experiences that engage and entertain.",
                },
                {
                    title: "Collaborate on Creative Direction",
                    subtitle: "Your input will shape the vision.",
                    description:
                        "Work alongside our creative team to brainstorm, pitch, and execute new ideas for our content. You’ll help develop the tone, style, and pacing of our vlogs to ensure they align with our brand’s storytelling goals.",
                },
            ],

            tools: [
                {
                    name: "DaVinci Resolve",
                    icon: "https://educate.io/images/66f0575c21c901941eb32372_davinci-resolve-icon-p-500.png",
                    description: "Primary tool for color grading and advanced editing.",
                },
                {
                    name: "Premiere Pro",
                    icon: "https://educate.io/images/Adobe_Premiere_Pro_CC_icon.svg-p-500.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
                {
                    name: "After Effects",
                    icon: "https://educate.io/images/Adobe_After_Effects_CC_icon.svg-p-500.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
                {
                    name: "Frame.io",
                    icon: "https://educate.io/images/20175-a3c7192a-b6e6-45f1-93ef-8c9a19eb89b3.png",
                    description: "Used for timeline editing and integration with motion graphics.",
                },
            ],
            shouldNotApplyIf: [
                "You’re not comfortable with fast-paced environments.",
                "You prefer working in large, rigid corporate structures.",
                "You’re unwilling to adapt to evolving project requirements.",
            ],
            applyLink: "https://example.com/apply/senior-copywriter",

        }

    ];
    const { id } = useParams();
    const job = jobs.find((job) => job.id.toString() === id);
    useEffect(() => {
        if (job?.title) {
            document.title = `${job.title} | Hiring Position`;
        }
    }, [job?.title]);

    if (!job) return <div className="job-not-found">Job not found.</div>;

    return (
        <>
            <Navbar />
            <Section className="job-section">
                <div className="job-container">
                    <Link to="/careers" className="job-back-link">
                        <ChevronLeft size={18} />
                        <span className="job-back-text">Open Roles</span>
                    </Link>

                    <h1 className="job-title">{job.title}</h1>
                    <div className="job-meta-wrapper">
                        <div className="job-meta">
                            {[
                                { label: "Date Posted", value: job.datePosted },
                                { label: "Team", value: job.team },
                                { label: "Location", value: job.location },
                                { label: "Type", value: job.type },
                            ].map((item, i) => (
                                <div key={i} className="job-meta-item">
                                    <p className="job-meta-item__label">{item.label}</p>
                                    <p className="job-meta-item__value">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {Array.isArray(job.image) ? (
                        <div className="job-images">
                            {job.image.map((img, i) => (
                                <img key={i} src={img} alt={`${job.title} ${i + 1}`} className="job-img" />
                            ))}
                        </div>
                    ) : (
                        job.image && (
                            <div className="job-images">
                                <img src={job.image} alt={job.title} className="job-img-wide" />
                            </div>
                        )
                    )}
                    <SectionBlock title="Job Summary">
                        <p>{job.summary}</p>
                    </SectionBlock>

                    <div className="job-sections">
                        {job.role && (
                            <SectionBlock title="Your Role">
                                {job.role.split("\n\n").map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </SectionBlock>
                        )}

                        <SectionBlock title="Ideal Candidate" isList>
                            {[
                                "Extensive experience with Adobe Premiere Pro or DaVinci Resolve",
                                "Proven track record in editing vlogs for YouTube",
                                "In-depth knowledge of color grading",
                                "Creates engaging content based on daily life and events",
                                "Familiarity with video compression and optimization",
                                "Expertise in motion graphics and animation tools like After Effects",
                                "Ability to work effectively with cross-functional teams",
                                "Experience with creating engaging content for YouTube",
                                "A strong attention to detail, and a passion for delivering high-quality vlog content",
                                "Strong leadership, communication, and problem-solving skills",
                                "Excellent debugging and performance optimization skills",
                            ]}
                        </SectionBlock>

                        <SectionBlock title="Requirements">
                            <div className="requirements-list">
                                {job.requirementsDetails.map((req, i) => (
                                    <div key={i} className={`requirement-item ${i % 2 === 0 ? "alt" : ""}`}>
                                        <h3>{req.title}</h3>
                                        <p className="subtitle">{req.subtitle}</p>
                                        <p className="desc">{req.description}</p>
                                    </div>
                                ))}
                            </div>
                        </SectionBlock>

                        <SectionBlock title="Tools">
                            <div className="tools-grid">
                                {job.tools.map((tool, i) => (
                                    <div key={i} className="tool-card">
                                        <img src={tool.icon} alt={tool.name} />
                                        <h3>{tool.name}</h3>
                                        <p>{tool.description}</p>
                                    </div>
                                ))}
                            </div>
                        </SectionBlock>

                        <SectionBlock title="What You'll Do">
                            <div className="task-grid">
                                {job.responsibilities.map((task, i) => (
                                    <div key={i} className="task-item">
                                        <h3>{String(i + 1).padStart(3, "0")}</h3>
                                        <p>{task}</p>
                                    </div>
                                ))}
                            </div>
                        </SectionBlock>

                        <SectionBlock title="You Shouldn’t Apply If" isList>
                            {job.shouldNotApplyIf}
                        </SectionBlock>

                        <SectionBlock title="">
                            <div className="apply-wrapper">
                                <div className="apply-banner">
                                    <h2>Think you're a fit? Apply Today</h2>
                                    <Link to={job.applyLink || "/apply"} className="apply-now-btn">
                                        APPLY NOW
                                    </Link>
                                </div>
                            </div>
                        </SectionBlock>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    );
}

function SectionBlock({ title, children, isList = false, isTags = false }) {
    return (
        <section className="section-block">
            <div className="section-grid">
                <h2 className="section-title">{title}</h2>
                <div className="section-content">
                    {isList ? (
                        <ul className="section-list">
                            {children.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    ) : isTags ? (
                        <div className="section-tags">
                            {children.map((tag, i) => (
                                <span key={i} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : (
                        children
                    )}
                </div>
            </div>
        </section>
    );
}
