import { Line, TitlePage_ } from "./style";



export interface iTitlePageProps {
    title: string;
    width?: string;
    position?: 'left' | 'center' | 'right';
    textAlign?: 'left' | 'center' | 'right';
}

export const TitlePage: React.FC<iTitlePageProps>  = ({ title, width, position, textAlign }) => {
    return (
        <>
            <TitlePage_ textAlign = {textAlign}> {title} </TitlePage_>
            <Line width = {width} position = {position} textAlign = {textAlign}/>
        </>

    );
};

