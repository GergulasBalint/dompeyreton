import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

export default function ContactEmail(props) {
  return (
    <Html>
      <Section>
        <Container >
          <Text >From: {props.name}</Text>
          <Text >Email: {props.email}</Text>
          <Text >{props.message}</Text>
        </Container>
      </Section>
    </Html>
  );
}
