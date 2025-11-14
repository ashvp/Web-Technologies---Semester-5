function Projects() {
  return (
    <>
      <div className="projects">
        <h2>Projects</h2>
        <div class="project">
          <h3>Facial Recognition Attendance System</h3>
          <a href="https://github.com/ashvp/face-attendance" target="_blank">
            GitHub Repo
          </a>
          <ul>
            <li>
              Engineered facial recognition backend supporting 500+ users with
              99.6% accuracy using FaceNet embeddings
            </li>
            <li>
              Built 15+ production-grade REST APIs with offline sync protocol
              for 100+ mobile devices
            </li>
            <li>
              Integrated PostgreSQL vector search with cosine similarity for
              efficient face matching
            </li>
          </ul>
        </div>
        <div class="project">
          <h3>AI-Powered Question Paper Generator</h3>
          <a
            href="https://question-paper-generator-nine.vercel.app/"
            target="_blank"
          >
            Live Demo
          </a>
          <ul>
            <li>
              Built fully-deployed AI system generating customizable question
              papers and answer keys from uploaded PDFs
            </li>
            <li>
              Designed prompt-chained backend using LangChain for context
              extraction and question generation with marking schemes
            </li>
          </ul>
          <li>
            Developed responsive frontend integrated via REST API with automated
            deployment and health monitoring
          </li>
        </div>

        <div class="project">
          <h3>Spam Detection Chrome Extension</h3>
          <a
            href="https://question-paper-generator-nine.vercel.app/"
            target="_blank"
          >
            Live Demo
          </a>
          <ul>
            <li>
              Created a Chrome extension and backend system for real-time SMS
              spam detection with 98.44\% accuracy, trained on 5,500+ labeled
              messages.
            </li>
            <li>
              Engineered an NLP pipeline using NLTK + TF-IDF and trained a
              Random Forest model to classify messages with near
              state-of-the-art precision.
            </li>
            <li>
              Deployed a REST API on Render and integrated it with the extension
              frontend using secure async requests (CORS-handled).
            </li>
          </ul>{" "}
        </div>
      </div>
    </>
  );
}

export default Projects;
