import styled from "styled-components";
import { Text, Link } from "@radix-ui/themes";
import { CONTENT_NAVIGATION, NAVIGATION_URL } from "../shared/consts/index";

const MenuWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledButton = styled(Text)`
  margin: 16px;
  font-size: 24px;
  font-family: Circe, sans-serif;

  & a {
    text-decoration: none;
    color: #000000;
  }

  & a:hover {
    text-decoration: underline;
    text-underline-offset: 10px;
  }
`;

export default function Navigation() {
  return (
    <MenuWrapper>
      {CONTENT_NAVIGATION.map((str: string, index: number) => {
        return (
          <StyledButton key={index}>
            <Link href={NAVIGATION_URL[index]}>{str}</Link>
          </StyledButton>
        );
      })}
    </MenuWrapper>
  );
}
