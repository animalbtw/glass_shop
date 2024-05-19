import React from "react";
import { Metadata } from "next";

import Container from "@/widgets/container/container";
import Modal from "@/widgets/modal/modal";

export const metadata: Metadata = {
  title: "Точная оптика | TestPage",
};

const TestPage = () => {
  return (
    <Container>
      <Modal />
    </Container>
  );
};

export default TestPage;
