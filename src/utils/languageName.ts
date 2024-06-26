const languageMap: { [key: string]: string } = {
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    it: 'Italian',
    ru: 'Russian',
    zh: 'Chinese',
    ja: 'Japanese',
    ko: 'Korean',
    pt: 'Portuguese',
    ar: 'Arabic',
    hi: 'Hindi',
    bn: 'Bengali',
    pa: 'Punjabi',
    jv: 'Javanese',
    te: 'Telugu',
    vi: 'Vietnamese',
    ta: 'Tamil',
    mr: 'Marathi',
    tr: 'Turkish',
    ur: 'Urdu',
    fa: 'Persian',
    gu: 'Gujarati',
    kn: 'Kannada',
    ml: 'Malayalam',
    or: 'Odia',
    pl: 'Polish',
    ro: 'Romanian',
    uk: 'Ukrainian',
    hu: 'Hungarian',
    el: 'Greek',
    sv: 'Swedish',
    nl: 'Dutch',
    no: 'Norwegian',
    da: 'Danish',
    fi: 'Finnish',
    cs: 'Czech',
    sk: 'Slovak',
    bg: 'Bulgarian',
    sr: 'Serbian',
    hr: 'Croatian',
    he: 'Hebrew',
    th: 'Thai',
    id: 'Indonesian',
    ms: 'Malay',
};

export const getLanguageName = (code: string): string => {
    return languageMap[code] || code;
};