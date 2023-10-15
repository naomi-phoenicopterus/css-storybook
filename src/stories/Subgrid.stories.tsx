import type { Meta, StoryObj } from "@storybook/react";
import { GlobalTheme } from "./frame/Provider";
import { Subgrid } from "../components/Subgrid";

const meta = {
  title: "Subgrid",
  component: Subgrid,
  decorators: [
    (Story) => {
      return (
        <GlobalTheme>
          <Story />
        </GlobalTheme>
      )
    }
  ]
} satisfies Meta<typeof Subgrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
