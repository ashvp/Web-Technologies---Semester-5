function Experience() {
  return (
    <>
      <div className="experience">
        <h2>Experience</h2>
        <p>
          <strong>Backend Developer Intern</strong>, Sudha Gopalakrishnan Brain
          Centre, IIT Madras (July 2025 - Present)
        </p>
        <ul>
          <li>
            {" "}
            Resolved 10+ critical 404/500 errors across a 7-service Django
            microservices architecture by tracing and fixing misconfigured URLs,
            views, and serializers.
          </li>
          <li>
            {" "}
            Designed and integrated 6+ new REST API endpoints, refactoring
            legacy logic to support upcoming features while ensuring backward
            compatibility.
          </li>
          <li>
            {" "}
            Reverse-engineered deprecated \texttt{"views.py"} logic and
            streamlined Docker-managed routing, reducing endpoint response
            failures by 40%.
          </li>
          <li>
            {" "}
            Collaborated with frontend team to ensure UI-API alignment,
            improving usability for lab researchers and multi-role workflows.
          </li>
          <li>
            {" "}
            Streamlined local debugging using Docker, Postman, and SSH, reducing
            average issue resolution time by ~30%.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
