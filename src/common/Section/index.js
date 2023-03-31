import { StyledSection, Header, Content, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Header>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </Header>
    <Content>
      {body}
    </Content>
  </StyledSection>
);

export default Section;