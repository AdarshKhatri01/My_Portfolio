import ibm_python101 from "../assets/certifications/PYTHON101.jpg"
import ibm_dataAnalysisWithPython from "../assets/certifications/DATA-ANALYSIS-WITH-PYTHON.jpg"
import matlab_exploreCNN from "../assets/certifications/EXPLORE-CNN.jpg"


const certificationsData = {
  "certifications": [
    {
      "id": 1,
      "title": "Data Analysis With Python",
      "organization": "IBM",
      "issueDate": "2025-04-12",
      "expiryDate": null,
      "credentialId": "e365dec9425e4b14bfd96730d14d15d0",
      "credentialURL": "https://courses.skillsbuild.skillsnetwork.site/certificates/e365dec9425e4b14bfd96730d14d15d0",
      "image": ibm_dataAnalysisWithPython,
      "description": "Comprehensive course by IBM focused on data analysis using Python. Covered essential topics such as data wrangling, data visualization, statistical analysis, and using libraries like Pandas, NumPy, and Matplotlib to derive insights from real-world datasets.",
      "skills": [
        "Data Analysis",
        "Data Wrangling",
        "Python Programming",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Statistical Analysis",
        "Data Visualization"
      ],
      "subcourses": []
    },
    {
      "id": 2,
      "title": "PYTHON101 for Data Science",
      "organization": "IBM",
      "issueDate": "2025-03-15",
      "expiryDate": "",
      "credentialId": "f3808f6c45a24b67b5d04557dfff4ce8",
      "credentialURL": "https://courses.skillsbuild.skillsnetwork.site/certificates/f3808f6c45a24b67b5d04557dfff4ce8",
      "image": ibm_python101,
      "description": "Introductory course by IBM focused on using Python for data science. Covered fundamental concepts such as data structures, functions, libraries (NumPy, Pandas), data visualization, and working with data for analysis.",
      "skills": [
        "Computer Programming",
        "Python Programming",
        "Data Analysis",
        "Data Visualization",
        "NumPy",
        "Pandas"
      ],
      "subcourses": []
    },
    {
      "id": 3,
      "title": "Explore Convolutional Neural Networks",
      "organization": "MathWorks",
      "issueDate": "2025-03-17",
      "expiryDate": null,
      "credentialId": "c9d44b79-31b9-4969-b1ba-13c1f5a173a1",
      "credentialURL": "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=c9d44b79-31b9-4969-b1ba-13c1f5a173a1",
      "image": matlab_exploreCNN,
      "description": "This course introduces the concepts of Convolutional Neural Networks (CNNs) using MATLAB. It covers key components like convolution layers, activation functions, pooling, and provides hands-on experience with designing and training CNN models for image classification tasks.",
      "skills": [
        "MATLAB",
        "Neural Network Design",
        "Convolutional Neural Networks",
        "Image Classification",
        "Deep Learning",
      ],
      "subcourses": []
    }
  ],
  "licenses": []
}

export default certificationsData;