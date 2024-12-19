import { BOOKS } from "../../../shared/consts/index";
import styled from "styled-components";
import {
  Grid,
  Flex,
  Text,
  Box,
  DropdownMenu,
  Button,
} from "@radix-ui/themes";
import { IBook } from "../../../shared/types/index";
import star from "../../../shared/assets/icons/star.svg";
import paperbook from "../../../shared/assets/icons/paperbook.svg";
import audio from "../../../shared/assets/icons/audio.svg";
import ebook from "../../../shared/assets/icons/ebook.svg";

export function Catalog() {
  const Wrapper = styled.div`
    padding: 0px 14px 0px 30px;
    display: flex;
    flex-direction: row;
  `;

  const renderBooks = (arr: IBook[]) => {
    return arr.map((book: IBook, index: number) => {
      return (
        <Box maxWidth="300px" key={index}>
          <Flex direction="row" align="baseline">
            <Flex direction="column" gap="3">
              <Flex direction="column" gap="1">
                <Flex direction="row" align="baseline">
                  {book.paperbook && (
                    <img
                      src={paperbook}
                      alt="paperbook"
                      width="14"
                      height="12"
                    />
                  )}
                  {book.ebook && (
                    <img src={ebook} alt="ebook" width="14" height="12" />
                  )}
                  {book.audio && (
                    <img src={audio} alt="audio" width="14" height="12" />
                  )}
                </Flex>
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    width: "240px",
                    height: "350px",
                  }}
                />
              </Flex>

              <Flex direction="column" gap="2">
                <Text size="2">{book.description}</Text>

                <Text size="2" weight="bold">
                  {book.price}
                </Text>
                <Flex direction="row" gap="3" align="baseline">
                  <Button color="blue" size="1" variant="soft">
                    В корзину
                  </Button>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant="ghost" size="3">
                        ...
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>
                      <img
                            src={paperbook}
                            alt="paperbook"
                            width="14"
                            height="12"
                          />
                        <Flex gap="2" align="end">
                          <Text>Бумажную в корзину</Text>
                          <Text size="1" weight="bold">
                            {book.price}
                          </Text>
                        </Flex>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <img
                          src={star}
                          alt="favourite"
                          width="14"
                          height="12"
                        />
                        <Text>Добавить в вишлист</Text>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      );
    });
  };

  return (
    <Wrapper>
      <Grid columns="6" gap="8" rows="2" width="100%">
        {renderBooks(BOOKS)}
      </Grid>
    </Wrapper>
  );
}
