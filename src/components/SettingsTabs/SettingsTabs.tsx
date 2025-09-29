"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { TabItem } from "./TabItem";

export const SettingsTabs = () => {
  const [tab, setTab] = useState<string>("tab1");

  return (
    <Tabs.Root value={tab} onValueChange={setTab}>
      <Tabs.List className="mt-6 flex w-full items-center border-b border-zinc-200">
        <TabItem value="tab1" title="My details" isSelected={tab === "tab1"} />
        <TabItem value="tab2" title="Profile" isSelected={tab === "tab2"} />
        <TabItem value="tab3" title="Password" isSelected={tab === "tab3"} />
        <TabItem value="tab4" title="Team" isSelected={tab === "tab4"} />
        <TabItem value="tab5" title="Plan" isSelected={tab === "tab5"} />
        <TabItem value="tab6" title="Billing" isSelected={tab === "tab6"} />
        <TabItem value="tab7" title="Email" isSelected={tab === "tab7"} />
        <TabItem
          value="tab8"
          title="Notifications"
          isSelected={tab === "tab8"}
        />
        <TabItem
          value="tab9"
          title="Integrations"
          isSelected={tab === "tab9"}
        />
        <TabItem value="tab10" title="API" isSelected={tab === "tab10"} />
      </Tabs.List>
    </Tabs.Root>
  );
};
