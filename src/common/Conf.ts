export type Atelier = {
  // Should be the same than PLATEFORMES' key
  code: string
  logo: string
  name: string
  description: string
  // Should we do promotion of this plateform ? for example on home screen ?
  // (typically, it may be not a good idea to promote the platform while JSON is not producing data for it yet)
  promoted: boolean
  website: string
}

export const ATELIERS: Record<number, Atelier> = {
  0: {
    code: 'FresqueNouveauxRecits',
    logo: '/assets/images/logo/logo_fresqueNouveauxRecits.webp',
    name: 'Fresque des Nouveaux Récits',
    description: 'Faire émerger une société différente à travers un atelier collaboratif et ludique',
    promoted: true,
    website: 'https://www.fresquedesnouveauxrecits.org/',
  },
  1: {
    code: 'FresqueOceane',
    logo: '/assets/images/logo/logo_fresqueOceane.webp',
    name: 'Fresque Océane',
    description: 'Découvrir les enjeux liés à l\'océan, et comment nous pouvons toutes et tous agir pour le préserver',
    promoted: true,
    website: 'https://www.fresqueoceane.org/',
  },
  2: {
    code: 'FresqueBiodiversite',
    logo: '/assets/images/logo/logo_fresqueBiodiversite.svg',
    name: 'Fresque de la Biodiversité',
    description: "Découvrir l'aspect systémique de l'érosion de la biodiversité : ce qu'elle est, ce qu'elle permet et ce qui la dégrade",
    promoted: true,
    website: 'https://www.fresquedelabiodiversite.org/',
  },
  4: {
    code: 'FresqueAgriAlim',
    logo: '/assets/images/logo/logo_fresqueAgriAlim.webp',
    name: "Fresque Agri'Alim",
    description:
      'Comprendre les enjeux de notre modèle agricole et alimentaire',
    promoted: true,
    website: 'https://fresqueagrialim.org/',
  },
  3: {
    code: 'FresqueNumerique',
    logo: '/assets/images/logo/logo_fresqueNumerique.png',
    name: 'Fresque du Numérique',
    description: 'Un atelier pour comprendre en équipe et de manière ludique les enjeux environnementaux du numérique',
    promoted: true,
    website: 'https://www.fresquedunumerique.org/',
  },
  7: {
    code: 'FresqueMobilite',
    logo: '/assets/images/logo/logo_fresqueMobilite.png',
    name: 'Fresque de la Mobilité',
    description: 'Découvrir comment adopter individuellement et collectivement une mobilité plus sobre',
    promoted: true,
    website: 'https://fresquedelamobilite.org/',
  },
  5: {
    code: 'FresqueAlimentation',
    logo: '/assets/images/logo/logo_fresqueAlimentation.webp',
    name: "Fresque de l'Alimentation",
    description: 'Découvrir les enjeux environnementaux, sanitaires et sociaux liés à votre alimentation',
    promoted: true,
    website: 'https://fresquealimentation.org/',
  },
  9: {
    code: 'OGRE',
    logo: '/assets/images/logo/logo_OGRE.png',
    name: 'OGRE',
    description: 'Comprendre les enjeux de la transition énergétique',
    promoted: true,
    website: 'https://atelierogre.org/',
  },
  6: {
    code: 'FresqueConstruction',
    logo: '/assets/images/logo/logo_fresqueConstruction.webp',
    name: 'Fresque de la Construction',
    description: 'Prendre conscience des impacts de la construction en équipe pour agir efficacement',
    promoted: true,
    website: 'https://www.fresquedelaconstruction.org/',
  },
  8: {
    code: 'FresqueSexisme',
    logo: '/assets/images/logo/logo_fresqueSexisme.webp',
    name: 'Fresque du Sexisme',
    description:
      'Détricoter la mécanique sexiste et se projeter dans une société égalitaire',
    promoted: true,
    website: 'https://fresque-du-sexisme.org/',
  },
  10: {
    code: 'AtelierInventonsNosViesBasCarbone',
    logo: '/assets/images/logo/logo_INVBC.webp',
    name: 'Inventons Nos Vies Bas Carbone',
    description:
      'Imaginer ensemble des actions nécessaires, possibles et désirables pour le climat',
    promoted: true,
    website: 'https://www.nosviesbascarbone.org/latelier/',
  },
  11: {
    code: 'FresqueDeLeau',
    logo: '/assets/images/logo/logo_fresqueDeLeau.webp',
    name: "Fresque de l'Eau",
    description: 'Comprendre les clés de compréhension sur l\'eau, son origine, son utilisation, et sur l\'évolution de cette ressource',
    promoted: true,
    website: 'https://www.eaudyssee.org/',
  },
  12: {
    code: 'FutursProches',
    logo: '/assets/images/logo/logo_FutursProches.webp',
    name: 'Futurs Proches',
    description: 'Imaginer ensemble des futurs désirables, pluriels, alternatifs et soutenables',
    promoted: true,
    website: 'https://futursproches.com/',
  },
  13: {
    code: 'FresqueDiversite',
    logo: '/assets/images/logo/logo_fresqueDiversite.webp',
    name: 'Fresque de la Diversité',
    description: '41 cartes pour faire émerger des consciences plus inclusives',
    promoted: true,
    website: 'https://fresquedeladiversite.org/',
  },
  14: {
    code: 'FresqueDuTextile',
    logo: '/assets/images/logo/logo_FresqueTextile.webp',
    name: 'Fresque du Textile',
    description: 'Découvrir les dessous de l\'industrie du textile, ses impacts, les alternatives pour une mode durable',
    promoted: true,
    website: 'https://greendonut.org/textile/',
  },
  15: {
    code: 'FresqueDesDechets',
    logo: '/assets/images/logo/logo_FresqueDechets.webp',
    name: 'Fresque des Déchets',
    description: 'Découvrir la complexité du traitement des déchets, ce qu\'ils deviennent et leur impact sur l\'environnement',
    promoted: true,
    website: 'https://greendonut.org/dechets/',
  },
  16: {
    code: 'PuzzleClimat',
    logo: '/assets/images/logo/logo_puzzleClimat.webp',
    name: 'Puzzle Climat',
    description:
      'Un atelier pour diviser par 2 son empreinte carbone en 5 ans sans revenir à la lampe à huile !',
    promoted: true,
    website: 'https://www.puzzleclimat.org/',
  },
  17: {
    code: 'FresqueFinance',
    logo: '/assets/images/logo/logo_fresqueFinance.webp',
    name: 'Fresque de la Finance',
    description: 'Sensibiliser au rôle de la finance pour la transition socio-écologique et faire réfléchir le citoyen sur les leviers d\'action',
    promoted: true,
    website: 'https://www.linkedin.com/company/fresque-de-la-finance/',
  },
  18: {
    code: 'FresqueRSE',
    logo: '/assets/images/logo/logo_fresqueRSE.webp',
    name: 'Fresque de la RSE',
    description: 'Contribuer à une entreprise positive, éthique et durable et devenez vous aussi acteur-actrice du changement',
    promoted: true,
    website: 'https://fresquedelarse.org/',
  },
  100: {
    code: '2tonnes',
    logo: '/assets/images/logo/logo_2tonnes.webp',
    name: 'Atelier 2tonnes',
    description:
      'Explorer le futur en équipe et essayer de limiter le changement climatique',
    promoted: true,
    website: 'https://www.2tonnes.org/',
  },
  101: {
    code: 'AtelierCompteGouttes',
    logo: '/assets/images/logo/logo_atelier_compte_gouttes.avif',
    name: 'Atelier Compte-Gouttes',
    description: 'Explorer l\'impact du changement climatique sur l\'eau',
    promoted: true,
    website: 'https://compte-gouttes.fr/',
  },
  102: {
    code: 'FresqueBenevolat',
    logo: '/assets/images/logo/logo_fresqueBenevolat.svg',
    name: 'Fresque du Bénévolat',
    description: 'Mettre son énergie au service des grandes causes et découvrir le bénévolat sous toutes ses formes',
    promoted: true,
    website: 'https://www.jeveuxaider.gouv.fr/fresque-benevolat',
  },
  103: {
    code: 'FresquePlastique',
    logo: '/assets/images/logo/logo_fresquePlastique.webp',
    name: 'Fresque du Plastique',
    description: 'Porter un regard sur l\'entièreté de cycle de vie des plastiques',
    promoted: true,
    website: 'https://fresqueduplastique.fr/',
  },
  104: {
    code: 'CyberFresque',
    logo: '/assets/images/logo/logo_cyberFresque.png',
    name: 'Cyber Fresque',
    description:
      'Démystifiez la cybersécurité et boostez votre hygiène numérique !',
    promoted: true,
    website: 'https://www.eventbrite.fr/o/senscyb-89802295343',
  },
  200: {
    code: 'FresqueClimat',
    logo: '/assets/images/logo/logo_fresqueClimat.png',
    name: 'Fresque du Climat',
    description:
      "Vous voulez agir pour le climat mais n'avez pas le temps de devenir climatologue ?",
    promoted: true,
    website: 'https://fresqueduclimat.org/',
  },
  300: {
    code: 'FresqueEcoCirculaire',
    logo: '/assets/images/logo/logo_fresqueEcoCirculaire.webp',
    name: "Fresque de l'Économie Circulaire",
    description: 'Comprendre les enjeux de transformation de notre système de production-consommation',
    promoted: true,
    website: 'https://www.lafresquedeleconomiecirculaire.com/',
  },
  500: {
    code: 'FresqueFrontieresPlanetaires',
    logo: '/assets/images/logo/logo_FDFP.webp',
    name: 'Fresque des Frontières Planétaires',
    description: 'Découvrez l\'ensemble des processus compromettant l\'habitabilité de notre planète',
    promoted: true,
    website: 'https://www.1erdegre.earth/fresque-des-frontieres-planetaires',
  },
  501: {
    code: 'HorizonsDecarbones',
    logo: '/assets/images/logo/logo_HD.webp',
    name: 'Atelier Horizons Décarbonés',
    description: 'Se projeter dans une société française neutre en carbone et découvrir à quoi ressemble le futur de demain !',
    promoted: true,
    website: 'https://www.1erdegre.earth/horizons-decarbones',
  },
  600: {
    code: '2030Glorieuses',
    logo: '/assets/images/logo/logo_2030Glorieuses.webp',
    name: 'Atelier 2030 Glorieuses',
    description: 'Partir à la découverte de cette époque fabuleuse dans laquelle a émergé une société plus juste, durable et heureuse !',
    promoted: true,
    website: 'https://www.2030glorieuses.org/',
  },
  700: {
    code: 'FresqueRenovation',
    logo: '/assets/images/logo/logo_Fresque-de-la-renovation-noir.webp',
    name: 'Fresque de la Rénovation',
    description: 'Comprendre les enjeux, étapes et bénéfices de la rénovation énergétique',
    promoted: true,
    website: 'https://fresquedelarenovation.org/',
  },
  701: {
    code: 'FresqueEnergie',
    logo: '/assets/images/logo/logo_fresqueEnergie.png',
    name: "Fresque de l'Énergie",
    description: 'Aborder les fondamentaux du système énergétique contemporain, de manière ludique et auto-apprenante',
    promoted: true,
    website: 'https://fresquedelenergie.org/',
  },
  702: {
    code: 'FresqueDesPossibles',
    logo: '/assets/images/logo/logo_fresqueDesPossibles.webp',
    name: 'Fresque des Possibles',
    description: 'Identifier et partager des solutions concrètes pour prendre part à la transition sur son territoire',
    promoted: true,
    website: 'https://www.lelieudit.fr/la-fresque-des-possibles/',
  },
  703: {
    code: 'FresqueCommunication',
    logo: '/assets/images/logo/logo_fresqueCommunication.webp',
    name: 'Fresque de la Communication',
    description: 'Aborder les bonnes pratiques de la communication responsable',
    promoted: true,
    website: 'https://lafresquedelacommunication.wordpress.com/',
  },
  704: {
    code: 'ZooFresque',
    logo: '/assets/images/logo/logo_zoofresque.webp',
    name: 'ZooFresque',
    description: 'Comprendre nos relations aux animaux',
    promoted: true,
    website: 'https://zoofresque.wordpress.com/',
  },
}

export type CodeDepartement = string

export type ISODateString = string

export type Workshop = {
  address: string
  city: string
  department: CodeDepartement
  description: string
  end_date: ISODateString
  full_location: string
  kids: boolean
  latitude: number
  longitude: number
  location_name: string
  online: boolean
  scrape_date: ISODateString
  sold_out: boolean
  source_link: string
  start_date: ISODateString
  tickets_link: string
  title: string
  training: boolean
  workshop_type: number
  zip_code: string
}

export type Coordinates = { latitude: number; longitude: number }
export type Location = Coordinates & { city: string; cp: string }

export type SearchType = 'standard' | 'atelier' | 'formation' | 'junior' | 'all'
export const TYPE_RECHERCHE_PAR_DEFAUT: SearchType = 'atelier'

export type WorkshopsParDepartement = {
  workshopsDisponibles: Workshop[]
  codeDepartements: CodeDepartement[]
  derniereMiseAJour: ISODateString
}

export type WorkshopsAffichableAvecDistance = Workshop & {
  distance: number | undefined
}
export type WorkshopsAvecDistanceParDepartement = {
  workshopsMatchantCriteres: WorkshopsAffichableAvecDistance[]
  workshopsDisponibles: WorkshopsAffichableAvecDistance[]
  codeDepartements: CodeDepartement[]
  derniereMiseAJour: ISODateString
}
