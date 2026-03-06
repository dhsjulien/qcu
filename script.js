// ------------------------------
// Toutes les 60 questions intégrées directement
// ------------------------------
let questions = [
    {
        "id": 1,
        "question": "Dans quel cas, selon le code pénal, existe-t-il une présomption de légitime défense ?",
        "choices": [
            "Pour repousser de nuit l'entrée par effraction, violence ou ruse dans tout lieu",
            "Pour se défendre contre les auteurs de vol ou de pillage exécutés même sans violence",
            "Pour repousser de nuit l'entrée par effraction, violence ou ruse dans un lieu habité",
            "Pour repousser de nuit comme de jour l'entrée par violence ou ruse dans un lieu habité"
        ],
        "correct": 2
    },
    {
        "id": 2,
        "question": "Quelles sont les conditions de l'agression en légitime défense ?",
        "choices": [
            "Elle doit être injustifiée, réelle et actuelle",
            "Elle doit être nécessaire, immédiate et proportionnée à l'attaque",
            "Elle doit être simultanée, nécessaire et justifiée",
            "Elle doit être immédiate, justifiée et proportionnée à l'attaque"
        ],
        "correct": 0
    },
    {
        "id": 3,
        "question": "Quels sont les principes de la République ?",
        "choices": [
            "Indivisible, laïque, démocratique, sociale",
            "Égale, tolérante, libre, entraide",
            "Divisible, religieuse, tyrannique, élégante",
            "Indivisible, tolérante, libérale, écologique"
        ],
        "correct": 0
    },
    {
        "id": 4,
        "question": "Un agent de prévention et de sécurité au regard du livre VI du CSI :",
        "choices": [
            "Article 712-1 du CSI...",
            "Article L611-1 du CSI...",
            "Article 222-2 du CSI...",
            "Article 311-1 du CSI..."
        ],
        "correct": 1
    },
    {
        "id": 5,
        "question": "Quelle est la condition pour le renouvellement d'une carte professionnelle ?",
        "choices": [
            "Aucune des réponses",
            "Conformément aux articles R128-8 et R132-5...",
            "Conformément aux articles R612-17 et R622-15...",
            "Conformément aux articles R512-12 et R525-15..."
        ],
        "correct": 2
    },
    {
        "id": 6,
        "question": "Quel est le rôle d'un agent de prévention et de filtrage ?",
        "choices": [
            "Garder les lieux et refuser l'accès...",
            "Analyser et interpréter les alarmes...",
            "Rôle défini par le directeur",
            "Aucune des réponses"
        ],
        "correct": 1
    },
    {
        "id": 7,
        "question": "Qu'est-ce qui constitue un cas de présomption en légitime défense ?",
        "choices": [
            "Se défendre contre les auteurs de vols ou de pillages exécutés avec violence",
            "Se défendre en cas de désaccord",
            "Repousser de nuit l'entrée par effraction, violence ou ruse dans un lieu habité",
            "Aucune des réponses"
        ],
        "correct": 2
    },
    {
        "id": 8,
        "question": "Un Agent de Prévention et de Sécurité d'un service interne doit :",
        "choices": [
            "Se soumettre au code de déontologie",
            "Disposer d'une carte professionnelle",
            "Se soumettre à l'application du Livre VI",
            "Toutes les réponses sont exactes",
            "Porter une tenue réglementaire"
        ],
        "correct": 3
    },
    {
        "id": 9,
        "question": "Le respect de la vie privée se trouve dans quel article ?",
        "choices": [
            "Article 221-1 du code pénal",
            "Article 9 du code pénal",
            "Article 9 du code civil",
            "Article 222-7 du code pénal"
        ],
        "correct": 2
    },
    {
        "id": 10,
        "question": "Dans quel document s'inscrit la liberté d'aller et venir ?",
        "choices": [
            "Article 9 de la Déclaration universelle des droits de l'homme",
            "Article 10 de la Déclaration universelle des droits de l'homme",
            "Article 55 de la Déclaration universelle des droits de l'homme",
            "Article 13 de la Déclaration universelle des droits de l'homme"
        ],
        "correct": 3
    },
    {
        "id": 11,
        "question": "L'effraction consiste :",
        "choices": [
            "Aucune des réponses",
            "À escalader une clôture",
            "À agir avec force pour entrer dans un espace fermé sans y être autorisé",
            "Sonner et attendre l'ouverture"
        ],
        "correct": 2
    },
    {
        "id": 12,
        "question": "Je ne peux pas devenir formateur en sécurité privée si :",
        "choices": [
            "Je suis formateur dans un autre domaine",
            "J'ai eu une interdiction temporaire d'exercer",
            "Je n'ai pas passé mon TFP APS",
            "J'ai fait un excès de vitesse",
            "J'ai été agent de sécurité privée"
        ],
        "correct": 1
    },
    {
        "id": 13,
        "question": "Que contient le casier judiciaire B3 ?",
        "choices": [
            "Toutes les condamnations pénales",
            "Tous les délits",
            "Tous les crimes",
            "Les condamnations les plus graves"
        ],
        "correct": 3
    },
    {
        "id": 14,
        "question": "À quel moment doit-on entraver un individu ?",
        "choices": [
            "Dès qu'il a commis un vol",
            "Lorsqu'il est dangereux pour lui-même ou autrui",
            "Dès qu'il a commis n'importe quelle infraction",
            "À chaque fois"
        ],
        "correct": 1
    },
    {
        "id": 15,
        "question": "Lors d'une agression pendant une appréhension, quelle attitude adopter ?",
        "choices": [
            "Aucune des autres réponses",
            "Réagir conformément aux possibilités légales de légitime défense",
            "Ne pas déposer plainte",
            "Éviter de voir un médecin",
            "Accepter comme risque du métier"
        ],
        "correct": 1
    },
    {
        "id": 16,
        "question": "Un agent qui commet un homicide volontaire pour interrompre un crime contre un bien :",
        "choices": [
            "N'est pas pénalement responsable",
            "Est pénalement responsable"
        ],
        "correct": 1
    },
    {
        "id": 17,
        "question": "Un agent peut-il appréhender un individu entrant avec une matraque ?",
        "choices": [
            "Il peut juste l'aborder",
            "Oui au titre de l'article 73 du CPP",
            "Oui au titre de l'état de nécessité",
            "Non car pas d'infraction",
            "Aucune des réponses"
        ],
        "correct": 1
    },
    {
        "id": 18,
        "question": "En cas de renouvellement réglementaire de la carte professionnelle, peut-il exercer ?",
        "choices": [
            "Oui prévu au R612-17 du CSI",
            "Oui avec autorisation de l'employeur",
            "Non il doit attendre"
        ],
        "correct": 0
    },
    {
        "id": 19,
        "question": "Il est interdit à un agent de sécurité de :",
        "choices": [
            "Usage des informations selon article 643-2",
            "Usage des informations selon article 613-1",
            "Usage des informations selon article 612-4",
            "Aucune des réponses"
        ],
        "correct": 2
    },
    {
        "id": 20,
        "question": "Quel article concerne la non-assistance à personne en danger ?",
        "choices": [
            "Article 223-6 du code pénal",
            "Article 122-7 du code pénal",
            "Article 63 du code pénal",
            "Article 73 du code pénal"
        ],
        "correct": 0
    },


    {
    "id": 21,
    "question": "Pour ses missions de sécurité intérieure, la gendarmerie est sous l'autorité opérationnelle du :",
    "choices": [
        "Ministère de la défense et des armées",
        "Ministère de la justice",
        "Ministère de l'intérieur",
        "Aucune des réponses"
    ],
    "correct": 2
    },
    {
    "id": 22,
    "question": "Je suis un agent rondier, je viens d'apprendre par lettre recommandée que j'ai perdu mon permis de conduire, que dois-je faire ?",
    "choices": [
        "Aucune des réponses sont justes",
        "Je ne dis rien, je continue mon travail",
        "Je préviens mon employeur afin de trouver une solution transitoire",
        "Je perds mon travail et ma carte professionnelle"
    ],
    "correct": 2
    },
    {
    "id": 23,
    "question": "La légitime défense est traitée dans les articles du code pénal :",
    "choices": [
        "Uniquement l'article 73",
        "Aucune des réponses précédentes",
        "Articles 223-5, 223-6, 223-7",
        "Article 122-5"
    ],
    "correct": 3
    },
    {
    "id": 24,
    "question": "Le port et transport d'armes sans motif légitime, de type générateur d'aérosol :",
    "choices": [
        "Interdits selon l'article L415-1",
        "Aucune des réponses sont justes",
        "Toléré si dommage léger",
        "Interdits selon l'article R315-1 du CSI"
    ],
    "correct": 3
    },
    {
    "id": 25,
    "question": "Je suis en situation de pouvoir agir immédiatement contre une atteinte à l'intégrité physique d'une personne :",
    "choices": [
        "Je n'agis pas",
        "J'agis même s'il y a risque pour moi",
        "Je n'agis jamais sauf si armé",
        "J'agis s'il n'y a pas de risque pour moi ou pour autrui",
        "Aucune des autres réponses"
    ],
    "correct": 3
    },
    {
    "id": 26,
    "question": "Définition d'une arme par destination :",
    "choices": [
        "Article 226-6",
        "Article 132-75",
        "Article 55",
        "Aucune des réponses sont justes"
    ],
    "correct": 1
    },
    {
    "id": 27,
    "question": "Qui représente symboliquement la République française ?",
    "choices": [
        "La femme du Président",
        "La Vierge",
        "La Vénus de Milo",
        "Rien",
        "Marianne"
    ],
    "correct": 4
    },
    {
    "id": 28,
    "question": "Un agent masculin peut-il appréhender une femme auteur d'un vol ?",
    "choices": [
        "Appeler une collègue",
        "Ne peut rien faire",
        "Demander autorisation",
        "Agit conformément à l'article 73 du CPP",
        "Aucune des autres réponses"
    ],
    "correct": 3
    },
    {
    "id": 29,
    "question": "L'obtention de la carte professionnelle nécessite :",
    "choices": [
        "Parler français depuis 5 ans",
        "Connaissance évaluée librement",
        "Test TOEIC",
        "Test défini par la réglementation"
    ],
    "correct": 2
    },
    {
    "id": 30,
    "question": "Les agents exerçant des activités de protection physique des personnes :",
    "choices": [
        "Ne peuvent être armés",
        "Aucune des réponses",
        "Peuvent être armés catégorie B selon L613-12",
        "Peuvent être armés en tenue"
    ],
    "correct": 0
    },
    {
    "id": 31,
    "question": "Violence avec ITT de plus de 8 jours : qualification ?",
    "choices": [
        "Délit",
        "Aucune des autres réponses",
        "Rappel à la loi",
        "Crime",
        "Contravention"
    ],
    "correct": 0
    },
    {
    "id": 32,
    "question": "Le Premier ministre est nommé par :",
    "choices": [
        "Les députés et sénateurs",
        "Le Président de la République",
        "Les citoyens",
        "L'armée française",
        "Ses ministres"
    ],
    "correct": 1
    },
    {
    "id": 33,
    "question": "Limites d'exercice d'un APS sur la voie publique :",
    "choices": [
        "Uniquement à l'intérieur des bâtiments",
        "À l'intérieur et dans les lieux dont ils ont la garde",
        "Article L633-1",
        "Aucune des réponses"
    ],
    "correct": 1
    },
    {
    "id": 34,
    "question": "Trois éléments constitutifs d'une infraction :",
    "choices": [
        "Délictuelle, criminelle, contraventionnelle",
        "Légal, pénal et délit",
        "Pénal, matériel et moral",
        "Légal, matériel et moral"
    ],
    "correct": 3
    },
    {
    "id": 35,
    "question": "Quel casier judiciaire consulte le CNAPS ?",
    "choices": [
        "B1",
        "Toutes les réponses",
        "B3",
        "B2"
    ],
    "correct": 3
    },
    {
    "id": 36,
    "question": "Vous appréhendez un mineur de 16 ans pour vol :",
    "choices": [
        "Avertissement",
        "Appeler les forces de l'ordre",
        "Faire signer reconnaissance",
        "Aucune des autres réponses",
        "Le fouiller"
    ],
    "correct": 1
    },
    {
    "id": 37,
    "question": "Agent en grande surface peut-il appréhender un individu entrant avec matraque ?",
    "choices": [
        "Article 73 toute personne",
        "Article 803",
        "Article 73 flagrant délit",
        "Aucune des réponses"
    ],
    "correct": 0
    },
    {
    "id": 38,
    "question": "Les articles 226-1 et 226-2 définissent les sanctions :",
    "choices": [
        "Atteinte à l'intimité de la vie privée",
        "Mise en danger d'autrui",
        "Vol aggravé",
        "Vol simple"
    ],
    "correct": 0
    },
    {
    "id": 39,
    "question": "Abstention volontaire de combattre un sinistre :",
    "choices": [
        "Article 253-7",
        "Article 223-7",
        "Article 423-7",
        "Article 323-7"
    ],
    "correct": 1
    },
    {
    "id": 40,
    "question": "Constitue une rébellion le fait d'opposer une résistance violente :",
    "choices": [
        "Article 633-6",
        "Article 433-6",
        "Article 533-6",
        "Article 833-6"
    ],
    "correct": 1
    },
    {
        "id": 41,
        "question": "Quel article du code pénal traite le vol ?",
        "choices": [
        "article 223-6 du code pénal",
        "article 53 du code pénal",
        "article 226-1 du code pénal",
        "article 311- 1 du code pénal"
        ],
        "correct": 3
    },
    {
        "id": 42,
        "question": "Où se trouve siège le Sénat ?",
        "choices": [
        "l'Elysée",
        "Versailles",
        "Au Palais du Luxembourg",
        "Au quai Branly",
        "A Matignon"
        ],
        "correct": 2
    },
    {
        "id": 43,
        "question": "Qu'est ce qui constitue un cas de présomption en légitime défense conformément à l'article 122-6-2 du code pénal?",
        "choices": [
        "aucune des réponses",
        "se défendre verbalement",
        "se défendre en cas de désaccord",
        "se défendre contre les auteurs de vols ou de pillages exécutés avec violence."
        ],
        "correct": 3
    },
    {
        "id": 44,
        "question": "Quelles sont les conséquences de la perte définitive de la carte professionnelle pour un APS ?",
        "choices": [
        "rupture immédiate du contrat de travail conformément l'article L612-21 du CSI",
        "Aucune des réponses sont justes",
        "l'employeur doit proposer un reclassement a l'agent dans son domaine d'activité conformément a l'article 113-6 du CSI",
        "l'employeur vous accorde une dérogation administrative conformément a l'article 26 du CSI"
        ],
        "correct": 0
    },
    {
        "id": 45,
        "question": "Conformément au code de déontologie, les acteurs de la sécurité privée doivent respecter la confidentialité des informations dont ils ont eu connaissance dans le cadre de leur activité :",
        "choices": [
        "Aucune des autres réponses",
        "Sous réserve des cas prévus ou autorisés par la loi (ex: procédure judiciaire)",
        "Sauf en cas d'accord préalable de leur ancien chef de poste",
        "Dans le respect d'un délai de 5 ans",
        "Dans tous les cas"
        ],
        "correct": 1
    },
    {
        "id": 46,
        "question": "Les agents de sécurités employés par un bailleur immeuble a usage habitation peuvent être armés ?",
        "choices": [
        "non, ils ne font pas partis des forces de l'ordre publique",
        "oui, ils sont autorisés a porter toute les armes de catégorie D",
        "oui, ils peuvent être armes de bâton, de shocker et d'une bombe au poivre conformément au R513-1",
        "oui, ils peuvent être armés de bâton de type tonfas conformément au règlement R614-1 du CSIA"
        ],
        "correct": 3
    },
    {
        "id": 47,
        "question": "Qu'appelle-t-on le Palais Bourbon ?",
        "choices": [
        "Le Conseil constitutionnel",
        "La résidence du Premier ministre",
        "Le Sénat",
        "Le Conseil d'Etat",
        "L'Assemblée nationale"
        ],
        "correct": 4
    },
    {
        "id": 48,
        "question": "Un APS peut-il exercer sur la voie publique?",
        "choices": [
        "Aucune des réponses",
        "A titre exceptionnel sur la voie publique avec autorisation du Maire",
        "A titre exceptionnel par les organisateurs de la manifestations",
        "A titre exceptionnel sur la voie publique avec autorisation du Préfet du département"
        ],
        "correct": 3
    },
    {
        "id": 49,
        "question": "Je suis agent de prévention et de sécurité, intervenant en sous-traitance, pour une autre entreprise de sécurité, quelle tenue dois-je porter ?",
        "choices": [
        "Peu importe la tenue, seule la carte professionnelle compte",
        "Aucune des autres réponses",
        "La tenue de mon entreprise",
        "Je dois porter ma tenue mais avec les insignes et les logos de l'entreprise qui détient le contrat",
        "La tenue de l'entreprise qui détient le contrat"
        ],
        "correct": 2
    },
    {
        "id": 50,
        "question": "En tant qu'agent rondier puis-je utiliser un gyrophare orange en dehors de mon site ?",
        "choices": [
        "OUI, cela est autorisé",
        "réservé uniquement au agent GPIS",
        "C'est toléré par les forces de l'ordre",
        "NON, cela est interdit"
        ],
        "correct": 3
    },
    {
        "id": 51,
        "question": "Quelle situation est considérée comme un cas d'aggravation de l'infraction de vol ? Le fait de commettre un vol :",
        "choices": [
        "Dans un magasin après avoir rendu inopérantes les caméras de surveillance",
        "Aucune des autres réponses",
        "Dans un magasin après s'être laissé enfermer volontairement à la fermeture des portes",
        "En s'enfuyant après le larcin",
        "En prenant indûment la qualité d'une personne dépositaire de l'autorité publique"
        ],
        "correct": 4
    },
    {
        "id": 52,
        "question": "Dans quelles circonstances un agent de sécurité en poste peut-il appréhender une personne ?",
        "choices": [
        "En cas de comportement irrespectueux vis-à-vis des autres usagers du site",
        "Aucune des réponses",
        "En cas de crime flagrant à l'intérieur du site"
        ],
        "correct": 2
    },
    {
        "id": 53,
        "question": "Quels sont les différentes formes de libertés publiques ?",
        "choices": [
        "Aucune des réponses sont juste",
        "Liberté de choix et la liberté d'aller et venir",
        "Liberté individuelle (la liberté d'opinion) et la liberté collective (le droit de grève)",
        "Liberté de vivre et la liberté de mourir"
        ],
        "correct": 2
    },
    {
        "id": 54,
        "question": "Au titre de quel loi un agent de sécurité a-t-il le droit d'appréhender ?",
        "choices": [
        "L'article 73 lui permet d'appréhender l'individu",
        "L'article 53 lui permet d'appréhender l'individu",
        "L'article 55 lui permet d'appréhender l'individu",
        "L'article 803 lui permet d'appréhender l'individu"
        ],
        "correct": 0
    },
    {
        "id": 55,
        "question": "Dans le cadre de son activité d'agent de sécurité, l'agent de sécurité doit porter une tenue ?",
        "choices": [
        "Particulière et qui ne porte pas confusion avec les services de sécurité publique conformément à l'article 613-4 du CSI",
        "Soignée et qui ne porte pas confusion avec les services de sécurité publique conformément à l'article 226-4 du CSI",
        "Soignée et qui ne porte pas confusion avec les services de sécurité publique conformément à l'article 813-4 du CSI",
        "Soignée et qui ne porte pas confusion avec les services de sécurité publique conformément à l'article 122-5 du CSI"
        ],
        "correct": 0
    },
    {
        "id": 56,
        "question": "Quel mot finissant en « té » est aussi une valeur de la République ?",
        "choices": [
        "Probité",
        "Honnêteté",
        "Laïcité",
        "Gaîté",
        "Sérénité"
        ],
        "correct": 2
    },
    {
        "id": 57,
        "question": "La carte professionnelle peut-être retirée :",
        "choices": [
        "Aucune des réponses précédentes",
        "Change d'employeur",
        "Déménage sur une autre région",
        "Fait l'objet d'une inscription sur le casier judiciaire"
        ],
        "correct": 3
    },
    {
        "id": 58,
        "question": "Qui vote les lois en France ?",
        "choices": [
        "Le Parlement",
        "Le Gouvernement",
        "Les citoyens",
        "Le Président de la République",
        "Les magistrats"
        ],
        "correct": 0
    },
    {
        "id": 59,
        "question": "Quelles sont les conditions de la défense en légitime défense ?",
        "choices": [
        "Elle doit être nécessaire, immédiate et proportionnée à l'attaque",
        "Elle doit être immédiate, justifiée et proportionnée à l'attaque",
        "Elle doit être simultanée, nécessaire et justifiée",
        "Elle doit être injustifiée, réelle et actuelle"
        ],
        "correct": 0
    },
    {
        "id": 60,
        "question": "Il est interdit aux personnes exerçant une activité de sécurité privée :",
        "choices": [
        "De se livrer à une surveillance contre le vol à l'étalage",
        "De se livrer à une surveillance dans un stade",
        "Aucune des autres réponses",
        "De s'immiscer dans le déroulement d'un conflit du travail",
        "De se livrer à une surveillance sur des lieux recevant du public"
        ],
        "correct": 3
    },

  {"id":61, "question":"L'acte par lequel une douleur ou des souffrances aigüe, physique ou mentales, sont intentionnellement infligées à une personne s'appelle","choices":["Une atteinte involontaire à l'intégrité de la personne","Aucune des réponses précédentes","Des violences ayant occasionnées une incapacité totale de travail","Des actes de torture et/ou barbarie"],"correct":3},
  {"id":62, "question":"Quand peut-on considérer que la captation d'une image revêt un caractère illégal ?","choices":["Quand l'image est fixée sans le consentement d'une personne se trouvant dans un lieu public","Quand l'image est fixée sans le consentement d'une personne se trouvant dans un lieu privé","Quand l'image est fixée sans le consentement d'une personne se trouvant dans un lieu public ou privé","Seul la transmission d'une image peut revêtir un caractère illégal","Aucune des réponses est bonne"],"correct":0},
  {"id":63, "question":"Le respect des conditions pour être recruté dans une entreprise privée de sécurité est garanti par la détention :","choices":["D'un contrat de travail","D'une attestation de l'employeur","Un badge au nom de la société qui emploie","Aucune des autres réponses","D'une carte professionnelle valide dématérialisée délivrée par le Directeur du CNAPS"],"correct":3},
  {"id":64, "question":"Le drapeau de la République française est :","choices":["Seulement obligatoire en présence du Président de la République","Tricolore","Rouge, bleu, blanc à l'horizontal","Obligatoire lors des matchs de football","Le même que celui de l'Union européenne"],"correct":1},
  {"id":65, "question":"Définition de la réquisition ?","choices":["Procédé permettant à l'administration de pénétrer dans le domicile d'autrui","Procédé permettant à l'administration, moyennant indemnisation, de contraindre les particuliers à lui accorder leurs services","Procédé permettant à l'administration d'accuser arbitrairement autrui","Procédé permettant à l'administration de s'approprier un bien appartenant à autrui","Aucune des réponses précédente"],"correct":1},
  {"id":66, "question":"Qui assure, pour le compte de l'autorité administrative, le contrôle des personnes exerçant une activité privée de sécurité ?","choices":["Le CNAPS","Aucune des réponses","Un huissier de justice","Le maire où se situe l'activité","La commission départementale de sécurité publique"],"correct":0},
  {"id":67, "question":"Les convoyeurs de fonds peuvent-ils être armés lorsqu'ils effectuent en véhicule banalisé un transport de fonds, bijoux ou métaux précieux ?","choices":["Oui sur ordre du responsable de la société","Non ils ne peuvent être armés","Oui avec l'autorisation du préfet","Aucune des réponses précédentes","Oui si la valeur des biens est supérieure à 1 300 000 euros"],"correct":1},
  {"id":68, "question":"Le port et transport d'armes sans agrément spécifique, de type générateurs aérosols (de catégorie D) et arme à impulsion électrique de contact :","choices":["Aucune des autres réponses","Constitue une contravention passible d'une peine d'emprisonnement","Constitue une infraction qualifiée de délit, passible d'une peine d'un an d'emprisonnement et de 15000 euros d'amende","Est interdit par la loi sauf en cas de légitime défense","Est autorisé"],"correct":2},
  {"id":69, "question":"Les intérêts fondamentaux de la Nation concernent entre autres :","choices":["La sécurité et les moyens de défense et de diplomatie","La lutte contre l'illettrisme","Le droit d'aller et venir des citoyens","La répression de la petite délinquance"],"correct":0},
  {"id":70, "question":"Gouvernement :","choices":["Rend la justice","Nomme les Maires","Vote les lois","Dirige les Communes","Fait des projets de loi"],"correct":4},
  {"id":71, "question":"En cas d'arrivée d'une personne avec un chien guide d'aveugles ou d'assistance, l'agent de sécurité privée :","choices":["Autorise l'accès de la personne avec son chien dès lors qu'il a reconnu qu'il s'agissait d'un chien guide d'aveugles ou d'assistance","Autorise l'accès de la personne avec son chien mais prévient ses collègues pour surveiller la personne et son chien","Arrête la personne afin de demander la consigne à sa hiérarchie","Demande à la personne si elle peut se passer de son chien pour entrer","Lui interdit l'accès si le lieu n'autorise pas les chiens"],"correct":0},
  {"id":72, "question":"Quelles sont les conséquences de la perte définitive de la carte professionnelle pour un APS ?","choices":["Rupture immédiate du contrat de travail","L'employeur doit proposer un reclassement à l'agent dans son domaine d'activité","Retenue sur salaire durant la durée du retrait de la carte professionnelle","L'employeur vous accorde une dérogation administrative","Aucune des réponses précédentes"],"correct":0},
  {"id":73, "question":"Quelles sont les conditions relatives à la défense devant être réunies pour pouvoir invoquer la légitime défense ?","choices":["Instinctive, sans violence, après sommations","Indispensable, proportionnée à l'attitude de l'agresseur, différée en cas d'hésitation","Actuelle, dirigée contre l'agresseur, imminente","Nécessaire, dans le même temps, proportionnée à la gravité de l'atteinte","Aucune des autres réponses"],"correct":3},
  {"id":74, "question":"Qui assure pour le compte de l'autorité administrative, le contrôle des personnes exerçant une activité privée de sécurité ?","choices":["Le CNAPS","Un huissier de justice","Le maire où se situe l'activité","Aucune des réponses","La commission départementale de la sécurité publique"],"correct":0},
  {"id":75, "question":"Agent de sécurité, vous appréhendez un mineur de 16 ans qui vient de dérober un téléphone portable. Que faites-vous ?","choices":["Je l'appréhende et j'appelle les forces de l'ordre","Je lui donne un sérieux avertissement et je le laisse partir","Aucune des autres réponses","Je le fouille pour récupérer l'objet volé","Je lui fais signer une reconnaissance de vol"],"correct":0},
  {"id":76, "question":"Sur le plan strictement juridique, un APS, dans le cadre de ses missions, a :","choices":["Moins de prérogatives qu'un APJ","Aucune des réponses précédentes","Plus de prérogatives qu'un APJ","Autant de prérogatives qu'un APJ"],"correct":0},
  {"id":77, "question":"Le CP précise les conditions de la légitime défense. Celle-ci doit répondre à une agression :","choices":["Injustifiée envers soi-même ou autrui","Verbale","Aucune des réponses précédentes","Discriminatoire"],"correct":0},
  {"id":78, "question":"Un acte de violence sur autrui ayant entrainé une ITT de plus de 8 jours est une infraction prévue et réprimée par le code pénal. Légalement, comment qualifie-t-on cette infraction et la peine encourue ?","choices":["Rappel à la loi passible d'emprisonnement et d'amende","Crime passible d'emprisonnement et d'amende","Aucune des autres réponses","Contravention passible d'emprisonnement et d'amende","Délit passible d'emprisonnement et d'amende"],"correct":4},
  {"id":79, "question":"Pour exercer une activité de sécurité privée, il faut :","choices":["Obtenir une carte professionnelle liée à l'activité exercée","Satisfaire à une enquête administrative par le Ministère de l'intérieur","Aucune des réponses précédentes","Être obligatoirement de nationalité française","Ne pas faire l'objet d'une condamnation à une peine criminelle inscrite au bulletin N°4 du casier judiciaire"],"correct":0},
  {"id":80, "question":"Qu'est-ce qu'une arme de catégorie D ?","choices":["Arme soumise à autorisation","Arme interdite à l'acquisition et à la détention","Aucune des réponses précédentes","Arme soumise à déclaration","Arme dont l'acquisition et la détention sont libre"],"correct":4},
  {"id":81, "question":"Selon l'article 1er de la Constitution, l'égal accès des femmes et des hommes est favorisé par la loi.","choices":["Uniquement au travail","Pour les mandats électoraux et au travail","Uniquement dans la vie privée","Uniquement à l'école","Uniquement pour être élu"],"correct":1},
  {"id":82, "question":"Quel élément peut constituer le délit de mise en danger d'autrui ?","choices":["La violation d'obligation de sécurité imposée par la loi ou le règlement","Aucune des réponses précédentes","La violation d'obligation de sécurité qui n'est pas intentionnelle"],"correct":0},
  {"id":83, "question":"Dans le cadre de son activité, l'agent privé de sécurité porte :","choices":["Un uniforme avec au maximum 2 insignes distinctifs placés de façon à ne pas être visibles","Une tenue particulière qui doit toujours être conforme aux exigences des services d'incendie","Une tenue particulière qui ne doit entraîner aucune confusion avec les tenues des agents des services publics","Un uniforme avec au minimum 1 insigne distinctif placé de façon à être toujours visible","Aucune des autres réponses"],"correct":2},
  {"id":84, "question":"Que signifie l'acronyme PIF dans le cadre d'un système de sécurité lors d'un évènement ?","choices":["Permis d'inspection et de foule","Passage interdit à la foule","Point d'inspection filtrage","Prise d'intérêt financier","Poste itinérant de filtrage"],"correct":3},
  {"id":85, "question":"Dans quelle situation seriez-vous reconnu coupable de séquestration vis-à-vis du Code Pénal ?","choices":["En immobilisant un individu coupable de violence avec arme sur une personne inconsciente au sol","En empêchant un spectateur de concert de monter sur scène pour obtenir un selfie","En enfermant à clé dans la salle de démarque une personne refusant de reconnaître un vol, sans prévenir un OPJ","En incitant une personne victime d'un malaise à attendre les secours après avoir reçu la confirmation de leur arrivée"],"correct":2},
  {"id":86, "question":"Un fusil de chasse à canon lisse est classé en catégorie ?","choices":["Aucune des réponses précédentes","B","H","C","J","D","C"],"correct":3},
  {"id":87, "question":"Au terme de la loi, en cas de légitime défense, la riposte doit être :","choices":["Aucune des réponses précédentes","Proportionnée à l'attaque","S'il y a disproportion entre les moyens employés pour se défendre et la gravité de la menace","S'il commet un homicide pour défendre un bien"],"correct":1},
  {"id":88, "question":"Le vol à main armée est :","choices":["Une contravention","Aucune des réponses","Un délit","Un acte terroriste","Un crime"],"correct":4},
  {"id":89, "question":"Que commémore le 14 juillet ?","choices":["La fin de la 1ère Guerre mondiale","La fin de la 2ème Guerre mondiale","La mort du Roi Louis XVI","La prise de la Bastille et de la Fête de la Fédération","La première Constitution de la République"],"correct":3},
  {"id":90, "question":"Peut-on enregistrer et diffuser, aux moyens d'un procédé quelconque, des paroles prononcées à titre privé, sans le consentement de leur auteur ?","choices":["Non, mais on peut simplement les écouter","Non, dans aucun cas","Aucune des réponses précédentes","Non, mais on peut les transmettre sans les écouter"],"correct":1},
  {"id":91, "question":"Deux collègues sont agressés physiquement par trois jeunes et semblent être en difficulté :","choices":["Aucune des réponses précédentes","Je peux intervenir car je suis dans le cas de la légitime défense d'autrui","Je ne peux intervenir car je ne suis pas en service","Je ne peux intervenir car ils ne font partie de mon équipe"],"correct":1},
  {"id":92, "question":"Qu'est-ce qu'une arme de catégorie A ?","choices":["Arme soumise à enregistrement","Arme interdite à l'acquisition et à la détention","Arme soumise à autorisation","Arme soumise à déclaration","Aucune des réponses précédentes"],"correct":1},
  {"id":93, "question":"L'infraction est constituée de trois éléments constitutifs","choices":["L'élément légal, matériel, moral","L'élément légal, constitutionnel, normal","Aucune des réponses précédentes","L'élément pénal, matériel, moral","L'élément coupable, intentionnel, moral"],"correct":0},
  {"id":94, "question":"Une personne qui, ayant connaissance qu'une agression va être commise contre un tiers par un individu, ne fait rien, commet l'infraction de :","choices":["Omission d'empêcher un crime ou un délit contre l'intégrité d'une personne","Non dénonciation d'un crime","Aucune des autres réponses","Mise en danger de vie d'autrui","Non assistance à personne en danger"],"correct":0},
  {"id":95, "question":"Quelle est l'autorité qui délivre les cartes professionnelles pour les acteurs de la sécurité ?","choices":["Commission locale des agents de protection et de contrôle","Commission locale d'agrément et de contrôle (CLAC)","Comité législatif des agences de transports sécurisés","Le directeur du CNAPS"],"correct":3},
  {"id":96, "question":"Le fait d'entraver, d'une manière concertée et à l'aide de menace, l'exercice de la liberté du travail :","choices":["Aucune des réponses précédentes","Est réprimé par le code de la construction et de l'habitation","Est réprimé par le code pénal","N'est pas réprimé par le code pénal"],"correct":2},
  {"id":97, "question":"Dans quel cas, selon le code pénal existe-t-il une présomption de légitime défense ?","choices":["Pour repousser de nuit comme de jour l'entrée par violence ou ruse dans un lieu habité","Pour repousser de nuit l'entrée par effraction, violence ou ruse dans tout lieu","Pour se défendre contre les auteurs de vols ou de pillage exécutés même sans violence","Pour repousser de nuit l'entrée par effraction, violence ou ruse dans un lieu habité"],"correct":3},
  {"id":98, "question":"Le vol c'est au sens pénal :","choices":["Aucune des réponses","La soustraction frauduleuse à autrui","L'approbation frauduleuse d'un bien appartenant à autrui","Le détournement d'un bien à autrui","L'extorsion d'un bien appartenant à autrui"],"correct":1},
  {"id":99, "question":"Que peut-on considérer en cas de flagrance ou en cas de crime ou délit ?","choices":["Quand l'individu est l'objet d'une rumeur publique","Une infraction en train de se commettre","Aucune des réponses","Quand un fait vous a été rapporté"],"correct":1},
  {"id":100, "question":"Que signifie le sigle CNAPS pour les acteurs de la sécurité ?","choices":["Aucune des réponses précédentes","Comité National des Agences de Transports Sécurisés","Commission Nationale des Agents de Prévention et de Sécurité","Conseil National des Activités Privées de Sécurité","Conseil National des Agents de Protection Physique"],"correct":3},
  {"id":101, "question":"Quelles sont les conditions de rétention d'une personne dans le cadre de l'article 73 du Code de procédure pénale ?","choices":["La personne appréhendée reste sous la surveillance et la protection du CNAPS","Aucune des autres réponses","La personne malveillante reste sous la surveillance et la protection de celui qui l'a appréhendé","La personne appréhendée reste sous la responsabilité de l'OPJ uniquement","La personne appréhendée reste sous la surveillance et la protection du directeur de l'établissement"],"correct":2},
  {"id":102, "question":"L'activité de protection physique peut se compléter par une activité :","choices":["De surveillance par des systèmes électroniques","D'agent privé de recherche","De transport de fonds","De vente de matériel de sécurité","Aucune des réponses précédentes"],"correct":4},
  {"id":103, "question":"Pour demander une carte professionnelle ou une autorisation d'entrée en formation, il est nécessaire de fournir pour les ressortissants français :","choices":["Un certificat médical","Un justificatif de domicile de moins de 3 mois","Un extrait de casier judiciaire B3","Une attestation de moralité de la préfecture","Un contrat de travail"],"correct":1},
  {"id":104, "question":"Il est interdit aux personnes exerçant une activité de sécurité privée :","choices":["De procéder à l'inspection visuelle des bagages sur le lieu d'emploi","Aucune des réponses précédentes","D'effectuer leur mission sur la voie publique avec autorisation du préfet","De se livrer à une surveillance relative aux appartenances syndicales des personnes"],"correct":3},
  {"id":105, "question":"A qui s'imposent les règles du code de déontologie qui sont maintenant intégrées dans le CSI (art R631-1 et suivants) ?","choices":["À la gendarmerie nationale","Aucune des réponses précédentes","Aux entreprises de la sécurité privée","Aux agents municipaux","À la police nationale"],"correct":2},
  {"id":106, "question":"Qu'est-ce qu'une arme de catégorie A1 ?","choices":["Arme soumise à déclaration","Arme soumise à enregistrement","Aucune des autres réponses","Arme interdite à l'acquisition et à la détention","Arme soumise à autorisation"],"correct":3},
  {"id":107, "question":"Quel est le risque majeur de clôturer un site pour une manifestation culturelle ?","choices":["Accès des secours difficile","Aucun, la clôture supprime les risques","Engorgement important à l'entrée du site","Rendre l'évacuation plus difficile","Aucune des réponses précédentes"],"correct":3},
  {"id":108, "question":"Que définit l'article 9 du code civil ?","choices":["Le droit au respect de la vie publique","Le droit de la propriété","Le droit d'aller et venir","Le droit au respect de la vie privée","Aucune des réponses"],"correct":3},
  {"id":109, "question":"Laquelle de ces propositions constitue une infraction ?","choices":["Le fait de ne pas porter secours à une personne blessée dans l'établissement surveillé","Aucune des autres réponses","Le fait de ne pas agir contre une personne qui menace avec une arme","Le fait de ne pas remplir correctement la main courante","Le fait d'arriver en léger retard à sa prise de poste sans avoir prévenu"],"correct":0},
  {"id":110, "question":"Quels sont les principes de la République ?","choices":["Indivisible, tolérante, libérale, écologique","Écologique, syndicale, tolérante, libre","Indivisible, laïque, démocratique, sociale","Égale, tolérante, libre, entraide","Divisible, religieuse, tyrannique, élégante"],"correct":2},
  {"id":111, "question":"La langue française :","choices":["Ne peut être parlée que par des Françaises et Français","A toujours existé","N'est pas la seule langue officielle de la République","Est obligatoire sur les documents officiels","A été créée par l'Académie française"],"correct":3},
  {"id":112, "question":"Que risque un employeur qui a conclu un contrat de travail avec un agent de sécurité non titulaire de sa carte professionnelle ?","choices":["1 an d'emprisonnement et 2 000 euros d'amende","1 an d'emprisonnement et 15 000 euros d'amende","Aucune des réponses précédentes","L'employeur ne risque rien","2 ans d'emprisonnement et 30 000 euros d'amende"],"correct":4},
  {"id":113, "question":"Pour réaliser une mission de sécurité privée sur la voie publique, il faut :","choices":["Une autorisation du CNAPS, seulement pour le motif de surveillance contre les actes de terrorisme","Une autorisation de la préfecture pour des missions de surveillance contre les vols, dégradations, effractions et actes de terrorisme visant les biens dont les agents de sécurité privée ont la garde","Une autorisation de la mairie pour des missions de surveillance contre les vols","Une autorisation de la préfecture, seulement pour les missions de prévention du terrorisme","Une autorisation du CNAPS pour des missions de surveillance contre les vols"],"correct":1},
  {"id":114, "question":"À quel moment doit-on entraver un individu ?","choices":["Dès lors qu'il a commis n'importe quelle infraction","Dès lors qu'il a commis un vol","À chaque contrôle","Lorsqu'il est dangereux pour lui-même ou pour autrui"],"correct":3},
  {"id":115, "question":"Un APS autorisé au port d'armes peut-il détenir l'arme de service à son domicile ?","choices":["Aucune des autres réponses","Oui, il est titulaire d'une autorisation de port d'armes","Oui, à condition de l'enfermer dans un coffre-fort","Oui, avec l'autorisation de son employeur","Non, en aucun cas"],"correct":4},
  {"id":116, "question":"Pour être constituée, la menace de commettre un crime ou un délit contre autrui doit :","choices":["Être émise par une personne ayant conscience de menacer","Être formulée sur le ton de la plaisanterie","Aucune des réponses précédentes","Être obligatoirement écrite"],"correct":0},
  {"id":117, "question":"En cas d'arrivée d'une personne avec un chien guide d'aveugles ou d'assistance, l'agent de sécurité privée :","choices":["Arrête la personne afin de demander la consigne à sa hiérarchie","Lui interdit l'accès si le lieu n'autorise pas les chiens","Autorise l'accès de la personne en lui demandant de faire très attention à son chien","Accompagne la personne durant ses déplacements dans les lieux","Peut demander à la personne si elle est en possession des documents justifiant que son chien est un chien guide ou d'assistance"],"correct":4},
  {"id":118, "question":"Après avoir appréhendé une personne ayant commis un vol, en règle générale :","choices":["Je dispose d'un délai d'une heure pour appeler l'OPJ","Je procède à un interrogatoire de l'intéressé pour qu'il avoue, ne voulant pas appeler les forces de l'ordre pour rien","Aucune des réponses","Je procède à une fouille de l'intéressé pour récupérer le matériel volé et en faire l'inventaire","J'avise sans délai les forces de l'ordre"],"correct":4},
  {"id":119, "question":"L'hymne national commence par :","choices":["L'étendard sanglant est levé","Allons enfants de la Patrie","Le jour de gloire est arrivé","Aux armes, citoyens","Marchons, oui marchons"],"correct":1},
  {"id":120, "question":"Dans quelle situation seriez-vous reconnu coupable de séquestration vis-à-vis du Code Pénal ?","choices":["En enfermant à clé dans la salle de démarque une personne refusant de reconnaître un vol, sans prévenir un OPJ","En incitant une personne victime d'un malaise à attendre les secours après avoir reçu la confirmation de leur arrivée","En immobilisant un individu coupable de violence avec arme sur une personne inconsciente au sol","En empêchant un spectateur de concert de monter sur scène pour obtenir un selfie"],"correct":0},
  {"id":121, "question":"Que définit l'article 9 du code civil ?","choices":["Aucune des réponses précédentes","Le droit au respect de la vie privée","Le droit d'aller et venir","Le droit au respect de la vie publique","Le droit de la propriété"],"correct":1},
  {"id":122, "question":"Qui a composé La Marseillaise ?","choices":["Rouget de Lisle","De Gaulle","Voltaire","Napoléon 1er","Robespierre"],"correct":0},
  {"id":123, "question":"Vous devez réaliser une appréhension dans le cadre légal mais la personne refuse de vous laisser faire en se débattant. Vous avez le droit dans un premier temps :","choices":["Aucune des autres réponses","D'utiliser la violence","D'utiliser la force strictement nécessaire au but recherché","D'utiliser tous les moyens pour menotter la personne"],"correct":2},
  {"id":124, "question":"On vous demande d'effectuer une palpation sur une personne.","choices":["La palpation peut se faire sans accord de la personne","Les agents de sécurité peuvent procéder à des palpations de sécurité sans conditions particulières","Retirer un vêtement","Aucune des réponses précédentes","La palpation ne peut se faire qu'avec l'accord de la personne"],"correct":4},
  {"id":125, "question":"L'hymne national peut être chanté :","choices":["Uniquement devant le Président de la République","Uniquement pour la fête nationale du 14 juillet","Par tout le monde","Uniquement par les militaires","Uniquement par les responsables politiques"],"correct":2},
  {"id":126, "question":"Un agent de sécurité n'est pas pénalement responsable :","choices":["Aucune des réponses précédentes","S'il commet un acte prescrit ou autorisé par des dispositions législatives ou réglementaires","S'il commet un homicide pour défendre un bien","S'il y a disproportion entre les moyens employées pour se défendre et la gravité de la menace"],"correct":1},
{
"id":127,
"question":"Comment un agent qui participe à une prestation évènementielle peut-il prévenir un conflit ?",
"choices":[
"En haussant le ton dès qu'un conflit débute",
"Aucune des autres réponses",
"En démontrant aux personnes qui est détenteur de l'autorité",
"En ayant une attitude et un comportement exemplaire",
"En pratiquant un sport de combat"
],
"correct":3
},
{
"id":128,
"question":"Quelle est la première attitude à adopter pour résoudre un conflit ?",
"choices":[
"Ecoute active",
"La fuite",
"La confrontation",
"L'agressivité",
"Aucune des réponses"
],
"correct":0
},
{
"id":129,
"question":"Quelle est la conduite à tenir en cas de rixe ?",
"choices":[
"Appeler le PC et gérer les individus",
"Faire appel aux forces de l'ordre et consulter médicalement",
"Appeler la police et fuir",
"Aucune des réponses précédentes",
"Appliquer des techniques d'auto-défense"
],
"correct":1
},
{
"id":130,
"question":"Vous êtes en conflit avec une personne. Lors de vos échanges, vous devez :",
"choices":[
"Aucune des autres réponses",
"Ecouter attentivement et vous baser sur les faits constatés",
"Essayer de vous imposer par votre discours",
"Ecouter passivement, acquiescer et vous excuser",
"Parler plus que l'écouter"
],
"correct":1
},
{
"id":131,
"question":"Les règles de communication à utiliser lors d'un conflit sont :",
"choices":[
"Utiliser les marques de politesse et provoquer un intérêt pour l'autre personne",
"Faire preuve d'ironie",
"Ne pas regarder la personne",
"Ignorer la personne"
],
"correct":0
},
{
"id":0,
"question":"L'attitude fermée correspond à quel mouvement corporel ?",
"choices":[
"Les bras croisés",
"Poing fermé",
"Aucune des réponses",
"Se recoiffer"
],
"correct":-1
},
{
"id":132,
"question":"Quels sont les quatre types de comportement lors de la communication ?",
"choices":[
"Négatif-évitant-positif-attitude assertive",
"Agressivité-fuite-manipulation-attitude assertive",
"Conflictuel-fuyant-gentil-sûr de soi",
"Conflictuel-évitant-positif-attitude assertive",
"Agressivité-séduction-lâcheté-affirmation",
"Conflictuel-évitant-constructif-charismatique"
],
"correct":1
},
{
"id":133,
"question":"Quels sont les indices de violence potentielle ?",
"choices":[
"Instabilité mentale-situation d'énervement-sentiment d'exclusion-sentiment d'injustice",
"Situation d'attente-sentiments d'exclusion-préjugés-manque de respect",
"Préjugés-situation interminable-sentiment d'exclusion-instabilité",
"Sentiment d'injustice-attente-sentiment d'intrusion-exposition aux préjugés-instabilité mentale",
"Injustice-préjugés-manque de respect-problèmes mentaux"
],
"correct":3
},
{
"id":134,
"question":"Quelle est la conduite à tenir lors d'une attaque à main armée ?",
"choices":[
"Aucune des réponses précédentes",
"Essayer de désarmer l'agresseur",
"Maîtriser l'agresseur",
"Appeler un supérieur et apaiser",
"Ne pas intervenir et garder son calme"
],
"correct":4
},
{
"id":135,
"question":"On peut diminuer la tension avec un interlocuteur en :",
"choices":[
"Aucune des réponses",
"Lui demander fermement de se calmer",
"Prendre le temps de l'écouter",
"Appeler un technicien",
"Être d'accord avec tout"
],
"correct":2
},

{
"id":136,
"question":"Parmi les propositions suivantes, laquelle n'est pas un facteur déclencheur d'agressivité ?",
"choices":[
"L'écoute",
"Aucune des réponses",
"La bienveillance",
"La compréhension",
"L'excès d'estime de soi"
],
"correct":2
},

{
"id":137,
"question":"Quels sont les facteurs déterminants internes de conduite conflictuelle ?",
"choices":[
"Impartialité humour retrait ambiguïté impolitesse",
"Impulsivité instabilité excitabilité intolérance à la frustration besoin de gratification",
"Gentil cool arrogant attentionné",
"Toutes les réponses"
],
"correct":1
},

{
"id":138,
"question":"Lorsqu'un conflit n'est pas clairement déclaré il est :",
"choices":[
"Préalable",
"Aucune des réponses",
"Latent",
"Dégradé",
"Ouvert"
],
"correct":2
},

{
"id":139,
"question":"Une opposition d'idées où chacun exprime son hostilité s'appelle :",
"choices":[
"Interview",
"Conflit",
"Aucune des réponses",
"Parrainage",
"Exposé"
],
"correct":1
},

{
"id":140,
"question":"Quelles sont les étapes du comportement conflictuel ?",
"choices":[
"Aucune",
"Accumulation émotionnelle, tension, panique, violence, détente",
"Calme absence émotion non violent",
"Impulsivité instabilité excitabilité"
],
"correct":1
},

{
"id":141,
"question":"Quelle attitude est adaptée pour résoudre un conflit ?",
"choices":[
"Critiquer écouter imposer inciter",
"Imposer dialoguer interroger inciter",
"Interroger contester reformuler accepter",
"Aucune",
"Ecouter reformuler interroger confirmer"
],
"correct":4
},

{
"id":142,
"question":"Quelle règle adopter pour prévenir les conflits ?",
"choices":[
"Adopter un cadre de référence et une élocution adaptée",
"Parler fort",
"Toutes les réponses",
"Langage familier posture inadaptée"
],
"correct":0
},

{
"id":143,
"question":"Quelle méthode permet de résoudre un conflit ?",
"choices":[
"Méthode Heimlich",
"Méthode assertive",
"Technique Eric",
"Aucune",
"Technique Houel"
],
"correct":2
},

{
"id":144,
"question":"Un client demande une entorse aux consignes de filtrage :",
"choices":[
"Aucune des réponses ",
"Non, ce sont les consignes",
"Non, mais je vois avec mon chef",
"Non, mais il existe peut-être une autre solution, on va essayer de voir",
"D'accord mais ne le dites pas à mon chef "
],
"correct":3
},

{
"id":145,
"question":"Quelle règle utiliser pour désamorcer la colère ?",
"choices":[
"Aucune des réponses ",
"Confirmer la façon dont vous allez traiter la demande",
"Faire des réponses longues",
"Ignorer la personne",
"Eviter de répondre et parler plus fort"
],
"correct":1
},

{
"id":145,
"question":"Une personne vous provoque verbalement sur votre lieu de travail :",
"choices":[
"Inciter à l'agression pour pouvoir risposter",
"Appeler immédiatement la police",
"Faire intervenir un tiers pour désamorcer la situation",
"L'évacuer par la force",
"L'ignorer"
],
"correct":2
},

{
"id":146,
"question":"Un individu alcoolisé frappe quelqu'un sur le parking :",
"choices":[
"Intervenir car cela concerne l'établissement",
"Intervenir pour légitime défense d'autrui",
"Ne pas intervenir",
"Aucune",
"Appeler le SAMU"
],
"correct":0
},

{
"id":147,
"question":"Un client se plaint que son titre d'accès ne fonctionne pas :",
"choices":[
"Proposer vos services après votre vacation",
"Refuser de répondre",
"Lui procurer un titre valide",
"L'écouter et l'orienter vers le service litiges",
"Aucune"
],
"correct":3
},

{
"id":148,
"question":"Quel type de personne génère le plus de conflits ?",
"choices":[
"Une personne bavarde",
"Une personne insatisfaite",
"Aucune",
"Une personne ne parlant pas français",
"Une personne timide"
],
"correct":1
},

{
"id":149,
"question":"Lors d'un dialogue avec une personne agressive il faut faire attention :",
"choices":[
"Ne pas l'énerver garder son calme articuler",
"Aucune",
"Au regard voix gestes",
"Intonation intensité débit de parole",
"Au ton utilisé"
],
"correct":3
},

{
"id":150,
"question":"Un collègue est menacé verbalement par un client parti :",
"choices":[
"Le poursuivre",
"Dossier clos",
"Aucune",
"Remonter le moral",
"Rédiger un compte rendu"
],
"correct":4
},

{
"id":151,
"question":"Face à un interlocuteur agressif mon attitude doit être :",
"choices":[
"Baisser les yeux",
"Parler plus fort",
"Aucune",
"Garder son calme avec une voix posée",
"Transférer l'appel"
],
"correct":3
},

{
"id":152,
"question":"Une attitude bras croisés signifie :",
"choices":[
"Ouverture",
"Accord",
"Aucune",
"Attitude fermée",
"Hésitation"
],
"correct":3
},

{
"id":153,
"question":"Quels sont les styles de résolution de conflit ?",
"choices":[
"Abstentionniste oppressif conciliant coopératif compromis",
"Compromis négationniste oppressif sympathique",
"Aucune",
"Négationniste oppressant conciliant refus compromis",
"Oppressif insultant coopératif"
],
"correct":0
},

{
"id":154,
"question":"Quels types de conflits peut rencontrer un agent de sécurité ?",
"choices":[
"Conflit de personnes",
"Toutes les réponses",
"Conflit d'intérêts",
"Conflit de position",
"Conflits de valeurs"
],
"correct":1
}
]



// ------------------------------
// Variables globales
// ------------------------------
let currentIndex = 0;
let score = 0;
let selectedQuestions = [];

// ------------------------------
// Démarrer le quiz
// ------------------------------
startQuiz();

function startQuiz() {
  selectedQuestions = shuffleArray(questions).slice(0, 20);
  currentIndex = 0;
  score = 0;
  showQuestion();
}

// ------------------------------
// Mélange un tableau (Fisher-Yates)
// ------------------------------
function shuffleArray(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ------------------------------
// Affiche la question actuelle
// ------------------------------
function showQuestion() {
  const container = document.getElementById('question-container');
  container.innerHTML = '';
  const questionObj = selectedQuestions[currentIndex];

  const q = document.createElement('h2');
  q.textContent = `Question ${currentIndex + 1}: ${questionObj.question}`;
  container.appendChild(q);

  questionObj.choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.className = 'choice-btn';
    btn.onclick = () => selectAnswer(index);
    container.appendChild(btn);
  });
}

// ------------------------------
// Gérer la sélection d'une réponse
// ------------------------------
function selectAnswer(selectedIndex) {
  const questionObj = selectedQuestions[currentIndex];
  const buttons = document.querySelectorAll('.choice-btn');

  buttons.forEach((btn, i) => {
    if (i === questionObj.correct) btn.classList.add('correct');
    else if (i === selectedIndex && i !== questionObj.correct) btn.classList.add('wrong');
    btn.disabled = true;
  });

  if (selectedIndex === questionObj.correct) score++;

  const container = document.getElementById('question-container');
  const nextBtn = document.createElement('button');
  nextBtn.textContent = currentIndex < selectedQuestions.length - 1 ? 'Question suivante' : 'Terminer';
  nextBtn.id = 'next-btn';
  nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex < selectedQuestions.length) showQuestion();
    else showResult();
  };
  container.appendChild(nextBtn);
}

// ------------------------------
// Afficher le résultat final
// ------------------------------
function showResult() {
  const container = document.getElementById('question-container');
  container.innerHTML = `<h2>Quiz terminé !</h2>
                         <p>Votre score : ${score} / ${selectedQuestions.length}</p>
                         <p> Tu as 20 : Bravo belle/beau gosse. </p>
                         <p> Tu as 19 : Grosse merde arrête la formation , t'as même pas réussi à avoir 20, tu seras jamais un vrai télésuveilleur. </p>
                         <p> Tu as entre 15 et 18 : Tu es prêt ! Fait ça le jour de l'examen et tu vas dead ça comme disent les jeunes ! </p>
                         <p> Tu as entre 10 et 15 : C'est correct mais tu peux mieux faire hein, c'est pas un truc de fou non plus tu veux une médaille ? </p>
                         <p> Tu as entre 5 et 10 :  Bouge ton cul et commence à lire tes cours, c'est chaud mais tu peux te rattraper </p>
                         <p> Tu as entre 0 et 5 : Arrête la formation, c'est pas fait pour toi </p>
                         <button onclick="startQuiz()" id="next-btn">Recommencer</button>`;
}
