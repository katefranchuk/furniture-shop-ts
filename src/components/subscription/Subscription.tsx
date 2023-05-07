import { FC } from "react";
import ButtonGray from "../../ui/button-gray/ButtonGray";
import {
  SubscriptionContainer,
  SubscriptionForm,
  SubscriptionInput,
  SubscriptionSection,
  SubscriptionText,
  SubscriptionTitle,
  SubscriptionWrapper,
} from "./Subscription.styed";

const Subscription: FC = () => {
  return (
    <SubscriptionSection>
      <SubscriptionContainer maxWidth={"lg"}>
        <SubscriptionWrapper>
          <SubscriptionTitle variant="accent2" component="h2">
            Join the club and get the benefits
          </SubscriptionTitle>
          <SubscriptionText variant="text2" component="p">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </SubscriptionText>
          <SubscriptionForm>
            <SubscriptionInput type="text" placeholder="your@email.com" />
            <ButtonGray isBgDark isWhite>
              Sign up
            </ButtonGray>
          </SubscriptionForm>
        </SubscriptionWrapper>
      </SubscriptionContainer>
    </SubscriptionSection>
  );
};

export default Subscription;
