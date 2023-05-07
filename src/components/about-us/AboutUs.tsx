import { FC } from "react";
import image from "../../assets/img/about-us-image/about-us.jpg";
import ButtonGray from "../../ui/button-gray/ButtonGray";
import {
  AboutUsContent,
  AboutUsImageBlock,
  AboutUsInner,
  AboutUsSection,
  AboutUsText,
  AboutUsTitle,
} from "./AboutUs.styled";

const AboutUs: FC = () => {
  return (
    <AboutUsSection>
      <AboutUsInner maxWidth={"lg"}>
        <AboutUsContent>
          <div style={{ padding: "72px 0 64px 0" }}>
            <AboutUsTitle component="h3" variant="accent3">
              From a studio in London to a global brand with over 400 outlets
            </AboutUsTitle>
            <AboutUsText component="p" variant="text3">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. <br />
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </AboutUsText>
          </div>
          <div style={{ paddingBottom: "50px" }}>
            <ButtonGray children={"Get in touch"} />
          </div>
        </AboutUsContent>
        <AboutUsImageBlock>
          <img src={image} alt="about" />
        </AboutUsImageBlock>
      </AboutUsInner>
    </AboutUsSection>
  );
};

export default AboutUs;
