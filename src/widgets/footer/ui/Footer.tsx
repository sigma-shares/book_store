import styled from "styled-components";
import { Text, Link, Button, IconButton } from "@radix-ui/themes";
import {
  CONTENT_FOOTER_NAVIGATION,
  CONTENT_FOOTER_SOCIALS,
  CONTENT_FOOTER_PAYMENTS,
} from "../../../shared/consts/index";
import { IFooterNavTypes } from "../../../shared/types/index";

const FooterWrapper = styled.footer`
  margin: 33px 0px 23px;
  padding: 0px 30px;
`;

const Wrapper = styled.div`
  padding: 10px 0px 65px;
  display: flex;
  justify-content: space-between;
`;

const ColumnWrapper = styled.div<{ $column?: boolean; $icons?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$column ? "column" : "row")};
  align-items: ${(props) => (props.$column ? "flex-start" : "center")};
  justify-content: ${(props) =>
    props.$column ? "flex-start" : "space-between"};
  width: ${(props) => (props.$column ? "40%" : "15%")};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-family: circe, sans-serif;
  margin-bottom: 8px;
  color: black;

  &:hover {
    color: #4c4c4c;
  }
`;

const StyledHeaderText = styled(Text)`
  font-size: 24px;
  font-family: circe, sans-serif;
  color: #4c4c4c;
`;

const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #cccccc;
  margin: 20px 0;
`;

const renderColumn = (obj: IFooterNavTypes) => {
  return (
    <ColumnWrapper $column>
      <StyledHeaderText>{obj.header}</StyledHeaderText>
      <br />
      {obj.array.map((link: String, index: number) => {
        return (
          <StyledLink href="/about" key={index}>
            <Text>{link}</Text>
          </StyledLink>
        );
      })}
    </ColumnWrapper>
  );
};

const renderSocials = (arr: string[]) => {
  return (
    <ColumnWrapper>
      {arr.map((svg: string, index: number) => {
        return (
          <IconButton variant="ghost" style={{ cursor: "pointer" }} key={index}>
            <Link>
              <img src={svg} className={String(svg)} alt={String(svg)} />
            </Link>
          </IconButton>
        );
      })}
    </ColumnWrapper>
  );
};

export function Footer() {
  return (
    <FooterWrapper>
      <FooterLine />
      <Wrapper>
        {CONTENT_FOOTER_NAVIGATION.map((obj: any) => {
          return renderColumn(obj);
        })}
      </Wrapper>
      <FooterLine />
      <Wrapper>
        {renderSocials(CONTENT_FOOTER_SOCIALS)}
        {renderSocials(CONTENT_FOOTER_PAYMENTS)}
        <Button color="gray" radius="large" size="4" variant="outline">
          Написать в издательство
        </Button>
      </Wrapper>
    </FooterWrapper>
  );
}
