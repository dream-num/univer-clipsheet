type ColorType = 'success' | 'info' | 'error' | 'warning' | keyof typeof COLORS;
type ValueOf<T> = T[keyof T];

const COLORS = {
    Reset: '\x1B[0m',
    Bright: '\x1B[1m',
    Dim: '\x1B[2m',
    Underscore: '\x1B[4m',
    Blink: '\x1B[5m',
    Reverse: '\x1B[7m',
    Hidden: '\x1B[8m',
    FgBlack: '\x1B[30m',
    FgRed: '\x1B[31m',
    FgGreen: '\x1B[32m',
    FgYellow: '\x1B[33m',
    FgBlue: '\x1B[34m',
    FgMagenta: '\x1B[35m',
    FgCyan: '\x1B[36m',
    FgWhite: '\x1B[37m',
    BgBlack: '\x1B[40m',
    BgRed: '\x1B[41m',
    BgGreen: '\x1B[42m',
    BgYellow: '\x1B[43m',
    BgBlue: '\x1B[44m',
    BgMagenta: '\x1B[45m',
    BgCyan: '\x1B[46m',
    BgWhite: '\x1B[47m',
} as const;

export function colorLog(message: string, type: ColorType) {
    let color: ValueOf<typeof COLORS>;

    switch (type) {
        case 'success':
            color = COLORS.FgGreen;
            break;
        case 'info':
            color = COLORS.FgBlue;
            break;
        case 'error':
            color = COLORS.FgRed;
            break;
        case 'warning':
            color = COLORS.FgYellow;
            break;
        default:
            color = COLORS[type];
            break;
    }

  // eslint-disable-next-line no-console
    console.log(color, message);
}
