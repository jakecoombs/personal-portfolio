import React from "react";
import styled from "styled-components";
import { SectionLayout } from "../../molecules/SectionLayout";

export const Technologies = () => {
  //todo: fetch from API
  const languages = [
    "JavaScript",
    "TypeScript",
    "CSS",
    "PHP",
    "Dart",
    "Java",
    "SQL",
    "NoSQL",
  ];
  const tech = [
    "Git",
    "Jira",
    "React",
    "Flutter",
    "Android Studio",
    "XCode",
    "GraphQL",
    "Node",
    "Next.js",
    "REST APIs",
    "Styled-Components",
    "AWS",
    "Heroku",
    "Hostinger",
  ];

  return (
    <SectionLayout id="tech" header="Programming Experience">
      <h3>Languages</h3>
      <ColumnList>
        {languages.map((language) => (
          <li>{language}</li>
        ))}
      </ColumnList>
      <h3>Technologies</h3>
      <ColumnList>
        {tech.map((technology) => (
          <li>{technology}</li>
        ))}
      </ColumnList>
    </SectionLayout>
  );
};

const ColumnList = styled.ul`
  column-count: 3;

  @media ${(props) => props.theme.breakpoints.md} {
    column-count: 2;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    column-count: 1;
  }
`;
