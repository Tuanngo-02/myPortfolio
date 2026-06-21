import avatar from "../assets/images/avatar.png";

export const translations = {
  en: {
    personalInfo: {
      name: "Ngo Thanh Tuan",
      title: "Software Engineer",
      subtitle: "Building digital products, brands, and experience.",
      about: "I am a final-year student at the Faculty of Computer Science, Vietnam – Korea University of Information and Communication Technology (VKU) \n Major: Software Engineering. \n GPA: 3.3/4.0",
      imageUrl: avatar
    },
    contact: {
      email: "thanhtuanhht0211@gmail.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      resumeUrl: "/resume.pdf"
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
        company: "Tech Corp",
        duration: "2021 - Present",
        description: "Led the frontend team in rebuilding the core platform using React and Next.js, improving performance by 40%.",
      },
      {
        id: 2,
        role: "Intern Backend Developer",
        company: "Tech Corp",
        duration: "2021 - Present",
        description: "Led the frontend team in rebuilding the core platform using React and Next.js, improving performance by 40%.",
      },
      {
        id: 3,
        role: "Web Developer",
        company: "Digital Agency",
        duration: "2018 - 2021",
        description: "Developed and maintained multiple client websites using modern JavaScript frameworks and CSS architectures.",
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
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform built with React, Node.js, and Stripe.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        liveUrl: "https://example.com",
        repoUrl: "https://github.com"
      },
      {
        id: 2,
        title: "Task Management Dashboard",
        description: "A drag-and-drop task management tool with real-time updates.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        liveUrl: "https://example.com",
        repoUrl: "https://github.com"
      },
      {
        id: 3,
        title: "AI Image Generator",
        description: "An application that generates images from text prompts using OpenAI's DALL-E API.",
        techStack: ["Next.js", "Tailwind CSS", "OpenAI API", "Prisma"],
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
        liveUrl: "https://example.com",
        repoUrl: "https://github.com"
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
      name: "John Doe",
      title: "Lập trình viên Full Stack",
      subtitle: "Xây dựng sản phẩm kỹ thuật số, thương hiệu và trải nghiệm.",
      about: "Tôi là một kỹ sư phần mềm chuyên xây dựng các trải nghiệm kỹ thuật số xuất sắc. Hiện tại, tôi tập trung vào việc tạo ra các sản phẩm dễ tiếp cận, lấy con người làm trung tâm.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    },
    contact: {
      email: "hello@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      resumeUrl: "/resume.pdf"
    },
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Framer Motion",
      "Next.js",
      "GraphQL",
      "PostgreSQL",
      "Git & GitHub"
    ],
    experience: [
      {
        id: 1,
        role: "Kỹ sư Frontend Cao cấp",
        company: "Tech Corp",
        duration: "2021 - Hiện tại",
        description: "Dẫn dắt đội ngũ frontend xây dựng lại nền tảng cốt lõi bằng React và Next.js, cải thiện hiệu suất lên tới 40%.",
      },
      {
        id: 2,
        role: "Lập trình viên Web",
        company: "Digital Agency",
        duration: "2018 - 2021",
        description: "Phát triển và bảo trì nhiều trang web khách hàng sử dụng các framework JavaScript hiện đại và kiến trúc CSS.",
      }
    ],
    blogs: [
      {
        id: "1",
        title: "Hiểu về React Server Components",
        content: "React Server Components cho phép bạn render các component trên server, giảm lượng JavaScript gửi xuống client. Điều này giúp tải trang nhanh hơn và SEO tốt hơn. Trong bài viết này, chúng ta sẽ tìm hiểu cơ bản về RSC và cách sử dụng chúng trong ứng dụng Next.js.",
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
        date: "2023-10-01"
      }
    ],
    projects: [
      {
        id: 1,
        title: "Nền tảng Thương mại Điện tử",
        description: "Một nền tảng e-commerce đầy đủ tính năng được xây dựng bằng React, Node.js và Stripe.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        liveUrl: "https://example.com",
        repoUrl: "https://github.com"
      },
      {
        id: 2,
        title: "Bảng Quản lý Công việc",
        description: "Công cụ quản lý tác vụ kéo thả với cập nhật theo thời gian thực.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        liveUrl: "https://example.com",
        repoUrl: "https://github.com"
      },
      {
        id: 3,
        title: "Công cụ Tạo ảnh AI",
        description: "Ứng dụng tạo hình ảnh từ văn bản sử dụng OpenAI DALL-E API.",
        techStack: ["Next.js", "Tailwind CSS", "OpenAI API", "Prisma"],
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
        liveUrl: "https://example.com",
        repoUrl: "https://github.com"
      }
    ],
    ui: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      blog: "Blog",
      contact: "Liên hệ",
      viewProjects: "Xem dự án",
      downloadResume: "Tải Resume",
      skillsTitle: "Kỹ năng & Công nghệ",
      experienceTitle: "Kinh nghiệm",
      latestBlogs: "Bài viết Blog Mới nhất",
      readMore: "Đọc thêm",
      noBlogs: "Chưa có bài viết blog nào."
    }
  }
};
