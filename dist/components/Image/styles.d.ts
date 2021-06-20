/// <reference types="react" />
import { TokenImageProps, Variant } from "./types";
interface StyledImageProps extends TokenImageProps {
    variant: Variant;
}
export declare const StyledPrimaryImage: import("styled-components").StyledComponent<import("react").FC<TokenImageProps>, import("styled-components").DefaultTheme, StyledImageProps, never>;
export declare const StyledSecondaryImage: import("styled-components").StyledComponent<import("react").FC<TokenImageProps>, import("styled-components").DefaultTheme, StyledImageProps, never>;
export {};
