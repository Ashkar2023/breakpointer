import { FC, HTMLAttributes, useMemo, useState } from "react";
import { useBreakpointer } from "../hooks/useBreakpointer";
import { styled } from "goober";
import { Laptop, LucideIcon, Monitor, Smartphone, Tablet, TabletSmartphone, Tv } from "lucide-react";
import { breakpoints } from "../core/constants/breakpoints";


const Wrapper = styled("div") <{ position: "left" | "right" }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    background-color: rgb(15, 15, 15);
    border-radius: 5%;
    min-width: 60px;
    position: fixed;
    bottom: 30px;
    min-height: 60px;
    transition: left 1s ease-in-out, right 1s ease-in-out;
    ${({ position }) => position === "right" ? "right: 30px;" : "left: 30px;"}
`;

const Col1 = styled("div")`
    align-content: center;
    justify-items: center;
    padding-inline: 3px;
    &:nth-child(odd){
        align-content: end;
        border-right: 1px solid gray;
    }

`;

const Col2 = styled("div")`
    border-top: 1px solid gray;
    grid-column: 1/3;    
    align-content: center;
    justify-items: center;
`;


const breakpointIcons: {
    [key in keyof typeof breakpoints | string]: LucideIcon
} = {
    "sm": TabletSmartphone,
    "md": Tablet,
    "lg": Laptop,
    "xl": Monitor,
    "2xl": Tv,
}

interface BreakpointerIndicatorProps extends HTMLAttributes<HTMLDivElement> { };

export const BreakpointerIndicator: FC<BreakpointerIndicatorProps> = ({ className, ...props }) => {
    const { currentWidth, screen } = useBreakpointer();
    const [right, setRight] = useState(false);

    const Icon: LucideIcon = useMemo(() => {
        if (screen in breakpoints) {
            return breakpointIcons[screen]
        } else {
            return Smartphone;
        }
    }, [screen]);

    return (
        <Wrapper
            position={right ? "right" : "left"}
            onMouseEnter={() => {
                setRight(prev => !prev)
            }}
        >
            <Col1>
                <Icon size={20}/>
            </Col1>
            <Col1>
                <b
                    style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    }}
                >{screen}</b>
            </Col1>
            <Col2>
                <p style={{ margin: 0 }}>{currentWidth}<small>px</small></p>
            </Col2>

        </Wrapper >
    )
}