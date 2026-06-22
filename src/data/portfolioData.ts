import avatar from "../assets/images/avatar.png";
import flic from "../assets/images/flic.png"
import medicine from "../assets/images/Medicine-api.png"
import onlineTest from "../assets/images/Exam.png"
export const translations = {
  en: {
    personalInfo: {
      name: "Ngo Thanh Tuan",
      title: "Software Engineer",
      subtitle: "\"Small changes can have surprising results\"",
      about: "I am a final-year student at the Faculty of Computer Science, Vietnam – Korea University of Information and Communication Technology (VKU). Major: Software Engineering. GPA: 3.3/4.0",
      imageUrl: avatar
    },
    contact: {
      email: "thanhtuanhht0211@gmail.com",
      github: "https://github.com/Tuanngo-02",
      linkedin: "https://www.linkedin.com/in/thanhtuanngo/",
      resumeUrl: "https://drive.google.com/drive/u/0/folders/14DF6fk0lw3CATLdt50AK8e2aWGLh0x5p"
    },
    skills: [
      "Java",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Python",
      "MySQL",
      "AWS",
      "Git & GitHub"

    ],
    experience: [
      {
        id: 1,
        role: "Intern Backend Developer",
        company: "Foreign languages and informatics center - VKU",
        duration: "July 2025 - Sep 2025",
        description: "",
      },
      {
        id: 2,
        role: "Intern DevOps Engineer - AIOps Engineer",
        company: "Xbrain",
        duration: "Apr 2026 - Aug 2026",
        description: "",
      },
      {
        id: 3,
        role: "Intern Backend AI Engineer",
        company: "FlyRank AI",
        duration: "Jun 2026 - Present",
        description: "",
      }
    ],
    blogs: [
      {
        id: "1",
        title: "Understanding React Server Components",
        content: "React Server Components allow you to render components on the server, reducing the amount of JavaScript sent to the client. This leads to faster page loads and better SEO. In this post, we'll explore the basics of RSC and how to use them in your Next.js applications.",
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
        date: "2023-10-01"
      }
    ],
    projects: [
      {
        id: 1,
        title: "FLIC Information and Management System",
        description: "",
        techStack: ["React", "Java", "MySQL", "Tailwind CSS", "Docker"],
        imageUrl: flic,
        liveUrl: "https://drive.google.com/file/d/1U5Rj8WvE985q8Kvp1Dm3Qrg4LpBx0t8s/view",
        repoUrl: ""
      },
      {
        id: 2,
        title: "Medicine Service API",
        description: "",
        techStack: ["Spring Boot", "MySQL", "Docker", "Spring Security", "JWT", "Lombok", "Swagger"],
        imageUrl: medicine,
        liveUrl: "",
        repoUrl: "https://github.com/Tuanngo-02/Medicine-Service-API"
      },
      {
        id: 3,
        title: "Online Test Program",
        description: "",
        techStack: ["Java swing", "JDBC"],
        imageUrl: onlineTest,
        liveUrl: "https://www.youtube.com/watch?v=nBCo-Ogp3yA",
        repoUrl: "https://github.com/Tuanngo-02/ExamTest_UDP"
      }
    ],
    ui: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
      skillsTitle: "Skills & Technologies",
      experienceTitle: "Experience",
      latestBlogs: "Latest Blog Posts",
      readMore: "Read more",
      noBlogs: "No blog posts available."
    }
  },
  vi: {
    personalInfo: {
      name: "Ngo Thanh Tuan",
      title: "Kỹ sư Phần mềm",
      subtitle: "\"Những thay đổi nhỏ có thể mang lại kết quả bất ngờ\"",
      about: "Tôi là sinh viên năm cuối Khoa Khoa học Máy tính, Trường Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (VKU). Chuyên ngành: Kỹ thuật Phần mềm. GPA: 3.3/4.0",
      imageUrl: avatar
    },
    contact: {
      email: "thanhtuanhht0211@gmail.com",
      github: "https://github.com/Tuanngo-02",
      linkedin: "https://www.linkedin.com/in/thanhtuanngo/",
      resumeUrl: "https://drive.google.com/drive/u/0/folders/14DF6fk0lw3CATLdt50AK8e2aWGLh0x5p"
    },
    skills: [
      "Java",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Python",
      "MySQL",
      "AWS",
      "Git & GitHub"
    ],
    experience: [
      {
        id: 1,
        role: "Thực tập sinh Phát triển Backend",
        company: "Trung tâm Ngoại ngữ và Tin học - VKU",
        duration: "Tháng 7/2025 - Tháng 9/2025",
        description: "",
      },
      {
        id: 2,
        role: "Thực tập sinh Kỹ sư DevOps - Kỹ sư AIOps",
        company: "Xbrain",
        duration: "Tháng 4/2026 - Tháng 8/2026",
        description: "",
      },
      {
        id: 3,
        role: "Thực tập sinh Kỹ sư Backend AI",
        company: "FlyRank AI",
        duration: "Tháng 6/2026 - Hiện tại",
        description: "",
      }
    ],
    blogs: [
      {
        id: "1",
        title: "Tìm hiểu về React Server Components",
        content: "React Server Components cho phép bạn render các component ngay trên server, giảm thiểu lượng JavaScript gửi về client. Điều này giúp trang tải nhanh hơn và tối ưu SEO tốt hơn. Trong bài viết này, chúng ta sẽ khám phá các khái niệm cơ bản của RSC và cách áp dụng chúng vào ứng dụng Next.js của bạn.",
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
        date: "01/10/2023"
      }
    ],
    projects: [
      {
        id: 1,
        title: "Hệ thống Quản lý và Thông tin FLIC",
        description: "",
        techStack: ["React", "Java", "MySQL", "Tailwind CSS", "Docker"],
        imageUrl: flic,
        liveUrl: "https://drive.google.com/file/d/1U5Rj8WvE985q8Kvp1Dm3Qrg4LpBx0t8s/view",
        repoUrl: ""
      },
      {
        id: 2,
        title: "Medicine Service API",
        description: "",
        techStack: ["Spring Boot", "MySQL", "Docker", "Spring Security", "JWT", "Lombok", "Swagger"],
        imageUrl: medicine,
        liveUrl: "",
        repoUrl: "https://github.com/Tuanngo-02/Medicine-Service-API"
      },
      {
        id: 3,
        title: "Chương trình Thi Trực tuyến",
        description: "",
        techStack: ["Java swing", "JDBC"],
        imageUrl: onlineTest,
        liveUrl: "https://www.youtube.com/watch?v=nBCo-Ogp3yA",
        repoUrl: "https://github.com/Tuanngo-02/ExamTest_UDP"
      }
    ],
    ui: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      blog: "Bài viết",
      contact: "Liên hệ",
      viewProjects: "Xem dự án",
      downloadResume: "Tải CV",
      skillsTitle: "Kỹ năng & Công nghệ",
      experienceTitle: "Kinh nghiệm làm việc",
      latestBlogs: "Bài viết mới nhất",
      readMore: "Đọc thêm",
      noBlogs: "Hiện tại chưa có bài viết nào."
    }
  }
};
