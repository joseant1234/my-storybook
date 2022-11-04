import { MyLabel } from "../../components/MyLabel";

// con title se dice a storybook que se coloque en el directorio 'UI' el componente
export default {
    title: 'UI/MyLabel',
    component: MyLabel
}

// sirve para que se pueda mostrar
const Template = () => <MyLabel />

// para mostrar las páginas de la historia
// con el bind rompe la referencia y crea una compia de Template
export const Basic = Template.bind({});
export const AllCaps = Template.bind({});
export const Secondary = Template.bind({});
