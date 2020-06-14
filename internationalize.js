const data = {
  de: {
    'top-left': 'Neues Coronavirus',
    'top-right': 'Aktualisiert am 29. April 2020',
    'shield-text-top': 'So schützen',
    'shield-text-bottom': 'wir uns.',
    distance: 'Abstand halten.',
    'mask-top': 'Empfehlung: Maske tragen, wenn',
    'mask-bottom': 'Abstandhalten nicht möglich ist.',
    'homeoffice-top': 'Falls möglich weiter im',
    'homeoffice-bottom': 'Homeoffice arbeiten.',
    'important-note': 'weiterhin wichtig:',
    hands: 'Gründlich Hände waschen.',
    handshake: 'Hände schütteln vermeiden.',
    cough: 'In Taschentuch oder Armbeuge husten und niesen.',
    home: 'Bei Symptomen zuhause bleiben.',
    telmed:
      'Nur nach telefonischer Anmeldung in Arztpraxis oder Notfallstation.',
    'footer-link': 'www.bag-coronavirus.ch',
    'footer-link-href': 'https:www.bag-coronavirus.ch',
  },
  fr: {
    'top-left': 'Nouveau coronavirus',
    'top-right': 'Actualisé au 29.4.2020',
    'shield-text-top': 'VOICI COMMENT',
    'shield-text-bottom': 'NOUS PROTÉGER:',
    distance: 'Garder ses distances.',
    'mask-top': 'Recommandé : un masque si on ne',
    'mask-bottom': 'peut pas garder ses distances.',
    'homeoffice-top': 'Si possible, continuer de',
    'homeoffice-bottom': 'travailler à la maison.',
    'important-note': 'POUR RAPPEL:',
    hands: 'Se laver soigneusement les mains.',
    handshake: 'Éviter les poignées de main.',
    cough: 'Tousser et éternuer dans un mouchoir ou dans le creux du coude.',
    home: 'Rester à la maison en cas de symptômes.',
    telmed:
      'Toujours téléphoner avant d’aller chez le médecin ou aux urgences.',
    'footer-link': 'www.ofsp-coronavirus.ch',
    'footer-link-href': 'https:www.ofsp-coronavirus.ch',
  },
  it: {
    'top-left': 'Nuovo coronavirus',
    'top-right': 'Stato al 29.4.2020',
    'shield-text-top': 'COSÌ CI',
    'shield-text-bottom': 'PROTEGGIAMO',
    distance: 'Tenersi a distanza.',
    'mask-top': 'Raccomandazione: usare la ',
    'mask-bottom': 'mascherina se non è possibile tenersi a distanza.',
    'homeoffice-top': 'Se possibile, continuare a',
    'homeoffice-bottom': 'lavorare da casa.',
    'important-note': 'ALTRETTANTO IMPORTANTE:',
    hands: 'Lavarsi accuratamente le mani.',
    handshake: 'Evitare le strette di mano.',
    cough: 'Tossire e starnutire in un fazzoletto o nella piega del gomito.',
    home: 'In caso di sintomi restare a casa.',
    telmed:
      'Prima di andare dal medico o al pronto soccorso, annunciarsi sempre per telefono.',
    'footer-link': 'www.ufsp-coronavirus.ch',
    'footer-link-href': 'https:www.ufsp-coronavirus.ch',
  },
  en: {
    'top-left': 'New coronavirus',
    'top-right': 'Last update: 29.4.2020',
    'shield-text-top': 'PROTECT YOURSELF',
    'shield-text-bottom': 'AND OTHERS',
    distance: 'Keep your distance.',
    'mask-top': 'Recommendation: If it’s not possible ',
    'mask-bottom': 'to keep your distance, wear a mask. ',
    'homeoffice-top': 'Continue to work from',
    'homeoffice-bottom': 'home if possible.',
    'important-note': 'STILL IMPORTANT:',
    hands: 'Wash your hands thoroughly.',
    handshake: 'Avoid shaking hands.',
    cough: 'Cough and sneeze into a tissue or the crook of your arm.',
    home: 'Stay at home if you experience symptoms.',
    telmed:
      'Always call ahead before going to the doctor’s or the emergency department.',
    'footer-link': 'www.foph-coronavirus.ch',
    'footer-link-href': 'https:www.foph-coronavirus.ch',
  },
  rr: {
    'top-left': 'Nov coronavirus',
    'top-right': 'Actualisà ils 29.4.2020',
    'shield-text-top': 'USCHIA ANS',
    'shield-text-bottom': 'PROTEGIN NUS.',
    distance: 'Tegnair distanza.',
    'mask-top': 'Recumandaziun: Purtar ina',
    'mask-bottom': 'mascrina, sch’i n’è betg pussaivel da tegnair distanza.',
    'homeoffice-top': 'Sche pussaivel, lavurar',
    'homeoffice-bottom': 'vinavant da chasa anora.',
    'important-note': 'ANC ADINA IMPURTANT:',
    hands: 'Lavar bain ils mauns.',
    handshake: 'Evitar da dar il maun.',
    cough: 'Tusser e starnidar en in fazielet u en la foppa dal cumbel.',
    home: 'Restar a chasa en cas da sintoms. ',
    telmed:
      'S’annunziar per telefon avant che ir tar il medi u a la staziun d’urgenza.',
    'footer-link': 'www.bag-coronavirus.ch',
    'footer-link-href': 'https:www.bag-coronavirus.ch',
  },
}; // end data
// Global variables
const langMenu = document.querySelector('.lang-menu');
const langItems = document.querySelectorAll('.lang-item');

const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const shieldTop = document.getElementById('shield-text-top');
const shieldBottom = document.getElementById('shield-text-bottom');
const distance = document.getElementById('distance');
const maskTop = document.getElementById('mask-top');
const maskBottom = document.getElementById('mask-bottom');
const homeofficeTop = document.getElementById('homeoffice-top');
const homeofficeBottom = document.getElementById('homeoffice-bottom');
const importantNote = document.getElementById('important-note');
const hands = document.getElementById('hands');
const handshake = document.getElementById('handshake');
const cough = document.getElementById('cough');
const home = document.getElementById('home');
const telmed = document.getElementById('telmed');
const footerLink = document.getElementById('footer-link');

langItems.forEach((el) => {
  el.addEventListener('click', () => {
    langMenu.querySelector('.lang-chosen').classList.remove('lang-chosen');
    el.classList.add('lang-chosen');

    const language = el.getAttribute('lang');
    topLeft.innerHTML = data[language]['top-left'];
    topRight.innerHTML = data[language]['top-right'];
    shieldTop.innerHTML = data[language]['shield-text-top'];
    shieldBottom.innerHTML = data[language]['shield-text-bottom'];
    distance.innerHTML = data[language]['distance'];
    maskTop.innerHTML = data[language]['mask-top'];
    maskBottom.innerHTML = data[language]['mask-bottom'];
    homeofficeTop.innerHTML = data[language]['homeoffice-top'];
    homeofficeBottom.innerHTML = data[language]['homeoffice-bottom'];
    importantNote.innerHTML = data[language]['important-note'];
    hands.innerHTML = data[language]['hands'];
    handshake.innerHTML = data[language]['handshake'];
    cough.innerHTML = data[language]['cough'];
    home.innerHTML = data[language]['home'];
    telmed.innerHTML = data[language]['telmed'];
    footerLink.innerHTML = data[language]['footer-link'];
    footerLinkHref = data[language]['footer-link-href'];
    footerLink.setAttribute('href', footerLinkHref);
  });
});

//

function loadLang(lang) {
  // document.querySelector('span#de').classList.add('lang-chosen');

  topLeft.innerHTML = data[lang]['top-left'];
  topRight.innerHTML = data[lang]['top-right'];
  shieldTop.innerHTML = data[lang]['shield-text-top'];
  shieldBottom.innerHTML = data[lang]['shield-text-bottom'];
  distance.innerHTML = data[lang]['distance'];
  maskTop.innerHTML = data[lang]['mask-top'];
  maskBottom.innerHTML = data[lang]['maks-bottom'];
  homeofficeTop.innerHTML = data[lang]['homeoffice-top'];
  homeofficeBottom.innerHTML = data[lang]['homeoffice-bottom'];
  importantNote.innerHTML = data[lang]['important-note'];
  hands.innerHTML = data[lang]['hands'];
  handshake.innerHTML = data[lang]['handshake'];
  cough.innerHTML = data[lang]['cough'];
  home.innerHTML = data[lang]['home'];
  telmed.innerHTML = data[lang]['telmed'];
  footerLink.innerHTML = data[lang]['footer-link'];
  footerLinkHref = data[lang]['footer-link-href'];
  footerLink.setAttribute('href', footerLinkHref);
}

// loadLang('de');
