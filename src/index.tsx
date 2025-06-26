import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import emailjs from 'emailjs-com';

const MAROON = "#800000";
const WHITE = "#fff";

// --- Full Texts and Images of Famous Letters ---
const letters = [
  {
    title: "Einstein–Szilard Letter to President Franklin D. Roosevelt (1939)",
    author: "Leo Szilard & Albert Einstein",
    recipient: "President Franklin D. Roosevelt",
    purpose: "Urged urgent U.S. action to develop atomic weapons, fearing Nazi Germany would get there first.",
    impact: "Directly led to the formation of the Manhattan Project, revolutionizing global warfare and policy.",
    excerpt: "Dear Sir: Some recent work by E. Fermi and L. Szilard, which has been communicated to me in manuscript, leads me to expect that the element uranium may be turned into a new and important source of energy in the immediate future. Certain aspects of the situation which has arisen seem to call for watchfulness and if necessary, quick action on the part of the Administration. I believe therefore that it is my duty to bring to your attention the following facts and recommendations. In the course of the last four months it has been made probable through the work of Joliot in France as well as Fermi and Szilard in America--that it may be possible to set up a nuclear chain reaction in a large mass of uranium, by which vast amounts of power and large quantities of new radium-like elements would be generated. Now it appears almost certain that this could be achieved in the immediate future. This new phenomenon would also lead to the construction of bombs, and it is conceivable--though much less certain--that extremely powerful bombs of this type may thus be constructed. A single bomb of this type, carried by boat and exploded in a port, might very well destroy the whole port together with some of the surrounding territory. However, such bombs might very well prove too heavy for transportation by air. The United States has only very poor ores of uranium in moderate quantities. There is some good ore in Canada and former Czechoslovakia, while the most important source of uranium is in the Belgian Congo. In view of this situation you may think it desirable to have some permanent contact maintained between the Administration and the group of physicists working on chain reactions in America. One possible way of achieving this might be for you to entrust the task with a person who has your confidence and who could perhaps serve in an unofficial capacity. "
  },
  {
    title: "J'Accuse…! by Émile Zola to French President Félix Faure (1898)",
    author: "Émile Zola",
    recipient: "President Félix Faure",
    purpose: "Denounced the military and judiciary for wrongfully convicting Captain Alfred Dreyfus due to antisemitism.",
    impact: "Sparked the Dreyfus Affair, triggering legal reforms and solidifying the power of the press and civil society in politics.",
    excerpt: "Mr. President,Would you allow me, in my gratitude for the benevolent reception that you gave me one day, to draw the attention of your rightful glory and to tell you that your star, so happy until now, is threatened by the most shameful and most ineffaceable of blemishes? You have passed healthy and safe through base calumnies; you have conquered hearts. You appear radiant in the apotheosis of this patriotic festival that the Russian alliance was for France, and you prepare to preside over the solemn triumph of our World Fair, which will crown our great century of work, truth and freedom. But what a spot of mud on your name—I was going to say on your reign—is this abominable Dreyfus affair! A council of war, under order, has just dared to acquit Esterhazy, a great blow to all truth, all justice. And it is finished, France has this stain on her cheek, History will write that it was under your presidency that such a social crime could be committed. Since they dared, I too will dare. The truth I will say, because I promised to say it, if justice, regularly seized, did not do it, full and whole. My duty is to speak, I do not want to be an accomplice. My nights would be haunted by the specter of innocence that suffer there, through the most dreadful of tortures, for a crime it did not commit. And it is to you, Mr. President, that I will proclaim it, this truth, with all the force of the revulsion of an honest man. For your honour, I am convinced that you are unaware of it. And with whom will I thus denounce the criminal foundation of these guilty truths, if not with you, the first magistrate of the country?"
  },
  {
    title: "Letter from Birmingham Jail by Martin Luther King Jr. (1963)",
    author: "Martin Luther King Jr.",
    recipient: "White clergy & broader public",
    purpose: "Defended nonviolent protest in the face of systemic racial segregation and legal injustice.",
    impact: "Widely circulated and pivotal in accelerating support for the Civil Rights Act of 1964.",
    excerpt: "My Dear Fellow Clergymen: While confined here in the Birmingham city jail, I came across your recent statement calling my present activities unwise and untimely. Seldom do I pause to answer criticism of my work and ideas. If I sought to answer all the criticisms that cross my desk, my secretaries would have little time for anything other than such correspondence in the course of the day, and I would have no time for constructive work. But since I feel that you are men of genuine good will and that your criticisms are sincerely set forth, I want to try to answer your statement in what I hope will be patient and reasonable terms. I think I should indicate why I am here in Birmingham, since you have been influenced by the view which argues against outsiders coming in. I have the honor of serving as president of the Southern Christian Leadership Conference, an organization operating in every southern state, with headquarters in Atlanta, Georgia. We have some eighty five affiliated organizations across the South, and one of them is the Alabama Christian Movement for Human Rights. Frequently we share staff, educational and financial resources with our affiliates. Several months ago the affiliate here in Birmingham asked us to be on call to engage in a nonviolent direct action program if such were deemed necessary. We readily consented, and when the hour came we lived up to our promise. So I, along with several members of my staff, am here because I was invited here. I am here because I have organizational ties here. But more basically, I am in Birmingham because injustice is here."
  },
  {
    title: "Letter of the Eight (2003)",
    author: "Eight European Leaders",
    recipient: "Global public & UN Security Council",
    purpose: "Urged solidarity with the U.S. in its tough stance on Iraq, signed by eight European leaders.",
    impact: "Caused major diplomatic realignment within the EU, with long-term consequences for transatlantic policy.",
    excerpt: "The real bond between the United States and Europe is the values we share: democracy, individual freedom, human rights and the Rule of Law. These values crossed the Atlantic with those who sailed from Europe to help create the USA. Today they are under greater threat than ever. The attacks of 11 September showed just how far terrorists - the enemies of our common values - are prepared to go to destroy them. Those outrages were an attack on all of us. In standing firm in defense of these principles, the governments and people of the United States and Europe have amply demonstrated the strength of their convictions. Today more than ever, the transatlantic bond is a guarantee of our freedom. We in Europe have a relationship with the United States which has stood the test of time. Thanks in large part to American bravery, generosity and far-sightedness, Europe was set free from the two forms of tyranny that devastated our continent in the 20th century: Nazism and Communism. Thanks, too, to the continued cooperation between Europe and the United States we have managed to guarantee peace and freedom on our continent. The transatlantic relationship must not become a casualty of the current Iraqi regime's persistent attempts to threaten world security. In today's world, more than ever before, it is vital that we preserve that unity and cohesion. We know that success in the day-to-day battle against terrorism and the proliferation of weapons of mass destruction demands unwavering determination and firm international cohesion on the part of all countries for whom freedom is precious. The Iraqi regime and its weapons of mass destruction represent a clear threat to world security. This danger has been explicitly recognized by the United Nations. All of us are bound by Security Council Resolution 1441, which was adopted unanimously."
  },
  {
    title: "Open Letter to Mikhail Gorbachev by Nobel Laureates (1990)",
    author: "Nobel Laureates",
    recipient: "Soviet leader Mikhail Gorbachev",
    purpose: "Proposed land-value taxation as a transition model during USSR economic restructuring.",
    impact: "Contributed to tax reform dialogue in Russia, Ukraine, and Estonia—adoption of LVT in post-Soviet economies.",
    excerpt: "Dear Mr. Gorbachev, The movement of the Soviet Union to a market economy will greatly enhance the prosperity of your citizens. Your economists have learned much from the experience of nations with economies based in varying degrees on free markets. Your plans for freely convertible currency, free trade, and enterprises undertaken and managed by individuals who receive the profit or bear the losses that result from their decisions are all highly commendable. But there is a danger that you will adopt features of our economies that keep us from being as prosperous as we might be. In particular, there is a danger that you may follow us in allowing most of the rent of land to be collected privately. It is important that the rent of land be retained as a source of government revenue. While the governments of developed nations with market economies collect some of the rent of land in taxes, they do not collect nearly as much as they could, and they therefore make unnecessarily great use of taxes that impede their economies – taxes on such things as incomes, sales and the value of capital. Social collection of the rent of land and natural resources serves three purposes: First, it guarantees that no one dispossesses fellow citizens by obtaining a disproportionate share of what nature provides for humanity. Second, it provides revenue with which governments can pay for socially valuable activities without discouraging capital formation or work effort, or interfering in other ways with the efficient allocation of resources.Third, the resulting revenue permits utility and other services that have marked economies of scale or density to be priced at levels conducive to their efficient use.The rental value of land arises from three sources. The first is the inherent natural productivity of land, combined with the fact that land is limited. The second source of land value is the growth of communities; the third is the provision of public services."
  },
  {
    title: "Open Letter to President Woodrow Wilson by Carrie Chapman Catt (1917)",
    author: "Carrie Chapman Catt",
    recipient: "President Woodrow Wilson",
    purpose: "Urged him to support women's suffrage in the United States.",
    impact: "Contributed significantly to the eventual passage of the 19th Amendment (1920), granting women the right to vote.",
    excerpt: "Woman suffrage is inevitable. Suffragists knew it before November 6, 1917; opponents afterward. Three distinct causes make it inevitable. (1) The history of our country. Ours is a nation born of revolution; of rebellion against a system of government so securely entrenched in the customs and traditions of human society that in 1776 it seemed impregnable. From the beginning of things nations had been ruled by kings and for kings, while the people served and paid the cost. The American Revolutionists boldly proclaimed the heresies: Taxation without representation is tyranny. Governments derive their just powers from the consent of the governed. Our Theories Make Woman Suffrage Inevitable The Colonists won and the nation which was established as a result of their victory has held unfailingly that these two fundamental principles of democratic government are not only the spiritual source of our national existence but have been our chief historic pride and at all times the sheer anchor of our liberties. Eighty years after the Revolution Abraham Lincoln welded those two maxims into a new one: Ours is a government of the people, by the people and for the people. Fifty years more passed an the President of the United States, Woodrow Wilson, in a mighty crisis of the nation, proclaimed to the world: We are fighting for the things which we have always carried nearest our hearts- for democracy, for the right of those who submit to authority to have a voice in their own government. All the way between these immortal aphorisms political leaders have declared unabated faith in their truth. Not one American has arisen to question their logic in the one hundred and forty-one years of our national existence. However stupidly our country may have evaded the logical application at times, it has never swerved from its devotion to the theory of democracy as expressed by those two axioms."
  }
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

function LetterAvatar({ image, author }: { image: string; author: string }) {
  const [imgError, setImgError] = React.useState(false);
  if (!imgError) {
    return (
      <img
        src={image}
        alt={author}
        style={{
          width: 80,
          height: 80,
          objectFit: "cover",
          borderRadius: "50%",
          border: "3px solid #4f46e5"
        }}
        onError={() => setImgError(true)}
      />
    );
  }
  return (
    <div
      style={{
        width: 80,
        height: 80,
        borderRadius: "50%",
        background: "#f3f4f6",
        border: "3px solid #4f46e5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 18,
        color: "#4f46e5"
      }}
    >
      {getInitials(author)}
    </div>
  );
}

// --- Shared Navigation ---
function MainNav({ setShowHowTo, setShowHistory, setShowGetInvolved, setShowDashboard }: { setShowHowTo: (b: boolean) => void, setShowHistory: (b: boolean) => void, setShowGetInvolved: (b: boolean) => void, setShowDashboard: (b: boolean) => void }) {
  const handleNav = (target: string) => {
    setShowHowTo(false);
    setShowHistory(false);
    setShowGetInvolved(false);
    setShowDashboard(false);
    setTimeout(() => {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  return (
    <nav style={{ background: "#800000", color: "#fff", padding: "20px 0", marginBottom: 32, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", marginRight: 48, cursor: "pointer" }} onClick={() => { setShowHowTo(false); setShowHistory(false); setShowGetInvolved(false); setShowDashboard(false); }}>
          <img src="/logo.png" alt="Voice for Change Logo" style={{ height: 48, marginRight: 16 }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span style={{ fontWeight: 800, fontSize: 28, color: "#fff", lineHeight: 1 }}>Voice for Change</span>
            <span style={{ fontSize: 14, color: "#fff", opacity: 0.7, marginTop: 2, marginLeft: 2, letterSpacing: 0.5 }}>An Open Letter Forum</span>
          </div>
        </div>
        <a href="#howto" className="nav-link" style={navLinkStyle} onClick={e => { e.preventDefault(); setShowHowTo(true); setShowHistory(false); setShowGetInvolved(false); setShowDashboard(false); }}>
          How to Write an Open Letter
        </a>
        <a href="#history" className="nav-link" style={navLinkStyle} onClick={e => { e.preventDefault(); setShowHowTo(false); setShowHistory(true); setShowGetInvolved(false); setShowDashboard(false); }}>
          Open Letters in History
        </a>
        <a href="#getinvolved" className="nav-link" style={navLinkStyle} onClick={e => { e.preventDefault(); setShowHowTo(false); setShowHistory(false); setShowGetInvolved(true); setShowDashboard(false); }}>
          Get Involved
        </a>
        <a href="#dashboard" className="nav-link" style={navLinkStyle} onClick={e => { e.preventDefault(); setShowHowTo(false); setShowHistory(false); setShowGetInvolved(false); setShowDashboard(true); }}>
          Dashboard
        </a>
      </div>
    </nav>
  );
}

// --- Custom Thank You Modal ---
function ThankYouModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.4)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#800000', // UChicago maroon
        color: '#fff',
        borderRadius: 16,
        padding: '40px 32px 32px 32px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        maxWidth: 400,
        textAlign: 'center',
        position: 'relative',
      }}>
        <h2 style={{ fontWeight: 800, fontSize: 26, marginBottom: 16 }}>Thank You for Using Your Voice!</h2>
        <p style={{ fontSize: 18, marginBottom: 24 }}>
          Your Open Letter has been submitted to Voice for Change.<br />We appreciate your commitment to making a difference.
        </p>
        <button onClick={onClose} style={{
          background: '#fff',
          color: '#800000',
          border: 'none',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: 16,
          padding: '10px 24px',
          cursor: 'pointer',
          marginTop: 8,
        }}>Close</button>
      </div>
    </div>
  );
}

// --- Footer Component ---
function Footer() {
  return (
    <footer style={{
      background: "#800000",
      color: "#fff",
      padding: "40px 0",
      marginTop: 64,
      textAlign: "center"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>Contact Us</h3>
        <p style={{ fontSize: 18, marginBottom: 8 }}>
          Have questions or suggestions? We'd love to hear from you!
        </p>
        <a 
          href="mailto:leadership@openletter.co.in"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: 18,
            fontWeight: 500,
            display: "inline-block",
            padding: "8px 16px",
            border: "2px solid #fff",
            borderRadius: 8,
            transition: "all 0.2s ease"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = "#800000";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#fff";
          }}
        >
          leadership@openletter.co.in
        </a>
      </div>
    </footer>
  );
}

// --- Dashboard Stats Component ---
function DashboardStats() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 32, marginBottom: 40 }}>
      <div style={{ background: "#fff", color: "#800000", borderRadius: 16, padding: 32, minWidth: 220, textAlign: "center", boxShadow: "0 2px 12px rgba(128,0,0,0.10)", border: "2px solid #800000" }}>
        <div style={{ fontSize: 48, fontWeight: 800, marginBottom: 8 }}>600+</div>
        <div style={{ fontSize: 20, fontWeight: 600 }}>Letters Received</div>
      </div>
      <div style={{ background: "#fff", color: "#800000", borderRadius: 16, padding: 32, minWidth: 220, textAlign: "center", boxShadow: "0 2px 12px rgba(128,0,0,0.10)", border: "2px solid #800000" }}>
        <div style={{ fontSize: 48, fontWeight: 800, marginBottom: 8 }}>80+</div>
        <div style={{ fontSize: 20, fontWeight: 600 }}>Replies Received</div>
      </div>
    </div>
  );
}

function App() {
  const [showHistory, setShowHistory] = useState(false);
  const [showHowTo, setShowHowTo] = useState(false);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [lettersSubmitted, setLettersSubmitted] = useState<
    { name: string; recipient: string; content: string }[]
  >([]);
  const [form, setForm] = useState({
    name: "",
    recipient: "",
    content: "",
    email: ""
  });
  const [showThankYou, setShowThankYou] = useState(false);

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_u8lrg7k', // Service ID (Outlook)
      'template_b9xez9s', // Template ID
      {
        from_name: form.name,
        recipient: form.recipient,
        content: form.content,
        user_email: form.email, // This will be used for CC
      },
      '63WjLbmftoOjaUu9U' // Public Key
    ).then(
      (result) => {
        setShowThankYou(true);
        setLettersSubmitted([{ ...form }, ...lettersSubmitted]);
        setForm({ name: '', recipient: '', content: '', email: '' });
      },
      (error) => {
        alert('There was an error sending your letter. Please try again.');
      }
    );
  };

  // --- History Page ---
  if (showHistory) {
    return (
      <div style={{ background: "#800000", minHeight: "100vh" }}>
        <MainNav setShowHowTo={setShowHowTo} setShowHistory={setShowHistory} setShowGetInvolved={setShowGetInvolved} setShowDashboard={setShowDashboard} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
          <h1 style={{ 
            fontSize: 36, 
            fontWeight: 800, 
            marginBottom: 32,
            background: "linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Historically Impactful Open Letters
          </h1>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: 24 
          }}>
            {letters.map((letter, idx) => (
              <div key={idx} className="letter-card" style={{ 
                background: WHITE,
                padding: 24,
                borderRadius: 16,
                boxShadow: `0 4px 6px rgba(128,0,0,0.08)`,
                border: `1.5px solid ${MAROON}`,
                color: MAROON,
                marginBottom: 8
              }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: MAROON }}>{letter.title}</h2>
                <div style={{ fontWeight: 500, marginBottom: 4 }}>By: {letter.author}</div>
                <div style={{ fontStyle: "italic", marginBottom: 4 }}>To: {letter.recipient}</div>
                <div style={{ marginBottom: 4 }}><b>Purpose:</b> {letter.purpose}</div>
                <div style={{ marginBottom: 4 }}><b>Impact:</b> {letter.impact}</div>
                <div style={{ background: "#f8f8fa", color: MAROON, borderLeft: `4px solid ${MAROON}`, padding: 12, borderRadius: 8, fontStyle: "italic", marginTop: 8 }}>
                  <span style={{ fontWeight: 600 }}>Excerpt:</span> {letter.excerpt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- How to Write an Open Letter Page ---
  if (showHowTo) {
    return (
      <div style={{ background: "#800000", minHeight: "100vh" }}>
        <MainNav setShowHowTo={setShowHowTo} setShowHistory={setShowHistory} setShowGetInvolved={setShowGetInvolved} setShowDashboard={setShowDashboard} />
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 32, color: "#fff" }}>
            Learning How to Write an Open Letter
          </h1>
          <div>
            {[
              {
                title: "Step 1: Choose a Topic and Theme",
                content: "As is required for any essay, your Open Letter must have a topic and theme. What caused you to write this letter in the first place? From Education Policy, Rural Development, Climate Change, or Economic Policy - each of us have our own causes that we feel strongly about, to write a powerful and meaningful letter, choose the idea that is most important to you."
              },
              {
                title: "Step 2: Choose your Leader",
                content: "Who is currently in a position of power to hear you out, for better or for worse? It could be your local MLA, the Education Secretary for the Union, a CEO, or an industry leader. To create change, it is essential to write to someone who holds power. Note, Voice For Change operates on a student-to-policymaker basis, within India. Please focus on topics of national, regional, state, corporate, or communal importance, and represent your cause to your desired leader with conviction."
              },
              {
                title: "Step 3: Write an Argumentative Essay in the Format of a Letter",
                content: "The goal of an Open Letter, as discussed, is to draw public attention and highlight certain information. This can be in the form of recognising the Government of India's efforts to facilitate Quality Higher Education (QHE) among lower-income students through the PM Vidyalakshmi Scheme, with the goal of encouraging continuity, or acknowledging corporate initiatives in education and development. Further, this can also be in the form of recommending your own area of policy which you believe requires more attention, with suggestions on what action to take. Note, that inflammatory comments or defamation are often counterproductive in creating change."
              },
              {
                title: "Step 4: Submit!",
                content: "After confirming your Letter has a convincing cause, is addressed to an Indian Policymaker (at any scale), and most importantly - is related to an issue you deeply care about - submit it to Voice for Change and wait for us to connect with the person you wrote to and take your cause forward. All credit remains with the original writer, and Voice for Change only aspires to encourage students to channel their own narrative voice, and recognise the power they hold."
              }
            ].map((step, idx) => (
              <div key={idx} style={{
                background: "#fff",
                color: "#800000",
                borderRadius: 16,
                boxShadow: "0 2px 12px rgba(128,0,0,0.10)",
                border: "2px solid #800000",
                marginBottom: 32,
                padding: 0,
                overflow: "hidden"
              }}>
                <div style={{ display: "flex", alignItems: "center", padding: "20px 28px 0 28px" }}>
                  <span style={{
                    background: "#800000",
                    color: "#fff",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    fontWeight: 700,
                    marginRight: 18
                  }}>{idx + 1}</span>
                  <span style={{ fontWeight: 700, fontSize: 22 }}>{step.title}</span>
                </div>
                <div style={{ background: "#fff", color: "#800000", padding: "18px 28px 24px 28px", fontSize: 16, lineHeight: 1.6 }}>
                  {step.content}
                </div>
              </div>
            ))}
          </div>
          <section id="howto-form" style={{ marginTop: 48 }}>
            <h2 className="section-title" style={{ color: "#fff", fontSize: 28, fontWeight: 700, marginBottom: 24 }}>Submit Your Own Open Letter</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, background: "#800000", padding: 32, borderRadius: 12, boxShadow: "0 4px 6px rgba(255,255,255,0.05)", color: "#fff", fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
              <input
                name="recipient"
                placeholder="Recipient (e.g., MLA, MP, Education Secretary, CEO, Industry Leader, etc.)"
                value={form.recipient}
                onChange={handleChange}
                required
                style={inputStyle}
              />
              <textarea
                name="content"
                placeholder="Write your open letter here..."
                value={form.content}
                onChange={handleChange}
                required
                style={{ ...inputStyle, minHeight: 200, resize: "vertical" }}
              />
              <button type="submit" style={{ padding: "12px 24px", background: "#fff", color: "#800000", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease" }}>
                Submit Your Letter
              </button>
            </form>
          </section>
        </div>
      </div>
    );
  }

  // --- Get Involved Page ---
  if (showGetInvolved) {
    return (
      <div style={{ background: "#800000", minHeight: "100vh" }}>
        <MainNav setShowHowTo={setShowHowTo} setShowHistory={setShowHistory} setShowGetInvolved={setShowGetInvolved} setShowDashboard={setShowDashboard} />
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
          <h2 className="section-title" style={sectionTitleStyle}>Get Involved - Write Your Own Open Letter</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, background: "#800000", padding: 32, borderRadius: 12, boxShadow: "0 4px 6px rgba(255,255,255,0.05)", color: "#fff", fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              name="recipient"
              placeholder="Recipient (e.g., MLA, MP, Education Secretary, CEO, Industry Leader, etc.)"
              value={form.recipient}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <textarea
              name="content"
              placeholder="Write your open letter here..."
              value={form.content}
              onChange={handleChange}
              required
              style={{ ...inputStyle, minHeight: 200, resize: "vertical" }}
            />
            <button type="submit" style={{ padding: "12px 24px", background: "#fff", color: "#800000", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease" }}>
              Submit Your Letter
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- Dashboard Page ---
  if (showDashboard) {
    return (
      <div style={{ background: "#800000", minHeight: "100vh" }}>
        <MainNav setShowHowTo={setShowHowTo} setShowHistory={setShowHistory} setShowGetInvolved={setShowGetInvolved} setShowDashboard={setShowDashboard} />
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 24, color: "#fff" }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 32, color: "#fff", textAlign: "center" }}>Dashboard</h1>
          <DashboardStats />
          <div style={{ background: "#fff3cd", color: "#856404", borderRadius: 12, padding: 24, fontSize: 20, fontWeight: 600, textAlign: "center", border: "2px solid #ffeeba" }}>
            🚀 <span>Impact page coming soon! Stay tuned for stories of real change.</span>
          </div>
        </div>
      </div>
    );
  }

  // --- Home Page ---
  return (
    <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", background: "#800000", minHeight: "100vh", color: "#fff" }}>
      <MainNav setShowHowTo={setShowHowTo} setShowHistory={setShowHistory} setShowGetInvolved={setShowGetInvolved} setShowDashboard={setShowDashboard} />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
        <section style={{ marginBottom: 40, textAlign: "center" }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 24, color: "#fff", textAlign: 'center' }}>
            Voice for Change: A platform where our voices can shape a better world.
          </h1>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: 20, color: "#fff", marginBottom: 24, textAlign: 'center', lineHeight: 1.6 }}>
              Open Letters have been utilised since the Ancient Greeks to draw the public's attention to key issues of the time. Ever since, these letters have been a driving force in representing the people's voice, a true pinnacle of democracy.
            </p>
            <p style={{ fontSize: 20, color: "#fff", marginBottom: 24, textAlign: 'center', lineHeight: 1.6 }}>
              Open Letters are intended to be a letter from an ordinary citizen of the state to any high-ranking government individual, influential public figure, CEO, industry leader, or anybody in a position of power or authority. Although written by only one person, they represent the collective voice of the community that the person speaks on behalf of, including regional communities, economic groups, students, and marginalised communities, as well as victims of injustice.
            </p>
            <p style={{ fontSize: 20, color: "#fff", marginBottom: 24, textAlign: 'center', lineHeight: 1.6 }}>
              At its heart, the goal of an Open Letter is to draw public attention. It is a powerful reminder of the state operating "for the people", underscoring the effectiveness, both positively and negatively, of government policies and actions. By harnessing public opinion, they are an insurmountable force for change, based on the premise of ultimate accountability of all leaders to their people.
            </p>
            <p style={{ fontSize: 20, color: "#fff", marginBottom: 24, textAlign: 'center', lineHeight: 1.6 }}>
              This platform provides you with guidelines on how to choose what you write an Open Letter on, whom you write it to, and how you should go about the entire process. To supplement this, you can refer to Open Letters that have been extremely impactful in the change they have brought about - from Martin Luther King Jr. in the backdrop of the Civil Rights Movement, to Albert Einstein's warning issued to the US Government on the Axis Powers developing the Atomic Bomb. As a result, hopefully, each of you will leave this page more confident in your ability to use your voice for causes that matter to you.
            </p>
            <p style={{ fontSize: 20, color: "#fff", marginBottom: 24, textAlign: 'center', lineHeight: 1.6 }}>
              Today, this is more important than ever. It is important to remind ourselves that our voice matters, and by utilising it effectively, we can bring change. From Education Policy to Rural Development, from Corporate Social Responsibility to Environmental Sustainability, Voice For Change aspires to use this platform to communicate received Open Letters with relevant MLAs, MPs, and Members of State and Union Governments, CEOs, and industry leaders, and it begins with your own voice. By sending in letters and engaging with policymakers and leaders across sectors, each of you plays a role in transforming the community and society around you. Get involved now.
            </p>
          </div>
        </section>
        <DashboardStats />
        <section id="howto" style={{ marginBottom: 40 }}>
          {/* How to Write an Open Letter section remains as before */}
        </section>
        <section id="getinvolved" style={{ marginBottom: 40 }}>
          <h2 className="section-title" style={sectionTitleStyle}>Get Involved - Write Your Own Open Letter</h2>
          <div style={{ color: "#fff", fontSize: 18, marginBottom: 24 }}>
            <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, margin: "16px 0 8px 0" }}>How This Works</h3>
            <p style={{ marginBottom: 12 }}>
              After you submit your open letter, according to our guidelines, Voice for Change will actively work to connect you with the relevant policymaker, CEO, industry leader, or any other influential individual who can help bring about the change you sought out with your Open Letter. We are committed to championing student voices and ensuring your message reaches those who are in a position to make a difference.
            </p>
            <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, margin: "16px 0 8px 0" }}>Why Get Involved?</h3>
            <p>
              By participating in Voice for Change, you can benefit from our credibility from our past engagement with policymakers, corporate leaders, and industry experts. We aspire to leverage our network to amplify your voice, ensuring each of us can enact real change across all sectors of society.
            </p>
          </div>
          <p style={{ color: "#fff", fontSize: 18, marginBottom: 16 }}>
            Ready to make your voice heard? Use the form below to submit your own open letter. Your letter will be reviewed and, if appropriate, shared with relevant policymakers and the public.
          </p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, background: "#800000", padding: 32, borderRadius: 12, boxShadow: "0 4px 6px rgba(255,255,255,0.05)", color: "#fff", fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              name="recipient"
              placeholder="Recipient (e.g., MLA, MP, Education Secretary, CEO, Industry Leader, etc.)"
              value={form.recipient}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <textarea
              name="content"
              placeholder="Write your open letter here..."
              value={form.content}
              onChange={handleChange}
              required
              style={{ ...inputStyle, minHeight: 200, resize: "vertical" }}
            />
            <button type="submit" style={{ padding: "12px 24px", background: "#fff", color: "#800000", border: "none", borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease" }}>
              Submit Your Letter
            </button>
          </form>
        </section>
      </main>
      <Footer />
      <ThankYouModal open={showThankYou} onClose={() => setShowThankYou(false)} />
    </div>
  );
}

// Updated styles with proper TypeScript types
const navLinkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  marginRight: 24,
  fontSize: 16,
  fontWeight: 500,
  padding: "8px 16px",
  borderRadius: 20,
  transition: "all 0.3s ease"
};

const sectionStyle: React.CSSProperties = {
  background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
  borderRadius: 16,
  padding: 32,
  marginBottom: 40,
  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  border: "1px solid rgba(0,0,0,0.05)"
};

const sectionTitleStyle: React.CSSProperties = {
  fontSize: 28,
  fontWeight: 700,
  marginBottom: 24,
  color: "#1a1a1a",
  position: "relative" as const,
  paddingBottom: 12
};

const inputStyle: React.CSSProperties = {
  padding: "12px 16px",
  borderRadius: 8,
  border: "1px solid #e2e8f0",
  fontSize: 16,
  transition: "all 0.3s ease"
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);