import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

// con title se dice a storybook que se coloque en el directorio 'UI' el componente
// para poner las opciones size: { control: 'select', options: ['normal', 'h1'] }
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' }
    }
} as ComponentMeta<typeof MyLabel>

// Template sirve para que se pueda mostrar
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

// para mostrar las páginas de la historia
// con el bind rompe la referencia y crea una compia de Template
export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false
}
export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary' // primary | secondary | tertiary
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}
