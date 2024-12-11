import styled from "styled-components";
import { Text, Link } from "@radix-ui/themes";

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
      <StyledButton>
        <Link href="/catalog">Книги</Link>
      </StyledButton>
      <StyledButton>
        <Link href="/events">Курсы и мероприятия</Link>
      </StyledButton>
      <StyledButton>
        <Link href="/about">Издательство</Link>
      </StyledButton>
      <StyledButton>
        <Link href="/Blog">Блог</Link>
      </StyledButton>
    </MenuWrapper>
  );
}
