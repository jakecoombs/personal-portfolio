import React from "react";
import { useBreakpoints } from "../../atoms/Breakpoints";
import { ColumnList, IColumnListItem } from "../../molecules/ColumnList";
import { SectionLayout } from "../../molecules/SectionLayout";
import { ShowMore } from "../../molecules/ShowMore";

export const Technologies = () => {
  //todo: onHover fill up bar to show how much experience
  //todo: fetch from API
  const breakpoints = useBreakpoints();

  const languages: IColumnListItem[] = [
    { text: "JavaScript", backgroundColor: "#EFD81D", color: "black" },
    { text: "TypeScript", backgroundColor: "#2F74C0" },
    { text: "CSS" },
    { text: "PHP", backgroundColor: "#777BB3", color: "black" },
    { text: "Dart" },
    { text: "Java", color: "#EB2D2C" },
    { text: "SQL" },
    { text: "NoSQL" },
  ];

  const tech: IColumnListItem[] = [
    { text: "Git" },
    { text: "Jira", backgroundColor: "#0071ED" },
    { text: "Docker" },
    { text: "AWS", backgroundColor: "#F79400", color: "black" },
    { text: "Heroku", color: "#430098", backgroundColor: "white" },
    { text: "Hostinger" },
  ];

  const web: IColumnListItem[] = [
    { text: "React", color: "#61DBFB" },
    { text: "GraphQL", color: "#E535AB" },
    { text: "Node", color: "#83CD29" },
    { text: "Next.js" },
    { text: "REST APIs" },
    { text: "Styled-Components" },
  ];

  const mobile: IColumnListItem[] = [
    { text: "Flutter", backgroundColor: "#54C5F7", color: "black" },
    { text: "Android Studio", color: "#92C755" },
    { text: "XCode", color: "#1D8EF8" },
  ];

  const laterSections = (
    <>
      <ColumnList heading="Technologies" items={tech} />
      <ColumnList heading="www.web-development.com" items={web} />
      <ColumnList heading="MobileAppDevelopment.apk" items={mobile} />
    </>
  );

  return (
    <SectionLayout id="tech" header="Developer Experience">
      <ColumnList heading="Languages" items={languages} />
      {breakpoints.small ? (
        <ShowMore>{laterSections}</ShowMore>
      ) : (
        <>{laterSections}</>
      )}
    </SectionLayout>
  );
};
