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
            },
            {
                first: [{ word: "dropped", index: 0 }],
                last: [{ word: "a chutté (tombé)", index: 1 }]
            },
            {
                first: [{ word: "reached down", index: 0 }],
                last: [{ word: "a atteint le sol", index: 1 }]
            },
        ]
    };

    /*
    accuracy = précision
    your strengths and weaknesses = vos forces et vos faiblesses
    suitable = adapté
    involve = impliqué
    regular = régulié
    overview = apercu
    there is no one who can  = il n'y a aucune personne qui peu 
    nasty = mechant / desagreable
    i mean it= Je suis sincère
    */

export const wordsTab3 = [ string1, string2, string3, string4, string5, string6, string7, string8, string9, string10];