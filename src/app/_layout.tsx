import "../global.css";
import { Slot } from "expo-router";

import RootLayout from "@components/root/rootLayout";

import ProviderWrapper from "./provider";

const MainLayout = () => (
  <ProviderWrapper>
    <RootLayout>
      <Slot />
    </RootLayout>
  </ProviderWrapper>
);

export default MainLayout;
