import { Children } from "react";



export const List = ({ children }: React.PropsWithChildren) => {

    return (
        <ol>
            {Children.map(children, (child) => (
                <li>{child}</li>
            ))}
        </ol>
    );

};