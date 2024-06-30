import { IReviewHidden } from "@/api/interface/hidden.interface";

const string1: IReviewHidden = {
    review: [
        {
            first: [{ word: "still", index: 0 }],
            last: [{ word: "encore", index: 1 }]
        },
        {
            first: [{ word: "taking", index: 0 }],
            last: [{ word: "en prenant", index: 1 }]
        },
        {
            first: [{ word: "outside", index: 0 }],
            last: [{ word: "à l'extérieur", index: 1 }]
        },
        {
            first: [{ word: "wrong", index: 0 }],
            last: [{ word: "faux", index: 1 }, { word: "mauvais", index: 2 }]
        },
        {
            first: [{ word: "inside", index: 0 }],
            last: [{ word: "à l'intérieur", index: 1 }, { word: "interne", index: 2 }]
        },
        {
            first: [{ word: "believe", index: 0 }],
            last: [{ word: "croire", index: 1 }]
        },
        {
            first: [{ word: "guess", index: 0 }],
            last: [{ word: "deviner", index: 1 }, { word: "supposer", index: 2 }]
        },
        {
            first: [{ word: "lighten", index: 0 }],
            last: [{ word: "alléger", index: 1 }, { word: "s'éclaircir", index: 2 }]
        }
    ]
};

const string2: IReviewHidden = {
    review: [
        {
            first: [{ word: "he never was", index: 0 }],
            last: [{ word: "il n'a jamais été", index: 1 }]
        },
        {
            first: [{ word: "i was looking for you", index: 0 }],
            last: [{ word: "je vous cherchais", index: 1 }]
        },
        {
            first: [{ word: "load", index: 0 }],
            last: [{ word: "charger", index: 1 }]
        },
        {
            first: [{ word: "happens", index: 0 }],
            last: [{ word: "se produit", index: 1 }, { word: "arriver", index: 2 }]
        },
        {
            first: [{ word: "start", index: 0 }],
            last: [{ word: "commencer", index: 1 }, { word: "démarrer", index: 2 }]
        },
        {
            first: [{ word: "wondering", index: 0 }],
            last: [{ word: "je me demande", index: 1 }]
        },
        {
            first: [{ word: "soon", index: 0 }],
            last: [{ word: "bientôt", index: 1 }, { word: "vite", index: 2 }]
        }
    ]
};

const string3: IReviewHidden = {
    review: [
        {
            first: [{ word: "whatever", index: 0 }],
            last: [{ word: "quoi que ce soit", index: 1 }, { word: "quoi que", index: 2 }]
        },
        {
            first: [{ word: "every", index: 0 }],
            last: [{ word: "tous les", index: 1 }, { word: "chaque", index: 2 }]
        },
        {
            first: [{ word: "everyone", index: 0 }],
            last: [{ word: "tout le monde", index: 1 }]
        },
        {
            first: [{ word: "everywhere", index: 0 }],
            last: [{ word: "partout", index: 1 }]
        },
        {
            first: [{ word: "anyone", index: 0 }],
            last: [{ word: "n'importe qui", index: 1 }]
        },
        {
            first: [{ word: "each", index: 0 }],
            last: [{ word: "chaque", index: 1 }]
        }
    ]
};

const string4: IReviewHidden = {
    review: [
        {
            first: [{ word: "there was", index: 0 }],
            last: [{ word: "il y avait", index: 1 }]
        },
        {
            first: [{ word: "suggest", index: 0 }],
            last: [{ word: "suggérer", index: 1 }]
        },
        {
            first: [{ word: "hummed", index: 0 }],
            last: [{ word: "fredonné", index: 1 }]
        },
        {
            first: [{ word: "choosen", index: 0 }, { word: "pick", index: 1 }],
            last: [{ word: "choisi", index: 2 }]
        },
        {
            first: [{ word: "picked up", index: 0 }],
            last: [
                { word: "a ramassé", index: 1 },
                { word: "a pris", index: 2 },
                { word: "a récupéré", index: 3 }
            ]
        },
        {
            first: [{ word: "happily", index: 0 }],
            last: [{ word: "joyeusement", index: 1 }]
        },
        {
            first: [{ word: "gossiped", index: 0 }],
            last: [{ word: "commérage", index: 1 }]
        },
        {
            first: [{ word: "Away", index: 0 }],
            last: [{ word: "loin", index: 1 }, { word: "à l'extérieur", index: 2 }]
        },
        {
            first: [{ word: "chair", index: 0 }],
            last: [{ word: "chaise", index: 1 }]
        },
        {
            first: [{ word: "wrestle", index: 0 }, { word: "struggle", index: 1 }, { word: "fought", index: 2 }],
            last: [{ word: "lutter", index: 3 }]
        },
        {
            first: [{ word: "As", index: 0 }],
            last: [{ word: "comme", index: 1 }, { word: "en tant que", index: 2 }]
        },
        {
            first: [{ word: "as she", index: 0 }],
            last: [{ word: "alors qu'elle", index: 1 }]
        },
        {
            first: [{ word: "none", index: 0 }],
            last: [{ word: "aucun(e)", index: 1 }]
        },
        {
            first: [{ word: "noticed", index: 0 }],
            last: [{ word: "remarqué", index: 1 }]
        },
        {
            first: [{ word: "half", index: 0 }],
            last: [{ word: "moitié", index: 1 }]
        },
        {
            first: [{ word: "briefcase", index: 0 }],
            last: [{ word: "mallette", index: 1 }]
        },
        {
            first: [{ word: "Pecked", index: 0 }],
            last: [{ word: "picoré", index: 1 }]
        },
        {
            first: [{ word: "throw", index: 0 }],
            last: [{ word: "lancer", index: 1 }]
        },
        {
            first: [{ word: "wall", index: 0 }],
            last: [{ word: "mur", index: 1 }]
        },
        {
            first: [{ word: "backed out", index: 0 }],
            last: [
                { word: "a fait marche arrière", index: 1 },
                { word: "s'est retirée", index: 2 }
            ]
        },
        {
            first: [{ word: "corner", index: 0 }],
            last: [{ word: "coin", index: 1 }]
        },
        {
            first: [{ word: "peculiar", index: 0 }],
            last: [{ word: "particulier", index: 1 }]
        },
        {
            first: [{ word: "jerked", index: 0 }],
            last: [{ word: "secoué", index: 1 }]
        },
        {
            first: [{ word: "standing", index: 0 }],
            last: [{ word: "debout", index: 1 }]
        },
        {
            first: [{ word: "Blinked", index: 0 }],
            last: [{ word: "a cligné des yeux", index: 1 }]
        },
        {
            first: [{ word: "stared", index: 0 }],
            last: [{ word: "fixer", index: 1 }, { word: "regarder", index: 2 }, { word: "fixement", index: 3 }]
        },
        {
            first: [{ word: "stared back", index: 0 }],
            last: [
                { word: "a regardé en arrière", index: 1 },
                { word: "a regardé derrière lui", index: 2 }
            ]
        },
        {
            first: [{ word: "drove", index: 0 }, { word: "drive", index: 1 }],
            last: [{ word: "conduire", index: 2 }]
        },
        {
            first: [{ word: "often", index: 0 }],
            last: [{ word: "souvent", index: 1 }]
        },
        {
            first: [{ word: "less", index: 0 }],
            last: [{ word: "moins", index: 1 }]
        }
    ]
};


const string5: IReviewHidden = {
    review: [
        {
            first: [{ word: "Expect", index: 0 }],
            last: [{ word: "s'attendre", index: 1 }]
        },
        {
            first: [{ word: "Anything", index: 0 }],
            last: [{ word: "tout", index: 1 }, { word: "quelque chose", index: 2 }, { word: "n'import quoi", index: 3 }]
        },
        {
            first: [{ word: "Involved", index: 0 }],
            last: [{ word: "impliqué", index: 1 }]
        },
        {
            first: [{ word: "hold", index: 0 }],
            last: [{ word: "tenir", index: 1 }]
        },
        {
            first: [{ word: "Were", index: 0 }],
            last: [{ word: "étaient", index: 1 }]
        },
        {
            first: [{ word: "was", index: 0 }],
            last: [{ word: "était", index: 1 }]
        },
        {
            first: [{ word: "which (made)", index: 0 }],
            last: [{ word: "qui (a fabriqué)", index: 1 }]
        },
        {
            first: [{ word: "beefy", index: 0 }],
            last: [{ word: "costauds", index: 1 }, { word: "musclé", index: 2 }]
        }
    ]
};

const string6: IReviewHidden = {
    review: [
        {
            first: [{ word: "layout", index: 0 }],
            last: [{ word: "disposition", index: 1 }]
        },
        {
            first: [{ word: "such", index: 0 }],
            last: [{ word: "tels", index: 1 }]
        },
        {
            first: [{ word: "leaf", index: 0 }],
            last: [{ word: "feuille", index: 1 }]
        },
        {
            first: [{ word: "leaves", index: 0 }],
            last: [{ word: "feuilles", index: 1 }]
        },
        {
            first: [{ word: "subtree", index: 0 }],
            last: [{ word: "sous arbre", index: 1 }]
        },
        {
            first: [{ word: "node", index: 0 }],
            last: [{ word: "noeud", index: 1 }]
        },
        {
            first: [{ word: "ending", index: 0 }],
            last: [{ word: "finissant", index: 1 }, { word: "terminaison", index: 2 }]
        },
        {
            first: [{ word: "shared", index: 0 }],
            last: [{ word: "partagé", index: 1 }]
        },
        {
            first: [{ word: "nested", index: 0 }],
            last: [{ word: "imbriqué", index: 1 }, { word: "emboîté", index: 2 }]
        },
        {
            first: [{ word: "behavior", index: 0 }],
            last: [{ word: "comportement", index: 1 }]
        },
        {
            first: [{ word: "a set", index: 0 }],
            last: [{ word: "un ensemble", index: 1 }]
        },
        {
            first: [{ word: "fetch", index: 0 }],
            last: [{ word: "rechercher", index: 1 }]
        },
        {
            first: [{ word: "data fetching", index: 0 }],
            last: [{ word: "récupération des données", index: 1 }, { word: "collecte de données", index: 2 }]
        },
        {
            first: [{ word: "unlike", index: 0 }],
            last: [{ word: "contrairement à", index: 1 }, { word: "à l'inverse", index: 2 }]
        },
        {
            first: [{ word: "fetcher", index: 0 }],
            last: [{ word: "récupérateur", index: 1 }]
        },
        {
            first: [{ word: "expect", index: 0 }],
            last: [{ word: "attendre", index: 1 }]
        }
    ]
};

const string7: IReviewHidden = {
    review: [
        {
            first: [{ word: "mounted", index: 0 }],
            last: [{ word: "monté", index: 1 }]
        },
        {
            first: [{ word: "may", index: 0 }],
            last: [{ word: "peut", index: 1 }]
        },
        {
            first: [{ word: "those", index: 0 }],
            last: [{ word: "ces", index: 1 }, { word: "Ceux-ci", index: 2 }]
        },
        {
            first: [{ word: "rely", index: 0 }],
            last: [{ word: "s'appuyer", index: 1 }]
        },
        {
            first: [{ word: "fallback", index: 0 }],
            last: [{ word: "repli", index: 1 }]
        },
        {
            first: [{ word: "unless", index: 0 }],
            last: [{ word: "sauf si", index: 1 }, { word: "à moins que", index: 2 }]
        },
        {
            first: [{ word: "across", index: 0 }, { word: "through", index: 1 }],
            last: [{ word: "à travers", index: 2 }]
        },
        {
            first: [{ word: "sibling", index: 0 }],
            last: [{ word: "frère ou soeur", index: 1 }]
        },
        {
            first: [{ word: "below", index: 0 }],
            last: [{ word: "en bas", index: 1 }, { word: "en dessous", index: 2 }, { word: "ci dessous", index: 3 }]
        },
        {
            first: [{ word: "anything above", index: 0 }],
            last: [{ word: "tout ce qui précède", index: 1 }, { word: "tout ce qui est supérieur à", index: 2 }]
        },
        {
            first: [{ word: "improved", index: 0 }],
            last: [{ word: "améliorée", index: 1 }]
        }
    ]
};


      const string8: IReviewHidden = {
        review: [
            {
                first: [{ word: "a loan", index: 0 }],
                last: [{ word: "un emprunt", index: 1 }]
            },
            {
                first: [{ word: "borrow", index: 0 }],
                last: [{ word: "emprunter", index: 1 }]
            },
            {
                first: [{ word: "thought", index: 0 }],
                last: [{ word: "pensée", index: 1 }, { word: "réflexion", index: 2 }]
            },
            {
                first: [{ word: "finer", index: 0 }],
                last: [{ word: "plus fin", index: 1 }, { word: "plus beau", index: 2 }]
            },
            {
                first: [{ word: "Anywhere", index: 0 }],
                last: [{ word: "n’importe où", index: 1 }]
            },
            {
                first: [{ word: "greatest", index: 0 }],
                last: [{ word: "le plus important", index: 1 }]
            },
            {
                first: [{ word: "somebody", index: 0 }],
                last: [{ word: "quelqu’un", index: 2 }]
            },
            {
                first: [{ word: "Discover", index: 0 }],
                last: [{ word: "découvrir", index: 1 }]
            },
            {
                first: [{ word: "Think", index: 0 }],
                last: [{ word: "penser", index: 1 }]
            },
            {
                first: [{ word: "found out about", index: 0 }],
                last: [{ word: "découvre l'existence de", index: 1 }]
            },
            {
                first: [{ word: "several", index: 0 }],
                last: [{ word: "plusieurs", index: 1 }]
            },
            {
                first: [{ word: "shudder", index: 0 }],
                last: [{ word: "trembler", index: 1 }]
            },
            {
                first: [{ word: "dull", index: 0 }],
                last: [{ word: "terne", index: 1 }]
            },
            {
                first: [{ word: "annoyed", index: 0 }],
                last: [{ word: "ennuyé", index: 1 }, { word: "gêné", index: 2 }]
            }
        ]
    };
    
    const string9: IReviewHidden = {
        review: [
            {
                first: [{ word: "thin", index: 0 }],
                last: [{ word: "mince", index: 1 }]
            },
            {
                first: [{ word: "Hardly", index: 0 }],
                last: [{ word: "difficilement", index: 1 }]
            },
            {
                first: [{ word: "Hardly any", index: 0 }],
                last: [{ word: "pratiquement aucun", index: 1 }]
            },
            {
                first: [{ word: "although", index: 0 }],
                last: [{ word: "même si", index: 2 }]
            },
            {
                first: [{ word: "nearly", index: 0 }, { word: "almost", index: 1 }],
                last: [{ word: "presque", index: 2 }]
            },
            {
                first: [{ word: "twice", index: 0 }],
                last: [{ word: "deux fois", index: 1 }]
            },
            {
                first: [{ word: "Usual", index: 0 }],
                last: [{ word: "habituel", index: 1 }]
            },
            {
                first: [{ word: "Amount", index: 0 }],
                last: [{ word: "montant", index: 1 }]
            },
            {
                first: [{ word: "useful", index: 0 }],
                last: [{ word: "utile", index: 1 }]
            },
            {
                first: [{ word: "spent", index: 0 }],
                last: [{ word: "dépensé", index: 1 }]
            },
            {
                first: [{ word: "Garden", index: 0 }],
                last: [{ word: "jardin", index: 1 }]
            },
            {
                first: [{ word: "fence", index: 0 }],
                last: [{ word: "clôture", index: 1 }]
            },
            {
                first: [{ word: "neighbors", index: 0 }],
                last: [{ word: "voisins", index: 1 }]
            }
        ]
    };
    
    const string10: IReviewHidden = {
        review: [
            {
                first: [{ word: "though", index: 0 }],
                last: [{ word: "cependant", index: 1 }]
            },
            {
                first: [{ word: "early", index: 0 }],
                last: [{ word: "précoce", index: 1 }]
            },
            {
                first: [{ word: "edge", index: 0 }],
                last: [{ word: "bord", index: 1 }]
            },
            {
                first: [{ word: "come", index: 0 },{ word: "came", index: 1 }],
                last: [{ word: "venir", index: 2 }, { word: "est venu", index: 3 }]
            },
            {
                first: [{ word: "came upon", index: 0 }], 
                last: [{ word: "a rencontré", index: 1 }]
            },
            {
                first: [{ word: "upon", index: 0 }],
                last: [{ word: "sur", index: 1 }]
            },
            {
                first: [{ word: "bury", index: 0 }, { word: "buried", index: 1 }],
                last: [{ word: "enterrer", index: 2 }, { word: "enterré", index: 3 }]
            },
            {
                first: [{ word: "casket", index: 0 }],
                last: [{ word: "cercueil", index: 1 }]
            },
            {
                first: [{ word: "ruled", index: 0 }, { word: "was ruled", index: 1 }, ],
                last: [{ word: "statué", index: 2 }, { word: "a été jugée", index: 3 }]
            },
            {
                first: [{ word: "told", index: 0 }, { word: "tell", index: 1 }],
                last: [{ word: "raconté", index: 2 }, { word: "dire", index: 3 }]
            }
        ]
    };
    const string11: IReviewHidden = {
        review: [
            {
                first: [{ word: "slate", index: 0 }],
                last: [{ word: "ardoise", index: 1 }]
            },
            {
                first: [{ word: "dropped", index: 0 }],
                last: [{ word: "a chutté (tombé)", index: 1 }]
            },
            {
                first: [{ word: "reached down", index: 0 }],
                last: [{ word: "a atteint le sol", index: 1 }]
            },
            {
                first: [{ word: "carry", index: 0 }],
                last: [{ word: "transporter", index: 1 }, { word: "porter", index: 2 }]
            },
            {
                first: [{ word: "crowd", index: 0 }],
                last: [{ word: "la foule", index: 1 }]
            },
            {
                first: [{ word: "worship", index: 0 }],
                last: [{ word: "culte", index: 1 }, { word: "adoration", index: 2 }]
            },
            {
                first: [{ word: "overdue", index: 0 }],
                last: [{ word: "en retard", index: 1 }]
            },
            {
                first: [{ word: "no matter", index: 0 }],
                last: [{ word: "peu importe", index: 1 }]
            },
            {
                first: [{ word: "customers", index: 0 }],
                last: [{ word: "clients", index: 1 }]
            },
            {
                first: [{ word: "dug up", index: 0 }],
                last: [{ word: "deterrer", index: 1 }]
            },
        ]
    }

    const string12: IReviewHidden = {
        review: [
            { first: [{ word: "accuracy", index: 0 }], last: [{ word: "précision", index: 1 }] },
            { first: [{ word: "your strengths and weaknesses", index: 0 }], last: [{ word: "vos forces et vos faiblesses", index: 1 }] },
            { first: [{ word: "suitable", index: 0 }], last: [{ word: "adapté", index: 1 }] },
            { first: [{ word: "involve", index: 0 }], last: [{ word: "impliqué", index: 1 }] },
            { first: [{ word: "regular", index: 0 }], last: [{ word: "régulier", index: 1 }] },
            { first: [{ word: "overview", index: 0 }], last: [{ word: "aperçu", index: 1 }] },
            { first: [{ word: "there is no one who can", index: 0 }], last: [{ word: "il n'y a aucune personne qui peut", index: 1 }] },
            { first: [{ word: "nasty", index: 0 }], last: [{ word: "méchant / désagréable", index: 1 }] },
            { first: [{ word: "i mean it", index: 0 }], last: [{ word: "Je suis sincère", index: 1 }] },


            { first: [{ word:  "first", index: 0 }], last: [{ word: "premier", index: 1 }] },
            { first: [{ word: "second", index: 0 }], last: [{ word:  "deuxième", index: 1 }] },
            { first: [{ word: "third", index: 0 }], last: [{ word: "troisième", index: 1 }] },
            { first: [{ word: "fourth", index: 0 }], last: [{ word: "quatrième" , index: 1 }] },
            { first: [{ word: "fifth", index: 0 }], last: [{ word: "cinquième", index: 1 }] },
            { first: [{ word: "sixth", index: 0 }], last: [{ word: "sixième", index: 1 }] },


            { first: [{ word: "leaning", index: 0 }], last: [{ word: "penchant", index: 1 }] },
            { first: [{ word: "shall", index: 0 }], last: [{ word: "doivent", index: 1 }] },
            { first: [{ word: "at least", index: 0 }], last: [{ word: "au moins", index: 1 }] },
            { first: [{ word: "waiter", index: 0 }], last: [{ word: "serveur", index: 1 }] },
            { first: [{ word: "boil", index: 0 }], last: [{ word: "bouillir", index: 1 }] },
            { first: [{ word: "interesting", index: 0 }], last: [{ word: "intéressant", index: 1 }] },
            { first: [{ word: "bottle", index: 0 }], last: [{ word: "bouteille", index: 1 }] },
            { first: [{ word: "retired", index: 0 }], last: [{ word: "retraite", index: 1 }] },
            { first: [{ word: "relatives", index: 0 }], last: [{ word: "les proches (famille ou parent)", index: 1 }] },
            { first: [{ word: "since", index: 0 }], last: [{ word: "depuis", index: 1 }] },
            { first: [{ word: "worry", index: 0 }], last: [{ word: "s'inquiéter", index: 1 }] },
            { first: [{ word: "worried", index: 0 }], last: [{ word: "inquiet", index: 1 }] },
            { first: [{ word: "glad", index: 0 }], last: [{ word: "heureux", index: 1 }] },
            { first: [{ word: "wear", index: 0 }], last: [{ word: "porter", index: 1 }] },
            { first: [{ word: "mall", index: 0 }], last: [{ word: "centre commercial", index: 1 }] },
            { first: [{ word: "cup", index: 0 }], last: [{ word: "tasse", index: 1 }] },
            { first: [{ word: "awake", index: 0 }], last: [{ word: "éveillé", index: 1 }] },
            { first: [{ word: "upcoming", index: 0 }], last: [{ word: "à venir", index: 1 }] },
            { first: [{ word: "chores", index: 0 }], last: [{ word: "corvées", index: 1 }] },
            { first: [{ word: "tidy up", index: 0 }], last: [{ word: "ranger", index: 1 }] },
            { first: [{ word: "spotless", index: 0 }], last: [{ word: "impeccable", index: 1 }] },
            { first: [{ word: "groceries", index: 0 }], last: [{ word: "épicerie", index: 1 }] },
            { first: [{ word: "mop", index: 0 }], last: [{ word: "serpillière", index: 1 }] },
            { first: [{ word: "dusted", index: 0 }], last: [{ word: "dépoussiéré", index: 1 }] },
            { first: [{ word: "rug", index: 0 }], last: [{ word: "tapis", index: 1 }] },
            { first: [{ word: "vacuum", index: 0 }], last: [{ word: "aspirateur", index: 1 }] },
            { first: [{ word: "dry", index: 0 }], last: [{ word: "sec, séché", index: 1 }] },
            { first: [{ word: "warm", index: 0 }], last: [{ word: "chaud, chaleureux", index: 1 }] },
            { first: [{ word: "the team lacks organization", index: 0 }], last: [{ word: "l'equipe manque d'organisation", index: 1 }] },
            { first: [{ word: "I'm quite close", index: 0 }], last: [{ word: "Je suis assez proche", index: 1 }] },
            { first: [{ word: "That does not seem very interesting", index: 0 }], last: [{ word: "Cela ne semble pas très intéressant", index: 1 }] },
            { first: [{ word: "Well, have you made up your minds", index: 0 }], last: [{ word: "Avez-vous pris votre décision ?", index: 1 }] },
            { first: [{ word: "yes, I grew up there", index: 0 }], last: [{ word: "Oui, j'ai grandi là-bas", index: 1 }] },
            { first: [{ word: "I'm getting dressed", index: 0 }], last: [{ word: "Je m'habille", index: 1 }] },
            { first: [{ word: "I'm driving to work", index: 0 }], last: [{ word: "Je me rends au travail en voiture", index: 1 }] },
            { first: [{ word: "I'm going to the mall", index: 0 }], last: [{ word: "Je vais au centre commercial", index: 1 }] },
            { first: [{ word: "I'm gonna get some coffee", index: 0 }], last: [{ word: "Je vais chercher du café", index: 1 }] },
            { first: [{ word: "for instance", index: 0 }], last: [{ word: "par exemple", index: 1 }] },
            { first: [{ word: "you can sweep", index: 0 }], last: [{ word: "vous pouvez balayer", index: 1 }] },
        ]
    };

        const string13: IReviewHidden = {
            review: [
                {
                    first: [{ word: "gotten", index: 0 }],
                    last: [{ word: "obtenu", index: 1 }]
                },
                {
                    first: [{ word: "wild", index: 0 }],
                    last: [{ word: "sauvage", index: 1 }]
                },
                {
                    first: [{ word: "hung up", index: 0 }],
                    last: [{ word: "raccroché", index: 1 }]
                },
                {
                    first: [{ word: "laid", index: 0 }],
                    last: [{ word: "posé", index: 1 }]
                },
                {
                    first: [{ word: "chest", index: 0 }],
                    last: [{ word: "poitrine", index: 1 }]
                },
                {
                    first: [{ word: "back then", index: 0 }],
                    last: [{ word: "à l'époque", index: 1 }]
                },
                {
                    first: [{ word: "afterward", index: 0 }],
                    last: [{ word: "par la suite", index: 1 }]
                },
                {
                    first: [{ word: "blend", index: 0 }],
                    last: [{ word: "mélange", index: 1 }]
                },
                {
                    first: [{ word: "vividly recall", index: 0 }],
                    last: [{ word: "se rappeler vivement", index: 1 }]
                },
                {
                    first: [{ word: "stepped forward", index: 0 }],
                    last: [{ word: "a fait un pas en avant", index: 1 }]
                },
                {
                    first: [{ word: "and impressed the teacher", index: 0 }],
                    last: [{ word: "et impressionné le professeur", index: 1 }]
                },
                {
                    first: [{ word: "fearing every word", index: 0 }],
                    last: [{ word: "craignant chaque mot", index: 1 }]
                },
                {
                    first: [{ word: "we need to break free from that fear and embrace this language", index: 0 }],
                    last: [{ word: "Nous devons nous libérer de cette peur et embrasser cette langue.", index: 1 }]
                },
                {
                    first: [{ word: "and figure out what I want", index: 0 }],
                    last: [{ word: "et déterminer ce que je veux", index: 1 }]
                },
                {
                    first: [{ word: "So I've gotta really think things through", index: 0 }],
                    last: [{ word: "Je dois donc vraiment réfléchir à tout cela", index: 1 }]
                },
                {
                    first: [{ word: "But what I do know is that we definitely have a connection", index: 0 }],
                    last: [{ word: "Mais ce que je sais, c'est qu'il existe un lien entre nous", index: 1 }]
                },
                {
                    first: [{ word: "And I wanna continue to get to know her and talk to her", index: 0 }],
                    last: [{ word: "Et je veux continuer à la connaître et à lui parler", index: 1 }]
                },
                {
                    first: [{ word: "tell me your biggest achievement", index: 0 }],
                    last: [{ word: "dis-moi ta plus grande réussite", index: 1 }]
                },
                {
                    first: [{ word: "My parents didn't really support me going", index: 0 }],
                    last: [{ word: "Mes parents ne m'ont pas vraiment soutenu", index: 1 }]
                },
                {
                    first: [{ word: "they thought I was gonna waste all my money...", index: 0 }],
                    last: [{ word: "Ils pensaient que j'allais gaspiller tout mon argent...", index: 1 }]
                },
                {
                    first: [{ word: "I bet you're the best, damn one", index: 0 }],
                    last: [{ word: "Je parie que tu es le meilleur, putain", index: 1 }]
                },
                {
                    first: [{ word: "I bet you're the best there too", index: 0 }],
                    last: [{ word: "Je parie que tu es le meilleur là-bas aussi", index: 1 }]
                },
                {
                    first: [{ word: "sorry to bring up other people", index: 0 }],
                    last: [{ word: "désolé d'évoquer d'autres personnes", index: 1 }]
                },
                {
                    first: [{ word: "I just have had a lot dumped on me today", index: 0 }],
                    last: [{ word: "J'ai reçu beaucoup de choses aujourd'hui.", index: 1 }]
                },
                {
                    first: [{ word: "I'm just trying to figure out how to change the subject", index: 0 }],
                    last: [{ word: "j'essaie juste de trouver comment changer de sujet", index: 1 }]
                },
                {
                    first: [{ word: "cause I tend to catch feeling pretty fast", index: 0 }],
                    last: [{ word: "parce que j'ai tendance à me sentir bien assez vite", index: 1 }]
                },
                {
                    first: [{ word: "You're not gonna like everyone.", index: 0 }],
                    last: [{ word: "Vous n'allez pas aimer tout le monde.", index: 1 }]
                },
                {
                    first: [{ word: "I don't even know", index: 0 }],
                    last: [{ word: "Je ne sais même pas", index: 1 }]
                },
                {
                    first: [{ word: "I feel like every time is fun with you", index: 0 }],
                    last: [{ word: "J'ai l'impression qu'on s'amuse toujours avec toi", index: 1 }]
                },
                {
                    first: [{ word: "Have you ever told someone 'I love you' but didn't mean it?", index: 0 }],
                    last: [{ word: "Avez-vous déjà dit à quelqu'un 'je t'aime' sans le penser ?", index: 1 }]
                },
                {
                    first: [{ word: "but I don't think it was really what I was feeling", index: 0 }],
                    last: [{ word: "mais je ne pense pas que ce soit vraiment ce que je ressentais", index: 1 }]
                },
                {
                    first: [{ word: "I made a man cry", index: 0 }],
                    last: [{ word: "J'ai fait pleurer un homme", index: 1 }]
                },
                {
                    first: [{ word: "I've never felt like I was chosen by the one I wanted", index: 0 }],
                    last: [{ word: "Je n'ai jamais eu l'impression d'être choisi par celui que je voulais.", index: 1 }]
                },
                {
                    first: [{ word: "I feel like I understand you", index: 0 }],
                    last: [{ word: "J'ai l'impression de vous comprendre", index: 1 }]
                },
                {
                    first: [{ word: "And I feel like as a man of your caliber", index: 0 }],
                    last: [{ word: "Et j'ai l'impression qu'en tant qu'homme de votre calibre", index: 1 }]
                },
                {
                    first: [{ word: "I wanna get to know you more", index: 0 }],
                    last: [{ word: "Je veux te connaître davantage", index: 1 }]
                },
                {
                    first: [{ word: "I had a rough start", index: 0 }],
                    last: [{ word: "J'ai eu un départ difficile", index: 1 }]
                },
                {
                    first: [{ word: "I'm gonna live out my worst fears.", index: 0 }],
                    last: [{ word: "Je vais vivre mes pires craintes.", index: 1 }]
                }
            ]
        }
        
        /*
        
        leasing
        renewed

        bucket of water =  seau d eau

        rope = corde 

        we'll play tag team

        regardless  = sans tenir compte 

        obviously = évidemment

        i overcome = je surmonte mes 

        are we plotting right now?

        it suits you like a glove= il vous va comme un gant

        cause we ain't doing that= parce que nous ne le ferons pas.

        and i haven't gone on a single date since = et je n'ai pas eu un seul rendez-vous depuis

        i usually jump into things right away, . = J'ai l'habitude de me lancer tout de suite dans les choses,

        and i'll get literally nothing back =  et je ne reçois littéralement rien en retour.

        if i'm into you and i like you,= si tu me plais et que je t'aime bien,

        that looks mad comfy over there. = ça a l'air super confortable là-bas.

        more people are coming in the coming days = d'autres personnes viendront dans les prochains jours

        i think im a little too smart for these guys  = Je pense que je suis un peu trop intelligent pour ces gars-là. 

        to turning them on = de les allumer

        that's what made us who are now  = c'est ce qui a fait de nous ce que nous sommes aujourd'hui 

        are you over your exes? = Avez-vous oublié vos ex ?

        you got that right = Vous avez raison

        fran turned him down = fran l'a refusé

        */

export const wordsTab: IReviewHidden[]  = [ string1, string2, string3, string4, string5, string6, string7, string8, string9, string10, string11, string12, string13];