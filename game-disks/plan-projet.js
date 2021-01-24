// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
const game = {
  roomId: 'accueil-room', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'accueil-room', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Accueil de l'entreprise`, // Displayed each time the player enters the room.
      desc: `Vous êtes à la réception de l'entreprise. Devant vous se dresse un large présentoir,i sur lequel trône une petite MAQUETTE et depuis lequel un HOTE d'accueil vous adresse un large sourire. Devant vous sont disposées 8 lourdes portes menant vers la DIRECTION-GENERALE, la DIRECTION-TECHNIQUE, la DIRECTION-COMMERCIALE, la DIRECTION-RH, la DIRECTION-FINANCIERE, la DIRECTION-JURIDIQUE, la salle de REUNION et la salle du COFFRE. Si vous avez besoin, utilisez la commande HELP.`,
      items: [
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
      desc: `Une grande pièce lumineuse apparait devant vous. Assis derrière un imposant bureau en bois d'ébène, un homme très grand, avec une peau de noix, des cheveux noirs et des yeux noirs vous regarde avec curiosité. Il s'agit du DIRECTEUR général de l'entreprise. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
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
      id: 'dir-tech-room',
      name: 'Bureau de la direction technique',
      desc: `Une salle encombrée apparait devant vous. À l'intérieur règne une grande effervescence. Marmonnant des mots que vous ne parvenez pas à comprendre, un CHEF DE PRODUIT semble captivé par un DIAGRAMME dessiné sur un tableau blanc. Plus loin, un DEVELOPEUR et un GRAPHISTE s'agitent en désignant tour à tour l'écran d'un MACBOOK PRO et celui d'un ORDINATEUR PORTABLE d'une autre marque. De l'autre coté de la pièce, un SYSADMIN aussi imposant que barbu suit d'un oeil attentif une liste apparemment infinie de lignes de code qui défilent à toute allure sur l'écran 23" de son ORDINATEUR DE BUREAU. Un peu plus loin, assis derrière un petit bureau bien rangé, une femme dotée d'un badge RSSI scrute le contenu d'un EPAIS DOCUMENT. Au même moment, à l'autre bout de la pièce, un TECHNICIEN SUPPORT CLIENT jongle entre un TELEPHONE FIXE et un SMARTHPHONE. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
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
      id: 'dir-rh-room',
      name: 'Bureau de la direction des ressources humaines',
      desc: `Une pièce petite mais confortable apparait devant vous. Assis à son bureau, un homme de grande taille manipule un tableau excel affiché l'écran géant de son ORDINATEUR DE TRAVAIL. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
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
      id: 'dir-com-room',
      name: 'Bureau de la direction commerciale',
      desc: `Une pièce petite mais confortable apparait devant vous. Assis derrière son ordinateur HP, un DIRECTEUR COMMERCIAL vient de raccrocher son téléphone.Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
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
      id: 'dir-fin-room',
      name: 'Bureau de la direction financière',
      desc: `Une pièce petite mais confortable apparait devant vous. Assis derrière leurs ordinateurs, de marque DELL ET LENOVO, un COMPTABLE et un CONTROLEUR de gestion sont tellement absorbés par leurs tâches qu'ils ne vous ont pas entendu entrer. De l'autre coté de la pièce, proche d'une grande FENETRE OUVERTE, la DAF de l'entreprise consulte ses emails. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
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
      id: 'dir-jur-room',
      name: 'Bureau de la direction juridique',
      desc: `Une pièce petite mais confortable apparait devant vous. Assis derrière son bureau un DIRECTEUR JURIDIQUE interrompt la lecture d'un CONTRAT et vous dévisage sans animosité. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
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
                          println(`J'ai entendu parler de ça. Mon problème c'est que nous ne sommes pas vraiment près a passer cette certification. Il y a un certain nombre de problèmes qui sont survenus sur l'application cette semaine. Des choses assez inquiétantes, demandez des informations à notre directeur juridique.`)
                          const room = getRoom('accueil-room')
                          const exit = getExit('direction-juridique', room.exits)
                          delete exit.block
                          println(`Vous avez débloqué la porte vers la DIRECTION-JURIDIQUE`)
                      }
                  }
              ]
          }
  ],
};
