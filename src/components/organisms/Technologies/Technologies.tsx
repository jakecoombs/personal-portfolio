import React from "react";
import { ColumnList } from "../../molecules/ColumnList";
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
      <ColumnList heading="Languages" items={languages} />
      <ColumnList heading="Technologies" items={tech} />
    </SectionLayout>
  );
};
