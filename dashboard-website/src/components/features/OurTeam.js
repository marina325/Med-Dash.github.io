import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";


import JoshProfile from "images/Joshprofile.png";
import AvenProfile from "images/Avenprofile.png";
import KennyProfile from "images/kennynguyenprofile.png";
import AnjanaProfile from "images/Anjanaprofile.png";
import NicoleProfile from "images/Nicoleprofile.png";
import RohithProfile from "images/Rohithprofile.png";
import KamenProfile from "images/Kamenprofile.png";




const Container = tw.div`relative bg-primary-800 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full flex-shrink-0`}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

const ourTeam = React.forwardRef( ({
  members = null,
  heading = "Our Team",
  subheading = "University of California, San Diego",
  description = "We are a team of Data Science students at UC San Diego (supported by a group of Bioengineering students), advised by Dr. Benjamin Smarr"
}, ref) => {
/*
 * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
 *  1) imageSrc - the image shown at the top of the card
 *  2) title - the title of the card
 *  3) description - the description of the card
 *  If a key for a particular card is not provided, a default value is used
 */

const DSCmembers = [
  {
    imageSrc: AnjanaProfile,
    title: "Anjana Sriram",
    description: "Anjana is a graduate of UC San Diego's Halicioglu Data Science Institute. She is passionate about using data for good, and hopes to create a data-driven world that improves lives for everyone. After graduating this winter, she will be starting work as a Data Scientist for Disney streaming!"
  },
  { imageSrc: AvenProfile, 
    title: "Aven Huang",
    description: "Aven saved my butt too many times on this website" },
  { imageSrc: KamenProfile, 
    title: "Kamen Redfield",
    descriptio: "Kamen is clutch with Tableau changes" },
  { imageSrc: KennyProfile, 
    title: "Kenny Nguyen",
    description: "Kenny is a graduate of the Halicioglu Data Science Institute at UC San Diego. His professional interests lie in leveraging data science to make health care more accessible and equitable for all demographics. After graduation, he will begin work as a Data Scientist at Foundation Risk Partners." },
  { imageSrc: NicoleProfile, 
    title: "Nicole Brye",
    description: "Im sorry I thought ur medal was a participation medal :)" },
  { imageSrc: JoshProfile, 
    title: "Josh Wang",
    description: "Josh also very clutch with tableau thank you thank you" },
  { imageSrc: RohithProfile, 
    title: "Rohith Pillai",
    description: "Rohith mr backend man" }
];

if (!members) members = DSCmembers;

return (
  <Container ref={ref}>
    <ThreeColumnContainer>
      {subheading && <Subheading>{subheading}</Subheading>}
      <Heading>{heading}</Heading>
      {description && <Description>{description}</Description>}
      <VerticalSpacer />
      {members.map((card, i) => (
        <Column key={i}>
          <Card>
            <span className="imageContainer">
              <img src={card.imageSrc || defaultCardImage} alt="profile picture" 
              style={{
                borderRadius: "50%",
                display: "block"
              }}
            />
            </span>
            <span className="textContainer">
              <span className="title">{card.title || "Fully Secure"}</span>
              <p className="description">
                {card.description || "Hello we need to add our info here"}
              </p>
            </span>
          </Card>
        </Column>
      ))}
    </ThreeColumnContainer>
  </Container>
);
});

export default ourTeam;
