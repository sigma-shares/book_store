import { IconButton, Text, Dialog, Link } from "@radix-ui/themes";
import location from "../../../shared/assets/icons/location.svg";
import search from "../../../shared/assets/icons/search.svg";
import styled from "styled-components";
import {
  CONTENT_HEADER_NAVIGATION,
  CONTENT_HEADER_NAVIGATION_SVG,
} from "../../../shared/consts/contentHeaderNavigation";

const Wrapper = styled.header`
  background-color: #ffffff;
  padding: 32px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  position: relative;
`;

const LocationWrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--space-2);
  width: 40%;
`;

const MenuWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
`;

const ButtonsWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

const SearchInput = styled.input`
  padding: 0px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.3s ease;
  color: rgb(153, 153, 153);
  font-size: 16px;
  width: 95%;
`;

const renderIconButton = (arr: string[], arrSvg: string[]) => {
  return (
    <>
      {arr.map((str: string, index: number) => {
        return (
          <IconButton variant="ghost" key={index}>
            <Link href={"/" + str}>
              <img src={arrSvg[index]} className={str} alt={str} />
            </Link>
          </IconButton>
        );
      })}
    </>
  );
};

export function Header() {
  return (
    <Wrapper>
      <LocationWrapper>
        <img src={location} className="location" alt="location" />
        <Text size="4">Location</Text>
      </LocationWrapper>
      <Link href="/" underline="none" style={{ cursor: "pointer" }}><Text weight="bold" align="center" color="gray" size="8">BookStore</Text></Link>
      <MenuWrapper>
        <ButtonsWrapper>
          <Dialog.Root>
            <Dialog.Trigger>
              <IconButton variant="ghost" style={{ cursor: "pointer" }}>
                <img src={search} className="search" alt="search" />
              </IconButton>
            </Dialog.Trigger>
            <Dialog.Content size="1" maxWidth="800px">
              <SearchInput type="text" placeholder="Search here" />
            </Dialog.Content>
          </Dialog.Root>
          {renderIconButton(
            CONTENT_HEADER_NAVIGATION,
            CONTENT_HEADER_NAVIGATION_SVG,
          )}
        </ButtonsWrapper>
      </MenuWrapper>
    </Wrapper>
  );
}
