import { IconButton, Text, Dialog } from "@radix-ui/themes";
import logo from "./../shared/assets/icons/logo.svg";
import location from "./../shared/assets/icons/location.svg";
import cart from "./../shared/assets/icons/cart.svg";
import search from "./../shared/assets/icons/search.svg";
import wishlist from "./../shared/assets/icons/wishlist.svg";
import userProfile from "./../shared/assets/icons/userProfile.svg";
import styled from "styled-components";

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

// const StyledDialogContent = styled(Dialog.Content)`
// `

export default function Header() {
  return (
    <Wrapper>
      <LocationWrapper>
        <img src={location} className="location" alt="location" />
        <Text size="4">Location</Text>
      </LocationWrapper>
      <img src={logo} className="logo" alt="logo" />
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
          <IconButton variant="ghost">
            <a href="/userProfile">
              <img
                src={userProfile}
                className="userProfile"
                alt="userProfile"
              />
            </a>
          </IconButton>
          <IconButton variant="ghost">
            <a href="/wishList">
              <img src={wishlist} className="wishlist" alt="wishlist" />
            </a>
          </IconButton>
          <IconButton variant="ghost">
            <a href="/cart">
              <img src={cart} className="cart" alt="cart" />
            </a>
          </IconButton>
        </ButtonsWrapper>
      </MenuWrapper>
    </Wrapper>
  );
}
