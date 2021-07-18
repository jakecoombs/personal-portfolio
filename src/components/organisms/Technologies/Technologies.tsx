import React from "react";
import { ColumnList, IColumnListItem } from "../../molecules/ColumnList";
import { SectionLayout } from "../../molecules/SectionLayout";

export const Technologies = () => {
  //todo: onHover fill up bar to show how much experience
  //todo: fetch from API
  const languages: IColumnListItem[] = [
    { text: "JavaScript", backgroundColor: "yellow", color: "black" },
    { text: "TypeScript", backgroundColor: "blue" },
    { text: "CSS" },
    { text: "PHP", backgroundColor: "white", color: "purple" },
    { text: "Dart" },
    { text: "Java" },
    { text: "SQL" },
    { text: "NoSQL" },
  ];

  const tech: IColumnListItem[] = [
    { text: "Git" },
    { text: "Jira", backgroundColor: "blue" },
    { text: "Docker" },
    { text: "AWS", backgroundColor: "orange", color: "black" },
    { text: "Heroku" },
    { text: "Hostinger" },
  ];

  const web: IColumnListItem[] = [
    { text: "React", color: "blue" },
    { text: "GraphQL" },
    { text: "Node", color: "green" },
    { text: "Next.js" },
    { text: "REST APIs" },
    { text: "Styled-Components" },
  ];

  const mobile: IColumnListItem[] = [
    { text: "Flutter", color: "blue" },
    { text: "Android Studio", color: "green" },
    { text: "XCode" },
  ];

  return (
    <SectionLayout id="tech" header="Programming Experience">
      <ColumnList heading="Languages" items={languages} />
      <ColumnList heading="Technologies" items={tech} />
      <ColumnList heading="www.web-development.com" items={web} />
      <ColumnList heading="AppDevelopment.apk" items={mobile} />
    </SectionLayout>
  );
};
