export const theme = {
    colors: {
        gray400: '#64575C',
        gray500: '#3E3639',
        gray600: '#2A2A2A',
        gray700: '#181516',
        light100: '#FCF3F0',
        light200: '#C9C1BF',
        light300: '#AFA9A7',
        light400: '#9F9997',
        light500: '#86807D',
        light600: '#696361',
        light700: '#474341',
        light800: '#322F2E',
        brown400: '#A06E72',
        brown500: '#7A5457',
        brown600: '#543A3C',
        brown700: '#332425',
        brown800: '#201617',
        brown900: '#070505',
        sand500: '#F9E6D4',
        sand600: '#D3C3B4',
        sand700: '#A09388',
        sand800: '#867C72',
        orange500: '#FED48B',
        peach500: '#FFC093',
        peach600: '#FFE5CC',
        rose500: '#F6765F',
        white: '#FFFFFF',
        black: '#000000',
    },
} as const;

export type ThemeColors = keyof typeof theme.colors;
