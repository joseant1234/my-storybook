import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

// con title se dice a storybook que se coloque en el directorio 'UI' el componente
export default {
    title: 'UI/MyLabel',
    component: MyLabel
} as ComponentMeta<typeof MyLabel>

// Template sirve para que se pueda mostrar
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

// para mostrar las páginas de la historia
// con el bind rompe la referencia y crea una compia de Template
export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
}
export const AllCaps = Template.bind({});
export const Secondary = Template.bind({});
