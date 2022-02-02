import { Code, Container, Heading, Image, ListItem, Tag, Text, UnorderedList } from "@chakra-ui/react";
import { BlogProps } from "../../pages/blog/[slug]/[id]";
import ReactHtmlParser from "react-html-parser";

export default function PostProcessor({ postDetails }: BlogProps): JSX.Element {
  
  function convertTime(d: string) {
    const date = new Date(Date.parse(d));
    return date.toUTCString().slice(5, 16);
  }

  const res = [];

  postDetails.map((item, ind: number) => {
    if (item.metadata) {
      res.push(
        <Heading key={item.metadata.id} size="2xl" py={4}>
          {item.metadata.title}
        </Heading>
      );
      res.push(
        <Text py={4} key={item.metadata.createdAt}>
          <Tag borderRadius="full" variant="solid" colorScheme="red">
            {convertTime(item.metadata.createdAt)}
          </Tag>
        </Text>
      );
    }
    if (item.text) {
      res.push(
        <Text key={ind} py={4}>
          {ReactHtmlParser(item.text)}
        </Text>
      );
    }
    if (item.imageUrl) {
      res.push(<Image key={ind} alt={item.alt} src={item.imageUrl} py={4}></Image>);
    }

    if (item.h1) {
      res.push(
        <Heading key={ind} size="2xl" py={4}>
          {item.h1}
        </Heading>
      );
    }
    if (item.h2) {
      res.push(
        <Heading key={ind} size="xl" py={4}>
          {item.h2}
        </Heading>
      );
    }
    if (item.h3) {
      res.push(
        <Heading key={ind} size="lg" py={4}>
          {item.h3}
        </Heading>
      );
    }
    if (item.ulli === "start") {
      const lis = [];
      const endIndex = postDetails.findIndex((i, index) => i.ulli === "end" && index > ind);
      postDetails.forEach((e, i) => {
        if (i > ind && i < endIndex) {
          lis.push(e.ulli);
        }
      });
      const ul = (
        <UnorderedList key={ind}>
          {lis.map((li) => (
            <ListItem key={li}>{li}</ListItem>
          ))}
        </UnorderedList>
      );

      res.push(ul);
    }
    if (item.code) {
      res.push(
        <Code key={ind} bg="gray.700" color="teal.200" borderRadius="4px" whiteSpace="pre" p={6} display="block" overflowX={["scroll", "auto"]}>
          {ReactHtmlParser(item.code)}
        </Code>
      );
    }
  });
  return <>{res}</>;
}
