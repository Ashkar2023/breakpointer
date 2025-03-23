import { FC, HTMLAttributes } from "react";
import { useBreakPointContext } from "../hooks/useBreakPointer";

interface BreakPointIndicatorProps extends HTMLAttributes<HTMLDivElement> { };

const BreakPointIndicator: FC<BreakPointIndicatorProps> = ({ className, ...props }) => {
    const { currentWidth, currentScreen } = useBreakPointContext();

    console.log("BreakPointIndicator - Current Screen:", currentScreen);
    console.log("BreakPointIndicator - Current Width:", currentWidth);

    return (
        <div
            className={className}
            style={{
                backgroundColor: "black",
                borderRadius: "20%",
                padding:"15px",
                aspectRatio: "1/1",
                position: "fixed",
                bottom: "30px",
                left: "30px",
                minHeight: "50px",
                display: "grid",
                placeContent: 'center'
            }}

            {...props}
        >
            <b>{currentScreen}</b>
            <small>{currentWidth}</small>
        </div>
    )
}

export default BreakPointIndicator