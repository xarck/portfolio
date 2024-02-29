const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://xarck.github.io/portfolio/',
  // title: 'XARCK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ashish Negi',
  role: 'Machine Learning & Full Stack Engineer',
  description:
    "I've honed my skills through practical experiences, including a Full Stack Development internship at Lixotic Solutions, where I adeptly utilized React and implemented CI/CD pipelines for multi-stack applications. My Web Development internship at VisitUttarakhand involved crafting responsive admin portals and integrating server-side functionalities with Node.js. I have successfully delivered impactful projects, such as a sophisticated Blogging Website, E-Commerce Platform, Stock Price Prediciton, Disease Prediction and Image Sharing Platform,  showcasing my expertise in React, Node.js, and Python",
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
    description: `Designed and delivered a sophisticated blog platform with modern writing capabilities using Editor JS. Implemented secure Google Authentication and dynamic pagination for seamless user navigation.`,
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
      'Developed a comprehensive Image Sharing and Hosting Platform using the MERN stack, mirroring the core functionalities of Pinterest. Introduced features like seamless image uploading, content bookmarking, robust user authentication, and intuitive social sharing functionalities.',
    stack: ['JavaScript', 'React', 'NodeJS', 'MongoDB'],
    sourceCode: 'https://github.com/xarck/imager',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Generating Anime Faces using Deep Convolutional Networks',
    description: `Implemented a Deep Convolutional Neural Network (DCNN) using PyTorch to create a Generative Adversarial Network (GAN) for generating anime faces.`,
    stack: ['Pytorch', 'Numpy'],
    sourceCode:
      'https://github.com/xarck/Image-Processing/blob/main/CNN/dc_gan.ipynb',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Stock Price Prediction Using LSTM',
    description: `Developed LSTM-based stock price prediction model using Python, PyTorch, and Yahoo Finance API (yfinance),
    achieving an RMSE of 45.71. Integrated a user-friendly interface leveraging Streamlit to enhance the user experience and facilitate seamless
    interaction with the stock prediction model.
    `,
    stack: ['Pytorch', 'Streamlit'],
    sourceCode: 'https://github.com/xarck/Stock-Price-Prediction-using-LSTM',
  },
  {
    name: 'Disease Detection With X-Ray using Image-Processing',
    description: ` Developed and implemented a machine learning model utilizing Convolutional Neural Network (CNN) methodologies for disease detection in X-ray images, contributing to early diagnosis. Achieved an impressive 92% accuracy rate in disease prediction.`,
    stack: ['Pytorch', 'Pandas', 'Numpy'],
    sourceCode:
      'https://github.com/xarck/Image-Processing/blob/main/disease.ipynb',
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
  email: 'iamashking123@gmail.com',
}

export { header, about, projects, skills, contact }
