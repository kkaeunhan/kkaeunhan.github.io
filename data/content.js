/* =========================================================
 * 사이트 내용은 전부 이 파일에서 수정합니다.
 * (HTML/CSS를 건드릴 필요 없이 여기 값만 바꾸면 반영돼요)
 * ========================================================= */
window.SITE = {
  name: "Kaeun Han",

  // 이름 아래 소속 줄 (여러 줄 가능)
  affiliations: [
    "Undergraduate Student · Ewha Womans University",
    "Engineer Intern · HD KSOE",
  ],

  // 프로필 사진: 이 경로에 사진 파일을 넣으세요
  photo: "images/profile/profile.jpg",

  // 자기소개 문단 (HTML 사용 가능)
  bio: [
    `I am a senior undergraduate student in Data Science at 
     <a href="https://www.ewha.ac.kr" target="_blank" rel="noopener">Ewha Womans University</a>,
     and an NX Platform Engineer Intern at
     <a href="https://www.hdksoe.co.kr" target="_blank" rel="noopener">HD Korea Shipbuilding &amp; Offshore Engineering (HD KSOE)</a>.
     Previously, I was a Data &amp; Analytics Intern at
     <a href="https://www.eventim.com/" target="_blank" rel="noopener">Eventim USA</a>.`,

    `My research interests lie at the intersection of computer vision and machine learning,
     with a particular focus on 3D vision and generative models. More recently, I have become
     interested in world models and physical simulation through my exposure to digital twins in industry.
     My goal is to build models that understand the physical world and enable practical
     intelligence in robotics.`,

    `If you have any questions or suggestions, please feel free to contact me via email
     (<a href="mailto:esther_han@i.ewha.ac.kr">esther_han@i.ewha.ac.kr</a>) or
     <a href="https://www.linkedin.com/in/kkaeunhan/" target="_blank" rel="noopener">LinkedIn</a>!`,
  ],

  // 프로필 아래 링크 (icon: images/icons/ 안의 파일 이름)
  links: [
    { label: "esther_han@i.ewha.ac.kr", url: "mailto:esther_han@i.ewha.ac.kr", icon: "email" },
    { label: "GitHub",   url: "https://github.com/kkaeunhan",            icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kkaeunhan/",  icon: "linkedin" },
    // { label: "Scholar", url: "https://scholar.google.com/...", icon: "scholar" },
  ],

  experience: [
    {
      org: "HD Korea Shipbuilding & Offshore Engineering (HD KSOE)",
      logo: "images/logos/hdksoe.png",
      logoText: "HD\nKSOE",   // 로고 파일이 없을 때 대신 보이는 글자
      role: "Engineer Intern, Next-Generation Integrated Platform Development Dept.",
      period: "2026.09 – Now",
      location: "Seongnam, Korea",
    },
    {
      org: "Eventim USA",
      logo: "images/logos/eventim.png",
      logoText: "eventim",
      role: "Data & Analytics Intern, Data Team",
      period: "2025.10 – 2025.12",
      location: "Beverly Hills, CA",
    },
  ],

  /* 논문이 생기면 아래 형식으로 추가하면 Publications 섹션이 자동으로 나타나요.
     비어 있으면 섹션 자체가 숨겨집니다. */
  publications: [
    // {
    //   title: "Paper Title",
    //   image: "images/title_img/paper.png",
    //   authors: "Author A, <b>Kaeun Han</b>, Author B",
    //   venue: "Conference (ABBR), 2027",
    //   links: { homepage: "https://...", github: "https://...", arxiv: "https://..." },
    // },
  ],

  education: [
    {
      title: "B.S. in Data Science @ Ewha Womans University",
      details: [
        "GPA: <b>4.36</b> / 4.5",
        "2023.03 – 2027.02 (expected) · Seoul, Korea",
      ],
    },
  ],

  // 제목 · 날짜, 그리고 아래 줄 설명
  honors: [
    { title: "Undergraduate Research Scholarship", date: "2026",
      details: ["Issued by Ewha Womans University, College of AI"] },
    { title: "National Excellence Scholarship for Science and Engineering", date: "2025 – Present",
      details: ["Issued by KOSAF (Korea Student Aid Foundation)"] },
    { title: "Jongha Scholarship", date: "2024",
      details: ["Issued by Jongha Scholarship Foundation (KCC)"] },
    { title: "Global Student Partnership", date: "2024",
      details: ["Ewha Womans University & Chinese University of Hong Kong (CUHK)"] },
    { title: "Academic Excellence Award (Dean's List)", date: "2023 – 2025",
      details: ["Issued by Ewha Womans University"] },
  ],

  activities: [
    { title: "C2 Proficiency Certificate, EC Boston", date: "2025",
      details: ["English Language Program (Boston, MA)"] },
    { title: "School Representative, Ewha-CUHK Global Student Partnership", date: "2024",
      details: ["Thesis - <i>The Future of AI: Opportunities and Challenges</i>"] },
    { title: "SQL Developer (SQLD)", date: "2023",
      details: ["Certificate issued by Korea Data Agency (K-DATA)"] },
    { title: "Student Council, College of AI", date: "2023",
      details: ["Public Relations Department"] },
  ],
};
