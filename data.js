// data.js
// This file contains all the content for your portfolio.
// You can edit the text, links, and details here anytime without touching the HTML.

const portfolioData = {
  // 1. Hero / Personal Information
  personalInfo: {
    name: "Bhavesh Modak",
    role: "AI & Data Science Undergraduate",
    bio: "Building AI/ML Projects in Computer Vision, NLP & Data Analytics. Completed a Diploma in AI & ML and currently pursuing a B.Tech. Passionate about machine learning, deep learning, and becoming a Future Data Scientist.",
    stats: [
      { label: "projects", value: "5+" },
      { label: "education", value: "B.Tech + Diploma" },
      { label: "focus", value: "AI / ML" }
    ]
  },

  // 2. Projects Section
  projects: [
    {
      title: "AI-Business-Data-Analyst",
      description: "An AI-powered business data analysis tool to extract insights and metrics from complex datasets.",
      techStack: ["Python", "Machine Learning", "Data Analysis"],
      metrics: "Live Data Processing",
      image: "images/ai_business_data_analyst_4x3.jpg",
      links: [
        { label: "GitHub", url: "https://github.com/Whitedevil20694/AI-Business-Data-Analyst" }
      ]
    },
    {
      title: "railwayEMS",
      description: "A comprehensive Employee Management System specifically designed for railway administration and workforce tracking.",
      techStack: ["Management System", "Database", "Backend"],
      metrics: "Streamlined Operations",
      image: "images/railwayEMS.jpg",
      links: [
        { label: "GitHub", url: "https://github.com/Whitedevil20694/railwayEMS" }
      ]
    },
    {
      title: "student_face_project",
      description: "A computer vision application for student face recognition and automated attendance management.",
      techStack: ["Python", "OpenCV", "Machine Learning"],
      metrics: "Automated Attendance",
      image: "images/student_face_project.jpg",
      links: [
        { label: "GitHub", url: "https://github.com/Whitedevil20694/student_face_project" }
      ]
    },
    {
      title: "AI Operating System",
      description: "An ambitious next-generation operating system driven by artificial intelligence. Currently in early development.",
      techStack: ["System Architecture", "AI Integration"],
      metrics: "Pending (20-30% Complete)",
      image: "images/ai_os_project.jpg",
      links: []
    },
    {
      title: "Object with Intent Detection",
      description: "Advanced computer vision project focused on not just detecting objects, but predicting their immediate intent or trajectory.",
      techStack: ["Computer Vision", "Deep Learning"],
      metrics: "Pending (20-30% Complete)",
      image: "images/intent_detection_project.jpg",
      links: []
    }
  ],

  // 3. Skills Section
  skills: [
    {
      category: "Programming & Databases",
      items: [
        { name: "Python", proficiency: 90 },
        { name: "Java", proficiency: 75 },
        { name: "PL/SQL", proficiency: 80 },
        { name: "C++", proficiency: 70 }
      ]
    },
    {
      category: "AI / ML & Frameworks",
      items: [
        { name: "TensorFlow & PyTorch", proficiency: 80 },
        { name: "OpenCV & YOLO", proficiency: 85 },
        { name: "Hugging Face Transformers", proficiency: 75 },
        { name: "Streamlit", proficiency: 85 }
      ]
    },
    {
      category: "Data & Soft Skills",
      items: [
        { name: "Data Analytics & Visualization", proficiency: 85 },
        { name: "Team Building & Teamwork", proficiency: 90 },
        { name: "Communication", proficiency: 90 },
        { name: "English, Hindi, Marathi, Japanese", proficiency: 80 }
      ]
    }
  ],

  // 4. Achievements / Timeline
  achievements: [
    {
      date: "Jul 2025 - Jun 2028",
      title: "B.Tech in Artificial Intelligence & Data Science",
      context: "Ajeenkya D Y Patil University",
      description: "Pursuing undergraduate studies with a focus on AI, Machine Learning, and Data Science."
    },
    {
      date: "Sep 2022 - Jun 2025",
      title: "Diploma in Artificial Intelligence & Machine Learning",
      context: "Rasikal M Dhariwal Institute of Technology",
      description: "Completed a 3-year diploma. Gained hands-on experience with Python, OpenCV, YOLO, TensorFlow, and deployment tools like Streamlit. Graduated with Grade: A+."
    },
    {
      date: "Sep 2025",
      title: "GenAI Powered Data Analytics",
      context: "Tata / Forage (Certification)",
      description: "Completed a job simulation involving data analysis and machine learning."
    },
    {
      date: "Jun 2024 - Jul 2024",
      title: "Student Intern",
      context: "Mesmerise Soft-Tech Private Limited",
      description: "Completed an internship focused on Artificial Intelligence and work-based learning."
    },
    {
      date: "Nov 2025 - Present",
      title: "Management Committee Member",
      context: "Qurians Club ADYPU",
      description: "Contributing to team building, communication, and organizing club activities."
    }
  ],

  // 5. Contact Section
  contact: {
    email: "bhaveskmodak24@gmail.com",
    links: [
      { platform: "GitHub", url: "https://github.com/Whitedevil20694" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/bhavesh-modak-070413331" },
      { platform: "Twitter/X", url: "https://x.com/Bhavesh841401" },
      { platform: "Resume", url: "resume.pdf" }
    ]
  }
};
