// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
//

const fragments=[
    {
        name: `fragment`,
        isTakeable: true,
        desc: `20-constituer-une-equipe-projet-pour-lever-les-NC`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `19-realiser-une-revue-de-direction`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `18-transmission-du-rapport-daudit-a-la-direction`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `17-realisation-du-rapport-daudit`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `16-lancement-de-laudit-interne`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `15-analyse-des-indicateurs`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `14-surveillance-des-indicateurs`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `13-mise-en-oeuvre-des-mesures`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `12-construction-des-indicateurs`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `11-validation-direction`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `10-enonciation-du-domaine-dapplicabilite`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `9-analyse-des-ecarts`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `8-selection-parmi-les-114-mesures-de-lAnnexeA`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `7-selection-des-clauses-1-a-4`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `6-analyse-de-risque`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `5-politique-de-sécurité-de-linformation`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `4-limites-organisationnelle-du-domaine-dapplication`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `3-limites-du-systeme-dinformation-du-domaine-dapplication`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `2-limites-physiques-du-domaine-dapplication`
    },
    {
        name: `fragment`,
        isTakeable: true,
        desc: `1. Etude de contexte`
    },
]

const game = {
  roomId: 'accueil-room', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'accueil-room', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Accueil de l'entreprise`, // Displayed each time the player enters the room.
      desc: `Vous êtes à la réception de l'entreprise. Devant vous se dresse un large présentoir sur lequel trône une petite MAQUETTE et derrière lequel un HOTE d'accueil vous adresse un large sourire. Devant vous sont disposées 8 lourdes portes menant vers la DIRECTION-GENERALE, la DIRECTION-TECHNIQUE, la DIRECTION-COMMERCIALE, la DIRECTION-RH, la DIRECTION-FINANCIERE, la DIRECTION-JURIDIQUE, la salle de REUNION et la salle du COFFRE. Vous remarquez une corbeille à papier et des fragments autour. Si vous avez besoin, utilisez la commande HELP.`,
      items: [
        fragments[2],
        fragments[3],
        fragments[4],
        {
            name: `maquette-de-l'entreprise`,
            desc: `Une petite maquette des locaux de l'entreprise, à l'échelle`,
            isTakeable: true,
            onUse: () => println(`Nothing happened.`), // Called when the player uses the item.
        },
        {
          name: 'direction-generale',
          desc: `Une belle porte en bois massif se dresse devant vous`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO DIRECTION-GENERALE pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
        {
          name: 'direction-technique',
          desc: `Une belle porte en bois massif se dresse devant vous`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO DIRECTION-TECHNIQUE pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
        {
          name: 'direction-rh',
          desc: `Une belle porte en bois massif se dresse devant vous`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO DIRECTION-RH pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
        {
          name: 'direction-financière',
          desc: `Une belle porte en bois massif se dresse devant vous`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO DIRECTION-FINANCIERE pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
        {
          name: 'direction-juridique',
          desc: `Une belle porte en bois massif se dresse devant vous`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO DIRECTION-JURIDIQUE pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
        {
          name: 'direction-commerciale',
          desc: `Une belle porte en bois massif se dresse devant vous`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO DIRECTION-COMMERCIALE pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
        {
          name: 'salle-de-reunion',
          desc: `Une belle porte en bois massif se dresse devant vous`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO REUNION pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
        {
          name: 'coffre',
          desc: `Une belle porte en bois massif se dresse devant vous`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO COFFRE pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
      ],
      exits: [
        {
          dir: 'direction-generale', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'dir-gen-room',
        },
        {
          dir: 'direction-technique', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'dir-tech-room',
          block: `The door is locked`,
        },
        {
          dir: 'direction-commerciale', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'dir-com-room',
          block: `The door is locked`,
        },
        {
          dir: 'direction-rh', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'dir-rh-room',
          block: `The door is locked`,
        },
        {
          dir: 'direction-financiere', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'dir-fin-room',
          block: `The door is locked`,
        },
        {
          dir: 'direction-juridique', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'dir-jur-room',
          block: `The door is locked`,
        },
        {
          dir: 'reunion', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'reunion-room',
          block: `The door is locked`,
        },
        {
          dir: 'coffre', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'coffre-room',
          block: `The door is locked`,
        },
      ],
    },
    {
      id: 'dir-gen-room',
      name: 'Bureau de la direction générale',
      desc: `Une grande pièce lumineuse apparait devant vous. Assis derrière un imposant bureau en bois d'ébène, un homme très grand, avec une peau de noix, des cheveux noirs et des yeux noirs vous regarde avec curiosité. Il s'agit du DIRECTEUR général de l'entreprise. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise. Devant vous une grande baie vitrée surplombe la ville. Sur le bureau, des dossiers s'empilent par fragments épars.`,
      items: [
        fragments[5],
        fragments[6],
        fragments[7],
        fragments[8],
        {
          name: 'accueil',
          desc: `Une belle porte en bois massif`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO ACCUEIL pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
      ],
      exits: [
        {
          dir: 'accueil',
          id: 'accueil-room',
        },
      ],
    },
    {
      id: 'dir-tech-room',
      name: 'Bureau de la direction technique',
      desc: `Une salle encombrée apparait devant vous. À l'intérieur règne une grande effervescence. Marmonnant des mots que vous ne parvenez pas à comprendre, un CHEF DE PRODUIT semble captivé par un DIAGRAMME dessiné sur un tableau blanc. Plus loin, un DEVELOPEUR et un GRAPHISTE s'agitent en désignant tour à tour l'écran d'un MACBOOK PRO et celui d'un ORDINATEUR PORTABLE d'une autre marque. De l'autre coté de la pièce, un SYSADMIN aussi imposant que barbu suit d'un oeil attentif une liste apparemment infinie de lignes de code qui défilent à toute allure sur l'écran 23" de son ORDINATEUR DE BUREAU. Dans un coins de la pièce sont entassés des cables réseaux et quelques fragments de papier. Un peu plus loin, assis derrière un petit bureau bien rangé, une femme dotée d'un badge RSSI scrute le contenu d'un EPAIS DOCUMENT. Au même moment, à l'autre bout de la pièce, un TECHNICIEN SUPPORT CLIENT jongle entre un TELEPHONE FIXE et un SMARTHPHONE. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
      items: [
        fragments[0],
        fragments[1],
        {
          name: 'accueil',
          desc: `Une belle porte en bois massif`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO ACCUEIL pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
      ],
      exits: [
        {
          dir: 'accueil',
          id: 'accueil-room',
        },
      ],
    },
    {
      id: 'dir-rh-room',
      name: 'Bureau de la direction des ressources humaines',
      desc: `Une pièce petite mais confortable apparait devant vous. Assis à son bureau, un homme de grande taille manipule un tableau excel affiché l'écran géant de son ORDINATEUR DE TRAVAIL. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise. Au plafond un néon scintillant révèle un local impécable. Un porte-manteau mural surplombe un présentoir, sur lequel sont empilé différentes revues spécialisés et d'autres fragments.`,
      items: [
        fragments[9],
        fragments[10],
        fragments[11],
        fragments[12],
        {
          name: 'accueil',
          desc: `Une belle porte en bois massif`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO ACCUEIL pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
      ],
      exits: [
        {
          dir: 'accueil',
          id: 'accueil-room',
        },
      ],
    },
    {
      id: 'dir-com-room',
      name: 'Bureau de la direction commerciale',
      desc: `Une pièce petite mais confortable apparait devant vous. Assis derrière son ordinateur HP, un DIRECTEUR COMMERCIAL vient de raccrocher son téléphone.Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise. La pièce possède un parfum spéciale et une décoration art moderne avec, notamment, quelques peintures accrochées au mur. La pièce est également dotée d'une bibliotèque murale où quelques livres sont disposées. À l'intérieur, des fragments font office de marque-page.`,
      items: [
        fragments[13],
        fragments[14],
        fragments[15],
        fragments[16],
        {
          name: 'accueil',
          desc: `Une belle porte en bois massif`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO ACCUEIL pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
      ],
      exits: [
        {
          dir: 'accueil',
          id: 'accueil-room',
        },
      ],
    },
    {
      id: 'dir-fin-room',
      name: 'Bureau de la direction financière',
      desc: `Une pièce petite mais confortable apparait devant vous. Assis derrière leurs ordinateurs, de marque DELL ET LENOVO, un COMPTABLE et un CONTROLEUR de gestion sont tellement absorbés par leurs tâches qu'ils ne vous ont pas entendu entrer. De l'autre coté de la pièce, proche d'une grande FENETRE OUVERTE, la DAF de l'entreprise consulte ses emails. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
      items: [
        fragments[17],
        fragments[18],
        fragments[19],
        {
          name: 'accueil',
          desc: `Une belle porte en bois massif`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO ACCUEIL pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
      ],
      exits: [
        {
          dir: 'accueil',
          id: 'accueil-room',
        },
      ],
    },
    {
      id: 'dir-jur-room',
      name: 'Bureau de la direction juridique',
      desc: `Une pièce petite mais confortable apparait devant vous. Assis derrière son bureau un DPO interrompt la lecture d'un CONTRAT et vous dévisage sans animosité. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
      items: [
        {
          name: 'accueil',
          desc: `Une belle porte en bois massif`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO ACCUEIL pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
      ],
      exits: [
        {
          dir: 'accueil',
          id: 'accueil-room',
        },
      ],
    },
    {
      id: 'reunion-room',
      name: 'Salle de réunion',
      desc: `Une grande pièce lumineuse apparait devant vous. Une longue table cerclée de chaises vides vous fait face. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
      items: [
        {
          name: 'accueil',
          desc: `Une belle porte en bois massif`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO ACCUEIL pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
      ],
      exits: [
        {
          dir: 'accueil',
          id: 'accueil-room',
        },
      ],
    },
    {
      id: 'coffre-room',
      name: 'Coffre-fort',
      desc: `Une très petite pièce puissamment éclairée apparait devant vous. Dans le fond de la pièce est disposé un grand coffre de stockage fermé à clé. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
      items: [
        {
          name: 'accueil',
          desc: `Une belle porte en bois massif`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO ACCUEIL pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
      ],
      exits: [
        {
          dir: 'accueil',
          id: 'accueil-room',
        },
      ],
    },
  ],
  characters: [
      {
          name: `directeur`,
          desc: `Thomas Gillette est le directeur général de l'entreprise My Virtual School. Il a 58 ans et aime les courses de furets, les voyages et le tennis. Il est brillant et courageux, mais peut aussi être très égoïste et un peu déloyal. Il est français. Il est titulaire d'un diplôme de troisième cycle en droit. Physiquement, Thomas est légèrement en surpoids mais il est par ailleurs en bonne forme. Il est très grand, avec une peau de noix, des cheveux noirs et des yeux marrons. Il a grandi dans un quartier de classe supérieure. Après la mort de son père quand il était jeune, il a été élevé par sa mère Il est actuellement marié à Pauline Gallois. Pauline a un an de plus que lui et travaille comme scientifique. Thomas a deux enfants avec sa femme Pauline : Sophie, 15 ans, et Jean, 17 ans. Le meilleur ami de Thomas est associé dans un cabinet d'avocats, il s'appelle Tamara Kumar. Ils ont une amitié très forte. Thomas traîne également avec Stéphane Darnon et Robert Loti. Ils aiment jouer aux jeux vidéo ensemble.`,
          roomId: 'dir-gen-room',
          onTalk: () => println(`Ah, je suis content de vous voir!`),
          topics: [
              {
                  option: `Parlez moi de votre ENTREPRISE`,
                  line: `La société My Virtual School est une société créée en 2014 agissant dans le monde de l’accompagnement scolaire. J'ai créé cette entreprise avaec mon épouse, Pauline Gallois, afin de pouvoir développer un logiciel nommé MyNewSchool permettant l’accès aux enfants en difficulté en scolaire à une plateforme en ligne d’accompagnement scolaire du CP à la 3ème. L’application permet également un suivi des résultats scolaires des élèves inscrits sur la plateforme appropriée en facilitant la mise en relation avec les écoles partenaires. MyNewSchool se veut comme étant une solution de soutien à part entière dans la vie des élèves que ce soit pour leur vie scolaire ainsi que pour leur faire découvrir des enseignements périscolaires.  Nos locaux sont situés à Rouen. Le marché de l’éducation étant en pleine expansion dans les années 2010. La société My Virtual School a connu un grand succès commercial et sa croissance fut telle qu’elle devint rapidement l’un des leaders francophones du marché en la matière. Cependant ces pics de croissance ne furent pas sans difficulté. La coordination des activités et le contrôle global de l’entreprise est de plus en plus compliqué à gérer. L’activité de l’entreprise se concentre donc sur le développement de son logiciel MyNewSchool ayant vocation à être utilisé par une majorité des élèves français mais également de devenir le partenaire numéro de chaque école en France.`
              },
              {
                  option: `Parlez-moi les principales CARACTERISTIQUES de l'entreprise`,
                  line: `Bien sûr! Nous avons:
                    - Un module de gestion des demandes clients • Un module de gestion de la facturation
                    - Un module de transmission sécurisée des données • Un module de suivi des progrès des élèves
                    - Un module distribuant des programmes scolaires conçus par des professeurs
                    - Un module distribuant des programmes et activités extra-scolaires conçus par des professeurs et spécialiste de chaque activité
                    - Un outil permettant la mise en relation avec des professeurs de tout niveau (du CP à la 3ème)
                    - Un module permettant le dépôt et la récupération des devoirs
                    - Un module de partenariat qui permettra la relation directe avec l’ensemble de l’équipe pédagogique et les parents d’élèves.
                  `
              },
              {
                  option: `Un nouveau CONTRAT avec un client important`,
                  removeOnRead: true,
                  onSelected: () => {
                      println(`Nous sommes en train de finaliser une opération interessante avec un important client. Toutefois, pour que le contrat soit valide, nous devons nous assurer d'être en conformité avec le référentiel ISO 27001. Vous connaissez n'est-ce-pas? Je n'en doute pas une seconde. Je vous charge d'organiser le passage de la certification éponyme. Voyez avec Sandrine.`)
                      const room = getRoom('accueil-room')
                      const exit = getExit('direction-technique', room.exits)
                      delete exit.block
                      println(`Vous avez débloqué la porte vers la DIRECTION-TECHNIQUE`)
                  }
              },
          ]
      },
      {
          name: 'rssi',
          desc: `Sandrine Ortiz est un ingénieur en sécurité de 32 ans qui aime les puzzles, la natation et le travail sur les voitures. Elle est intelligente et gentille, mais peut aussi être très ennuyeuse et un peu instable. Elle est française. Elle est titulaire d'un diplôme de troisième cycle en systèmes d'information. Elle est allergique aux guêpes. Physiquement, Sandrine est en assez bonne forme. Elle a une taille moyenne, une peau de coco, des cheveux et des yeux bruns. Elle a un grain de beauté sur la joue gauche. Elle a grandi dans un quartier défavorisé. Après la mort de sa mère quand elle était jeune, elle a été élevée par son père Elle est actuellement célibataire. Sa dernière histoire d'amour a été avec un assistant de laboratoire appelé Olivier Maurice Robinson, qui avait le même âge qu'elle. Ils ont rompu parce qu'Olivier trouvait Sandrine trop grincheuse. Sandrine a un enfant avec son ex-petit ami Ariel : Logan, 15 ans. La meilleure amie de Sandrine est une consultante médicale appelée Mallory Li. Ils ont une amitié très forte. Elle traîne aussi avec Leroy Clark et Natalie Han. Ils aiment faire du vélo ensemble.`,
          roomId: 'dir-tech-room',
          onTalk: () => println(`Mouuui...?`),
          topics: [
              {
                  option: `A propos de la certification ISO 27001 demandé par Thomas`,
                  removeOnRead: true,
                  onSelected: () => {
                      println(`J'ai entendu parler de ça. Mon problème c'est que nous ne sommes pas vraiment près a passer cette certification. Il y a un certain nombre de problèmes qui sont survenus sur l'application cette semaine. Des choses assez inquiétantes, demandez des informations à notre DPO. D'ailleurs, ramenez moi un rapport complet sur le problème rencontré.`)

                      const room = getRoom('accueil-room')
                      const exit = getExit('direction-juridique', room.exits)
                      delete exit.block
                      println(`Vous avez débloqué la porte vers la DIRECTION-JURIDIQUE`)
                  }
              },
              {
                  option: `J'ai le RAPPORT que vous m'avez demandé`,
                  onSelected: () => {

                      if ( ! getItemInInventory('rapport-juridique')) {
                          println(`Non vous n'avez pas le rapport. Soyez gentil, ramenez moi le rapport juridique que vous trouverez à la direction juridique`)
                      } else {
                          println('Merci, quelle efficacité!')
                          println('*Sandrine feuillette le rapport*')
                          println(`hmm... je vois. Je pense que nous pouvons empécher que ce problème ne se reproduise en adaptant notre Système de management de la sécurité de l'information. La question qui reste en suspend, c'est combien de temps avons nous pour le faire, sachant qu'en parallèle il nous faut nous certifier ISO 27001 au plus vite. Une idée serait peut-être de réaliser un audit interne, plus précisément un **audit de pré-évaluation**, histoire de tout repasser en revue et de déterminer si on est prêt ou non! Vous vous souvenez, n'est-ce-pas? On distingue:`)
                          println(`**Audit d'opinion** : Ce type d'audit évalue l'état ou la conformité du système de management aux exigences de la norme et donne des recommandations pour améliorer le système ou la conformité aux exigences de la norme. Ce type d'audit est généralement réalisé par des groupes de consultants. Un organisme de certification qui effectue des audits de certification ne peut pas fournir ce type de service.`)
                          println(`**Audit de pré-évaluation** (ou pré-audit) : Ce type d'audit évalue l'état et la conformité d'un système de management aux exigences de la norme, mais ne conduit pas à la certification. Les organismes utilisent généralement ce type de service pour déterminer s'ils sont prêts à être certifiés ou non. Ce type d'audit prend généralement un jour ou deux et est mené par l'équipe qui effectue l'audit de certification.`)
                          println(`**Audit de certification** : Ce type d'audit évalue la conformité d'un système de management à un critère d'audit et mène à la certification si le système de management répond aux critères d'audit. Ce type de service est fourni par un organisme de certification accrédité. Vous pouvez valider l'accréditation de l'organisme de certification auprès de l'organisme d'accréditation du pays auquel l'organisme de certification est affilié.`)
                          println(`Bon, nous allons donc réaliser un plan projet pour cet **audit de pré-évaluation**`)
                          println(`Nous allons agir en 4 temps, afin de suivre au plus près la méhtodologie Plan, Do, Check, Act qui est au coeur d'ISO 27001. Le problème c'est que j'ai égaré dans mon bureau des fragments de note contenant les différentes étapes qu'il nous faudra mener afin de réaliser cette audit. Pourriez-vous m'aider à les retrouver?`)
                          const room = getRoom('accueil-room')
                          const dircom = getExit('direction-commerciale', room.exits)
                          const dirrh = getExit('direction-rh', room.exits)
                          const dirfin = getExit('direction-financiere', room.exits)
                          delete dircom.block
                          delete dirrh.block
                          delete dirfin.block

                      }

                  },
                  prereqs: ['iso']
              },
              {
                  option: `J'ai les FRAGMENTS demandés!`,
                  onSelected: () => {

                      if ( ! getItemInInventory('1-etude-de-contexte') || ! getItemInInventory('2-limites-physiques-du-domaine-dapplication') || ! getItemInInventory('3-limites-du-systeme-dinformation-du-domaine-dapplication') || ! getItemInInventory('4-limites-organisationnelle-du-domaine-dapplication') || ! getItemInInventory('5-politique-de-sécurité-de-linformation') || ! getItemInInventory('6-analyse-de-risque') || ! getItemInInventory('7-selection-des-clauses-1-a-4') || ! getItemInInventory('8-selection-parmi-les-114-mesures-de-lAnnexeA') || ! getItemInInventory('9-analyse-des-ecarts') || ! getItemInInventory('10-enonciation-du-domaine-dapplicabilite') || ! getItemInInventory('11-validation-direction') || ! getItemInInventory('12-construction-des-indicateurs') || ! getItemInInventory('13-mise-en-oeuvre-des-mesures') || ! getItemInInventory('14-surveillance-des-indicateurs') || ! getItemInInventory('15-analyse-des-indicateurs') || ! getItemInInventory('16-lancement-de-laudit-interne') || ! getItemInInventory('17-realisation-du-rapport-daudit') || ! getItemInInventory('18-transmission-du-rapport-daudit-a-la-direction') || ! getItemInInventory('19-realiser-une-revue-de-direction') || ! getItemInInventory('20-constituer-une-equipe-projet-pour-lever-les-NC')) {
                          println(`Vous n'avez pas encore tous les fragments. Vous devez visiter l'entreprise et essayer de trouver des fragments. Lorsque vous en verrez, vous n'aurez qu'à les prendre, afin de les ajouter dans votre inventaire. Accrochez-vous!`)
                      } else {
                          println('Vous avez très bien travaillé!')
                          println('*Sandrine recompose le plan projet*')
                          println(`Nous voilà à la fin de cette expérience interactive, mais avec un peu de travail supplémentaire nous arriverons bientôt à une simulation correcte. Prenez soin de vous et respectez bien les gestes barrières, à bientôt!`)
                      }

                  },
                  prereqs: ['iso', 'rapport']
              }
          ]
      },
      {
          name: 'DPO',
          desc: `Victor Parker est un DPO âgé de 43 ans qui aime le camping, l'observation des oiseaux, les timbres et la cuisine. Il est stable et attentionné, mais peut aussi être très gourmand et un peu ennuyeux. Il est britannique. Il est titulaire d'un diplôme de troisième cycle en droit. Physiquement, Victor est en assez bonne forme. Il est petit, avec une peau claire, des poils de souris sur la tête et des yeux verts. Il a grandi dans un quartier de classe moyenne. Il a été élevé dans une maison familiale heureuse avec deux parents aimants. Il est actuellement marié à Denis Jorja Newton. Denis a le même âge que lui et travaille comme avocat. Victor a deux enfants adoptés avec son mari Denis :  Dani a 4 ans et Colson 9 ans. La meilleurie amie de Victor est une commerçante appelé Estelle Shaw. Ils entretiennent une amitié très forte. Il traîne également avec Dewey Blair et Nadine Carr. Ils aiment regarder la télévision ensemble.`,
          roomId: 'dir-jur-room',
          onTalk: () => println(`Bonjour, que puis-je pour vous?`),
          topics: [
              {
                  option: `Sandrine m'a informé qu'il y avait un PROBLEME avec l'application`,
                  removeOnRead: true,
                  onSelected: () => {
                      println(`Oui, en effet. C'est un dossier un peu inextricable, en rapport avec la protection de l'enfance. Attendez je vais vous remettre un rapport qui détaille le problème`)

                      disk.inventory.push({
                          name: `rapport-juridique`,
                          desc: `Rapport juridique remis par le DPO à propos d'un problème grave concernant l'application`
                      })
                      println('Vous avez obtenu un rapport juridique!')
                  }
              }
          ]
      }
  ],
};
