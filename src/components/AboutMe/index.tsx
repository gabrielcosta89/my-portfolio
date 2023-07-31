import { Text } from "@/styles/Text";
import { Container } from "@/styles/Global";
import { AboutMeSection, AboutMeTittle, AboutMeTextArea } from "./style";

export const AboutMe = (): JSX.Element => {
  return (
    <AboutMeSection id="about-me">
      <Container>
        <div>
          <AboutMeTittle as="h1" type="heading1" color="grey3">
            About{" "}
            <Text as="span" type="heading1" color="brand1">
              Me
            </Text>
          </AboutMeTittle>
          <AboutMeTextArea>
            <Text type="heading3" color="grey2">
              Hello, I'm Gabriel Costa, and my love{" "}
              <Text as="span" type="heading3" color="brand1">
                love
              </Text>{" "}
              for technology has been with me since my early childhood.
            </Text>
            <Text type="heading3" color="grey2">
              To dive deeper into this fascinating field, I've taken various
              courses, and recently, I made the decision to participate in a
              bootcamp to further boost my learning process. During this
              intensive program, I've gained valuable experience with a diverse
              set of technologies such as:{" "}
              <Text as="span" type="heading3" color="brand1">
                HTML
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                CSS
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                Javascript
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                Typescript
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                React
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                NodeJs
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                Python
              </Text>{" "}
              |{" "}
              <Text as="span" type="heading3" color="brand1">
                DJANGO
              </Text>{" "}
              |{" "}
            </Text>
            <Text type="heading3" color="grey2">
              Throughout my learning, I created{" "}
              <Text as="span" type="heading3" color="brand1">
                responsive
              </Text>{" "}
              and{" "}
              <Text as="span" type="heading3" color="brand1">
                user friendly
              </Text>{" "}
              interfaces,{" "}
              <Text as="span" type="heading3" color="brand1">
                APIs
              </Text>{" "}
              and many other projects. I have experience with agile
              methodologies such as{" "}
              <Text as="span" type="heading3" color="brand1">
                SCRUM
              </Text>{" "}
              , and tools to boost my efficacy, such as Trello, Notion, ect.{" "}
            </Text>
            <Text type="heading3" color="grey2">
              My ultimate goal is to continue honing my skills and knowledge in
              technology while actively contributing to innovative projects that
              have a positive impact on the world.
            </Text>
          </AboutMeTextArea>
        </div>
      </Container>
    </AboutMeSection>
  );
};
