import { ComponentMeta, ComponentStory } from '@storybook/react';
import Player, { IPlayer } from './Player';
import { mockPlayerProps } from './Player.mocks';

export default {
   title: 'player/Player',
   component: Player,
   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
   argTypes: {},
} as ComponentMeta<typeof Player>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Player> = (args) => <Player {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
   ...mockPlayerProps.base,
} as IPlayer;
