import React from "react";
import { ColumnList } from "../../molecules/ColumnList";
import { SectionLayout } from "../../molecules/SectionLayout";

export const Technologies = () => {
  //todo: onHover fill up bar to show how much experience
  //todo: Color code languages and technologies for better identification
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

  const tech = ["Git", "Jira", "Docker", "AWS", "Heroku", "Hostinger"];

  const web = [
    "React",
    "GraphQL",
    "Node",
    "Next.js",
    "REST APIs",
    "Styled-Components",
  ];

  const mobile = ["Flutter", "Android Studio", "XCode"];

  return (
    <SectionLayout id="tech" header="Programming Experience">
      <ColumnList heading="Languages" items={languages} />
      <ColumnList heading="Technologies" items={tech} />
      <ColumnList heading="www.web-development.com" items={web} />
      <ColumnList heading="AppDevelopment.apk" items={mobile} />
    </SectionLayout>
  );
};
