import styled from "styled-components";
import { Text, Link } from "@radix-ui/themes";
import { GENRES } from "../shared/consts/index";

const MenuWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledButton = styled(Text)`
  margin: 16px;
  font-size: 16px;
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
      {GENRES.map((str: string, index: number) => {
        return (
          <StyledButton key={index}>
            <Link href="/">{str}</Link>
          </StyledButton>
        );
      })}
    </MenuWrapper>
  );
}
