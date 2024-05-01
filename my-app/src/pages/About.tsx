import { Container } from "@material-ui/core";
import { Twitter, GitHub } from "@material-ui/icons";

const About = () => {
  return (
    <>
      <Container>
        <p style={{ fontSize: "1.3rem" }}>
          <b>Mahi Todos</b> is an assingnment project started by Usman Sabuwala.
          This app focuses on the ease of use of a Todo App. Write your todos,
          change some settings, Enjoy!
        </p>
        <h2>Contact</h2>
        <a
          href="https://twitter.com/Subhraj49268042"
          style={{
            color: "#1CA0F1",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter fontSize="large" />
        </a>
        <a
          href="https://github.com/subhrajitMukherje"
          style={{
            color: "#24292E",
            textDecoration: "none",
            fontSize: "24px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub fontSize="large" />
        </a>
      </Container>
    </>
  );
};

export default About;
