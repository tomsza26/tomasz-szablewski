import { LANG_ENG, LANG_PL } from './noteTypes';

const initial = {
  lang: 'ENG',
  frontText:
    "My name is Tomek Szablewski.\nI'm Javascript Front-End Developer (aspiring fullstack developer - MERN).\nI live and work in Poznań, Polska.",
  skills: 'skills',
  languages: 'languages',
  libraries: 'libraries / frameworks',
  learning: 'learning / want to learn',
  practices: 'good practices',
  others: 'others',
  tools: 'tools',
  downCV: 'download cv',
  home: 'home',
  projects: 'projects',
  contactMe: 'contact me',
  contactPage: 'CONTACT ME\nwe can build amazing things together',
  myProjects: 'MY PROJECTS',
  techUse: 'tech used:',
  message: 'Message',
  send: 'SEND',
  liveV: 'live',
  codeV: 'code',
};

export const langReducers = (state = initial, action) => {
  switch (action.type) {
    case LANG_ENG:
      return initial;

    case LANG_PL:
      return {
        lang: 'PL',
        frontText:
          'Mam na imię Tomek Szablewski.\nJestem Javascript Front-End Developerem (uczę się, aby zostać fullstack developerem - MERN).\nŻyję i pracuję w Poznaniu.',
        skills: 'umiejetnosci',
        languages: 'jezyki',
        libraries: 'biblioteki / frameworki',
        learning: 'ucze sie / w planach',
        practices: 'dobre praktyki',
        downCV: 'pobierz cv',
        others: 'inne',
        home: 'główna',
        projects: 'projekty',
        tools: 'narzedzia',
        contactMe: 'kontakt',
        contactPage:
          'NAPISZ DO MNIE\nrazem, możemy zbudować niesamowite rzeczy',
        myProjects: 'MOJE PROJEKTY',
        techUse: 'technologie:',
        message: 'Treść',
        send: 'WYŚLIJ',
        liveV: 'strona',
        codeV: 'kod',
      };

    default:
      return state;
  }
};

export default langReducers;
