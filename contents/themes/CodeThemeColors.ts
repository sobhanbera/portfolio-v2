const DarkTheme = {
    'code[class*="language-"]': {
        fontFamily: 'Fira Code, monospace',
        fontSize: '14px',
        lineHeight: '1.375',
        direction: 'ltr',
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        MozTabSize: '4',
        OTabSize: '4',
        tabSize: '4',
        WebkitHyphens: 'none',
        MozHyphens: 'none',
        msHyphens: 'none',
        hyphens: 'none',
        background: 'var(--background-light)',
        color: 'var(--primary)',
    },
    'pre[class*="language-"]': {
        fontFamily: 'Fira Code, monospace',
        fontSize: '14px',
        lineHeight: '1.375',
        direction: 'ltr',
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        MozTabSize: '4',
        OTabSize: '4',
        tabSize: '4',
        WebkitHyphens: 'none',
        MozHyphens: 'none',
        msHyphens: 'none',
        hyphens: 'none',
        background: 'var(--background-light)',
        color: '#728fcb',
        padding: '1em',
        margin: '.5em 0',
        overflow: 'auto',
    },
    'pre > code[class*="language-"]': {
        fontSize: '1em',
    },
    'pre[class*="language-"]::-moz-selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'pre[class*="language-"] ::-moz-selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'code[class*="language-"]::-moz-selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'code[class*="language-"] ::-moz-selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'pre[class*="language-"]::selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'pre[class*="language-"] ::selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'code[class*="language-"]::selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'code[class*="language-"] ::selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    ':not(pre) > code[class*="language-"]': {
        padding: '.1em',
        borderRadius: '.3em',
    },
    comment: {
        color: '#5C6773',
    },
    prolog: {
        color: '#5C6773',
    },
    doctype: {
        color: '#5C6773',
    },
    cdata: {
        color: '#5C6773',
    },
    punctuation: {
        Opacity: '.7',
    },
    namespace: {
        Opacity: '.7',
    },
    property: {
        color: '#D4BFFF',
    },
    tag: {
        color: '#36A3D9',
    },
    boolean: {
        color: '#B8CC52',
    },
    number: {
        color: '#B8CC52',
    },
    constant: {
        color: '#FFEE99',
    },
    symbol: {
        color: '#FFEE99',
    },
    selector: {
        color: '#E6B673',
    },
    'attr-name': {
        color: '#E6B673',
    },
    string: {
        color: '#B8CC52',
    },
    char: {
        color: '#B8CC52',
    },
    function: {
        color: '#FFB454',
    },
    builtin: {
        color: '#B8CC52',
    },
    inserted: {
        color: '#E6B673',
    },
    operator: {
        color: '#E7C547',
    },
    entity: {
        color: '#E6B673',
        cursor: 'help',
    },
    url: {
        color: '#B8CC52',
    },
    '.language-css .token.string': {
        color: '#36A3D9',
    },
    '.style .token.string': {
        color: '#36A3D9',
    },
    variable: {
        color: '#E6E1CF',
    },
    atrule: {
        color: '#FFEE99',
    },
    'attr-value': {
        color: '#FFEE99',
    },
    keyword: {
        color: '#FF7733',
    },
    regex: {
        color: '#95E6CB',
    },
    important: {
        color: '#95E6CB',
        fontWeight: 'bold',
    },
    bold: {
        fontWeight: 'bold',
    },
    italic: {
        fontStyle: 'italic',
    },
    deleted: {
        color: 'red',
    },
}

const LightTheme = {
    'code[class*="language-"]': {
        fontFamily: '"Fira Code", monospace',
        fontSize: '14px',
        lineHeight: '1.375',
        direction: 'ltr',
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        MozTabSize: '4',
        OTabSize: '4',
        tabSize: '4',
        WebkitHyphens: 'none',
        MozHyphens: 'none',
        msHyphens: 'none',
        hyphens: 'none',
        background: '#e6e8ea',
        color: '#728fcb',
    },
    'pre[class*="language-"]': {
        fontFamily: '"Fira Code", monospace',
        fontSize: '14px',
        lineHeight: '1.375',
        direction: 'ltr',
        textAlign: 'left',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        MozTabSize: '4',
        OTabSize: '4',
        tabSize: '4',
        WebkitHyphens: 'none',
        MozHyphens: 'none',
        msHyphens: 'none',
        hyphens: 'none',
        background: '#e6e8ea',
        color: '#728fcb',
        padding: '1em',
        margin: '.5em 0',
        overflow: 'auto',
    },
    'pre > code[class*="language-"]': {
        fontSize: '1em',
    },
    'pre[class*="language-"]::-moz-selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'pre[class*="language-"] ::-moz-selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'code[class*="language-"]::-moz-selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'code[class*="language-"] ::-moz-selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'pre[class*="language-"]::selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'pre[class*="language-"] ::selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'code[class*="language-"]::selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    'code[class*="language-"] ::selection': {
        textShadow: 'none',
        background: 'var(--background-light)',
    },
    ':not(pre) > code[class*="language-"]': {
        padding: '.1em',
        borderRadius: '.3em',
    },
    comment: {
        color: '#ABB0B6',
    },
    prolog: {
        color: '#ABB0B6',
    },
    doctype: {
        color: '#ABB0B6',
    },
    cdata: {
        color: '#ABB0B6',
    },
    punctuation: {
        Opacity: '.7',
    },
    namespace: {
        Opacity: '.7',
    },
    property: {
        color: '#36A3D9',
    },
    tag: {
        color: '#36A3D9',
    },
    boolean: {
        color: '#86B300',
    },
    number: {
        color: '#86B300',
    },
    constant: {
        color: '#A37ACC',
    },
    symbol: {
        color: '#A37ACC',
    },
    selector: {
        color: '#F29718',
    },
    'attr-name': {
        color: '#F29718',
    },
    string: {
        color: '#86B300',
    },
    char: {
        color: '#86B300',
    },
    function: {
        color: '#F29718',
    },
    builtin: {
        color: '#86B300',
    },
    inserted: {
        color: '#F29718',
    },
    operator: {
        color: '#E7C547',
    },
    entity: {
        color: '#F29718',
        cursor: 'help',
    },
    url: {
        color: '#86B300',
    },
    '.language-css .token': {
        color: '#36A3D9',
    },
    '.style .token': {
        color: '#36A3D9',
    },
    variable: {
        color: '#E6E1CF',
    },
    atrule: {
        color: '#A37ACC',
    },
    'attr-value': {
        color: '#A37ACC',
    },
    keyword: {
        color: '#FF7733',
    },
    regex: {
        color: '#4CBF99',
    },
    important: {
        color: '#4CBF99',
        fontWeight: 'bold',
    },
    bold: {
        fontWeight: 'bold',
    },
    italic: {
        fontStyle: 'italic',
    },
    deleted: {
        color: 'red',
    },
}

export {LightTheme as CodeLightTheme, DarkTheme as CodeDarkTheme}
