// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
const game = {
  roomId: 'accueil-room', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'accueil-room', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Accueil de l'entreprise`, // Displayed each time the player enters the room.
      desc: `Vous êtes à la réception de l'entreprise. Devant vous se dresse un large présentoir, derrière lequel un hôte d'accueil vous adresse un large sourire. Devant vous sont disposés 8 lourdes portes menant vers la DIRECTION GENERALE, la DIRECTION TECHNIQUE, la DIRECTION COMMERCIALE, la DIRECTION RH, la DIRECTION FINANCIERE, la DIRECTION JURIDIQUE, la SALLE DE REUNION et le COFFRE-FORT.`, // Displayed when the player first enters the room.
      items: [
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
          onUse: () => println(`Tapez GO SALLE-DE-REUNION pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
        {
          name: 'coffre-fort',
          desc: `Une belle porte en bois massif se dresse devant vous`, // Displayed when the player looks at the item.
          onUse: () => println(`Tapez GO COFFRE-FORT pour franchir le seuil de la porte.`), // Called when the player uses the item.
        },
      ],
      exits: [
        {
          dir: 'direction-generale', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'dir-gen-room',
          //block: `The DOOR leading NORTH is overgrown with VINES.`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
        },
        {
          dir: 'direction-technique', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'dir-tech-room',
          //block: `The DOOR leading NORTH is overgrown with VINES.`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
        },
        {
          dir: 'direction-commerciale', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'dir-com-room',
          //block: `The DOOR leading NORTH is overgrown with VINES.`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
        },
        {
          dir: 'direction-financiere', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'dir-fin-room',
          //block: `The DOOR leading NORTH is overgrown with VINES.`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
        },
        {
          dir: 'direction-juridique', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'dir-jur-room',
          //block: `The DOOR leading NORTH is overgrown with VINES.`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
        },
        {
          dir: 'salle-de-reunion', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'reunion-room',
          //block: `The DOOR leading NORTH is overgrown with VINES.`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
        },
        {
          dir: 'coffre-fort', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'coffre-room',
          //block: `The DOOR leading NORTH is overgrown with VINES.`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
        },
      ],
    },
    {
      id: 'dir-gen-room',
      name: 'Bureau de la direction générale',
      desc: `Une grande pièce lumineuse apparait devant vous. Assis derrière un imposant bureau en bois d'ébène, un petit homme chauve vous regarde avec curiosité. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
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
      desc: `Une salle encombrée apparait devant vous. À l'intérieur règne une grande effervescence. Marmonnant des mots que vous ne parvenez pas à comprendre, un CHEF DE PRODUIT semble captivé par un DIAGRAMME dessiné sur un tableau blanc. Plus loin, un DEVELOPEUR et un GRAPHISTE s'agitent en désignant tour à tour l'écran d'un MACBOOK PRO et celui d'un ORDINATEUR PORTABLE d'une autre marque. De l'autre coté de la pièce, un SYSADMIN aussi imposant que barbu suit d'un oeil torve une liste apparemment infinis de lignes de code qui défilent à toute allure sur l'écran 23" de son ORDINATEUR DE BUREAU. Un peu plus loin, assis derrière un petit bureau bien rangé, une femme dotée d'un badge RSSI scrute le contenu d'un EPAIS DOCUMENT. Au même moment, à l'autre bout de la pièce, un TECHNICIEN SUPPORT CLIENT jongle entre un TELEPHONE FIXE et un SMARTHPHONE. Vous faites quelques pas à l'intérieur. Derrière vous se dresse une lourde porte menant vers l'ACCUEIL de l'entreprise.`,
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
};
