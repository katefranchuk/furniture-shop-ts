import { Container } from "@mui/material";
import { FC } from "react";
import { feature } from "./feature.data";
import { FeatureSection, FeatureTitle, FeatureWrapper } from "./Feature.styled";
import FeatureItem from "./FeatureItem";

const Features: FC = () => {
  return (
    <FeatureSection>
      <Container maxWidth={"lg"}>
        <FeatureTitle variant="accent3" component="h2">
          What makes our brand different
        </FeatureTitle>
        <FeatureWrapper>
          {feature.map((item) => (
            <FeatureItem key={item.id} data={item} />
          ))}
        </FeatureWrapper>
      </Container>
    </FeatureSection>
  );
};

export default Features;
