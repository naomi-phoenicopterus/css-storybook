import type { Meta, StoryObj } from "@storybook/react";
import { GlobalTheme } from "./frame/Provider";
import { ObjectFit } from "../components/ObjectFit";

const meta = {
  title: "ObjectFit",
  component: ObjectFit,
  decorators: [
    (Story) => {
      return (
        <GlobalTheme>
          <Story />
        </GlobalTheme>
      )
    }
  ]
} satisfies Meta<typeof ObjectFit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
