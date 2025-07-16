import {
  DetailedHTMLProps, HTMLAttributes,
} from 'react';

export type FlexJustify =
    | 'start'
    | 'center'
    | 'end'
    | 'between'
    | 'around';

export type FlexAlign =
    | 'start'
    | 'center'
    | 'stretch'
    | 'end';

export type FlexDirection =
    | 'row'
    | 'column';

export type FlexGapText =
    | '2'
    | '4'
    | '6'
    | '8'
    | '10'
    | '12'
    | '14'
    | '16'
    | '18'
    | '20'
    | '22'
    | '24'
    | '32'
    | '64';

export type FlexGapNumeric =
    | 2
    | 4
    | 6
    | 8
    | 10
    | 12
    | 14
    | 16
    | 18
    | 20
    | 22
    | 24
    | 32
    | 64;

export type FlexGap = FlexGapText | FlexGapNumeric;

export type DivProps = DetailedHTMLProps<
HTMLAttributes<HTMLDivElement>,
HTMLDivElement
>;
