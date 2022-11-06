import './myLabel.css';

export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
    */
    label?: string;
    /**
     * Este es el tamaño de la etiqueta
    */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
     * Si quiere todo capitalizado
    */
    allCaps?: boolean;
    /**
     * Colores básicos del botón
    */
    color?: 'primary'|'secondary'|'tertiary';
}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
}: MyLabelProps) => {
    return (
        <span className={`${size} text-${color}`}>
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}
