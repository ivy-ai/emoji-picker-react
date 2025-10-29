import * as React from 'react';
declare type Props = {
    direction?: SkinTonePickerDirection;
};
export declare function SkinTonePickerMenu(): React.JSX.Element;
export declare function SkinTonePicker({ direction }: Props): React.JSX.Element | null;
export declare enum SkinTonePickerDirection {
    VERTICAL = "epr-vertical",
    HORIZONTAL = "epr-horizontal"
}
export {};
