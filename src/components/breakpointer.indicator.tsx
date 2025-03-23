import { FC, HTMLAttributes, useMemo, useState } from "react";
import { useBreakpointerContext } from "../hooks/useBreakpointerContext";
import { styled } from "goober";
import { Laptop, LucideIcon, Monitor, Smartphone, Tablet, TabletSmartphone, Tv } from "lucide-react";
import { breakpoints } from "../core/constants/breakpoints";


const Wrapper = styled("div") <{ right: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    background-color: rgb(15, 15, 15);
    border-radius: 8%;
    aspect-ratio:1/1;
    position: fixed;
    bottom: 30px;
    min-height: 60px;
    transition: left 1s ease-in-out, right 1s ease-in-out;
    ${({ right }) => right ? "right: 30px;" : "left: 30px;"}
`;

const Col1 = styled("div")`
    align-content: center;
    justify-items: center;

    &:nth-child(n+2){
        border-left: 1px solid gray;
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
    "default": Smartphone
}

interface BreakpointerIndicatorProps extends HTMLAttributes<HTMLDivElement> { };

export const BreakpointerIndicator: FC<BreakpointerIndicatorProps> = ({ className, ...props }) => {
    const { currentWidth, screen } = useBreakpointerContext();
    const [right, setRight] = useState(false);

    const Icon: LucideIcon = useMemo(() => {
        if (screen in breakpoints) {
            return breakpointIcons[screen]
        } else {
            return breakpointIcons["default"];
        }
    }, [screen]);

    return (
        <Wrapper
            right={right}
            onMouseEnter={() => {
                setRight(prev => !prev)
            }}
        >
            <Col1>
                <Icon size={20} />
            </Col1>
            <Col1>
                <b>{screen}</b>
            </Col1>
            <Col2>
                <p>{currentWidth}</p>
            </Col2>

        </Wrapper>
    )
}