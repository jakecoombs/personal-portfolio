import React from "react";
import { ColumnList, IColumnListItem } from "../../molecules/ColumnList";
import { SectionLayout } from "../../molecules/SectionLayout";

export const Projects = () => {
  const projects: IColumnListItem[] = [
    {
      text: "ACC Fuel Calculator",
      color: "red",
      link: "https://www.acc-fuel-calculator.com/",
    },
    { text: "Personal Portfolio" },
    { text: "GraphQL Test Suite", link: "/api-test-suite" },
    { text: "Custom Discord Bots", backgroundColor: "#4E62EE" },
    { text: "One in Development", color: "yellow" },
  ];
  return (
    <SectionLayout id="projects" header="Projects">
      <ColumnList items={projects} />
    </SectionLayout>
  );
};
