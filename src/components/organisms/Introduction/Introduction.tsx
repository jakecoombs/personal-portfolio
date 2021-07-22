import React from "react";
import { TextBox } from "../../atoms/TextBox";
import { SectionLayout } from "../../molecules/SectionLayout";

export const Introduction = () => {
  return (
    <SectionLayout header="Introduction">
      <TextBox>
        <p>
          I have been an Apprentice Software Engineer at Bloomberg since
          September 2019. During my time at Bloomberg I have been working with
          the web team for BNEF.com. In parallel with working at Bloomberg, I
          spend 2 days a week studying Computer Science BSc at Queen Mary
          University of London.
        </p>
        <p>
          Outside of Software Engineering I have many passions and hobbies.
          Mainly I enjoy watching Motorsport, mostly Formula 1 and I have been
          since I was young. When the F1 is not on I usually spend my free time
          gaming, with a lot of it being competitive sim racing. I also like to
          play Football (Soccer) regularly and support West Ham United, the best
          Football team in London.
        </p>
      </TextBox>
    </SectionLayout>
  );
};
