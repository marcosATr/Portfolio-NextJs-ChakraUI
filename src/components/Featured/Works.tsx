import { Flex, Heading, HStack, Image, Tag, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import slugify from "slugify";
import { ItemProps } from "../../pages";

interface FeaturedProps {
  projects: ItemProps[];
}

export default function Works({ projects }: FeaturedProps) {

  return (
    <VStack align="flex-start" py={8} spacing={8}>
      {projects.map((project) => {
        return (
          <Link href={`/projects/${slugify(project.metadata.slug)}`} key={project.metadata.title}>
            <a>
              <Flex direction={["column", "column", "row"]}>
                <Image alt={project.metadata.title} src={project.metadata.featured} maxW={["100%", "245px"]} borderRadius="8px" />
                <VStack pl={4} align="flex-start" spacing={8}>
                  <Heading fontSize="2xl" pt={[4, 4, 0]}>
                    {project.metadata.title}
                  </Heading>
                  <HStack>
                    <Text>{project.metadata.date} </Text>
                    {project.metadata.stack}
                  </HStack>
                  <Text>{project.metadata.description}</Text>
                </VStack>
              </Flex>
            </a>
          </Link>
        );
      })}
    </VStack>
  );
}
