const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ashish Negi',
  role: 'Full Stack Engineer',
  description:
    "I've honed my skills through practical experiences, including a Full Stack Development internship at Lixotic Solutions, where I adeptly utilized React and implemented CI/CD pipelines for multi-stack applications. My Web Development internship at VisitUttarakhand involved crafting responsive admin portals and integrating server-side functionalities with Node.js. I have successfully delivered impactful projects, such as a sophisticated Blogging Website, E-Commerce Platform, and Image Sharing Platform, showcasing my expertise in React, Node.js, and the MERN stack.",
  resume:
    'https://drive.google.com/file/d/1caVURwL-zPdam62hirMUJKNnLZfzVadW/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/xarck/',
    github: 'https://github.com/xarck',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Blogging Website',
    description: `Designed and delivered a sophisticated blog platform with modern writing capabilities using Editor JS. Implemented secure Google Authentication and dynamic pagination for seamless user navigation. Enhanced user experience with a dedicated profile featuring profile links, written blogs, and smooth transitions powered by Framer Motion.`,
    stack: ['JavaScript', 'React', 'NodeJS'],
    sourceCode: 'https://github.com/xarck/Blogger',
    // livePreview: 'https://github.com',
  },
  {
    name: 'E-Commerce Website',
    description:
      'Built a responsive E-Commerce website using React and Firebase, offering users a seamless online shopping journey. Implemented an intuitive order management system, enabling efficient product browsing, item addition to the cart, and streamlined order placement.',
    stack: ['JavaScript', 'React', 'Firebase'],
    sourceCode: 'https://github.com/xarck/E-commerce-website',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Image Sharing And Hosting Platform',
    description:
      'Developed a comprehensive Image Sharing and Hosting Platform using the MERN stack, mirroring the core functionalities of Pinterest. Introduced features like seamless image uploading, content bookmarking, robust user authentication, and intuitive social sharing functionalities. The platform provides a dynamic and engaging user experience, combining the power of MongoDB, Express.js, React, and Node.js to deliver a full-stack solution for image enthusiasts.',
    stack: ['JavaScript', 'React', 'NodeJS', 'MongoDB'],
    sourceCode: 'https://github.com/xarck/imager',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'Python',
  'React',
  'NodeJS',
  'Git',
  'CI/CD',
  'Pytorch',
  'Flask',
  'MySQL',
  'MongoDB',
  'Scikit-Learn',
  'Firebase',
  'Docker',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'iamashking123@mail.com',
}

export { header, about, projects, skills, contact }