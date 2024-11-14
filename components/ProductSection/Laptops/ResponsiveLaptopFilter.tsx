import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  Show,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Heading,
  Flex,
} from "@chakra-ui/react";
import LaptopFilter from "./LaptopFilter";
import { BiFilterAlt } from "react-icons/bi";

type Props = {};

const ResponsiveLaptopFilter = ({ setLaptops }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  return (
    <Show below="md">
      <Flex gap={3} alignItems={"center"}>
        <Heading size={"md"}>Filters</Heading>
        <IconButton
          ref={btnRef}
          colorScheme="red"
          onClick={onOpen}
          icon={<BiFilterAlt />}
          aria-label={"Blank Drwawer"}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <LaptopFilter setLaptops={setLaptops} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Show>
  );
};

export default ResponsiveLaptopFilter;
