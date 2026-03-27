import type { Locale } from "@/lib/i18n";

export type ProductCategory =
  | "olive-oil"
  | "olives"
  | "honey"
  | "herbs"
  | "soaps"
  | "gift-boxes";

type LocalizedText = Record<Locale, string>;
type LocalizedParagraphs = Record<Locale, string[]>;

type ProductDetailsRecord = {
  type: LocalizedText;
  origin: LocalizedText;
  storage: LocalizedText;
  usage: LocalizedText;
};

type ProductOriginRecord = {
  region: LocalizedText;
  story: LocalizedParagraphs;
};

export interface ProductRecord {
  id: string;
  slug: string;
  category: ProductCategory;
  image: string | null;
  imageHint: LocalizedText;
  name: LocalizedText;
  shortDescription: LocalizedText;
  longDescription: LocalizedParagraphs;
  tag: LocalizedText;
  origin: ProductOriginRecord;
  details: ProductDetailsRecord;
  seoDescription: LocalizedText;
  relatedProducts: string[];
  featured: boolean;
  accent: "gold" | "olive" | "stone";
}

export interface LocalizedProduct {
  id: string;
  slug: string;
  category: ProductCategory;
  image: string | null;
  imageHint: string;
  name: string;
  shortDescription: string;
  tag: string;
  featured: boolean;
  accent: ProductRecord["accent"];
}

export interface LocalizedProductDetail extends LocalizedProduct {
  longDescription: string[];
  origin: {
    region: string;
    story: string[];
  };
  details: {
    type: string;
    origin: string;
    storage: string;
    usage: string;
  };
  seoDescription: string;
  relatedProducts: string[];
}

const text = (ro: string, en: string, el: string): LocalizedText => ({
  ro,
  en,
  el,
});

const paragraphs = (
  ro: string[],
  en: string[],
  el: string[],
): LocalizedParagraphs => ({
  ro,
  en,
  el,
});

const productCatalog: ProductRecord[] = [
  {
    id: "oliventa-aurelia",
    slug: "aurelia-extra-virgin",
    category: "olive-oil",
    image: null,
    imageHint: text(
      "Packshot sticla premium",
      "Premium bottle packshot",
      "Premium bottle packshot",
    ),
    name: text("Aurelia Extra Virgin", "Aurelia Extra Virgin", "Aurelia Extra Virgin"),
    shortDescription: text(
      "Un ulei extra virgin cu profil curat, fin si potrivit pentru servire premium si gifting rafinat.",
      "An extra virgin olive oil with a clean, refined profile designed for premium table service and gifting.",
      "Ενα extra virgin ελαιολαδο με καθαρο και refined προφιλ, ιδανικο για premium table service και gifting.",
    ),
    longDescription: paragraphs(
      [
        "Aurelia este construit pentru o prezenta premium la masa: fluid, luminos si disciplinat in gust. Este genul de sticla care functioneaza la fel de bine intr-un retail boutique atent curatoriat, cat si intr-un cadou gastronomic bine compus.",
        "Profilul ramane verde, proaspat si elegant, astfel incat produsul sa poata fi prezentat ca un gest de rafinament mediteranean, nu doar ca un ingredient functional.",
      ],
      [
        "Aurelia is shaped for premium table presence: fluid, luminous, and disciplined on the palate. It is the kind of bottle that sits naturally in a carefully curated boutique display as well as a composed culinary gift.",
        "The profile stays green, fresh, and elegant, allowing the product to be presented as a Mediterranean gesture of refinement rather than a purely functional ingredient.",
      ],
      [
        "Το Aurelia ειναι σχεδιασμενο για premium παρουσια στο τραπεζι: ρευστο, φωτεινο και πειθαρχημενο στη γευση. Ταιριαζει τοσο σε ενα carefully curated boutique display οσο και σε ενα συνθεμενο γαστρονομικο δωρο.",
        "Το προφιλ μενει πρασινο, φρεσκο και elegant, ωστε το προϊον να παρουσιαζεται ως μεσογειακη χειρονομια refined quality και οχι απλως ως λειτουργικο ingredient.",
      ],
    ),
    tag: text("Single Origin", "Single Origin", "Single Origin"),
    origin: {
      region: text(
        "Grecia, cu naratiune de provenienta pregatita in jurul Thessaloniki si Epanomi",
        "Greece, with provenance storytelling prepared around Thessaloniki and Epanomi",
        "Ελλαδα, με provenance storytelling γυρω απο τη Θεσσαλονικη και την Επανομη",
      ),
      story: paragraphs(
        [
          "Selectia este gandita in jurul unei proveniente grecesti clare, cu spatiu pentru a vorbi mai precis despre loturi, cultivatori si lumina de coasta din zona Thessaloniki si Epanomi. Accentul ramane pe consistenta, puritate si prezentare premium.",
          "Oliventa trateaza originea ca pe o forma de incredere vizibila: sursa buna, selectie atenta si o disciplina moderna in felul in care produsul este pastrat si prezentat.",
        ],
        [
          "The selection is framed around clear Greek provenance, with room to speak more precisely about batches, growers, and coastal light around Thessaloniki and Epanomi. The emphasis stays on consistency, purity, and premium presentation.",
          "Oliventa treats origin as a visible form of trust: a strong source, careful selection, and modern discipline in how the product is kept and presented.",
        ],
        [
          "Η selection στηνεται γυρω απο καθαρη ελληνικη provenance, με χωρο να μιλησει πιο συγκεκριμενα για lots, growers και coastal light γυρω απο τη Θεσσαλονικη και την Επανομη. Η εμφαση μενει στη συνεπεια, την purity και την premium παρουσιαση.",
          "Το Oliventa αντιμετωπιζει την προελευση ως ορατη μορφη εμπιστοσυνης: δυνατη πηγη, careful selection και συγχρονη πειθαρχια στον τροπο που το προϊον διατηρειται και παρουσιαζεται.",
        ],
      ),
    },
    details: {
      type: text("Ulei de masline extra virgin", "Extra virgin olive oil", "Extra virgin ελαιολαδο"),
      origin: text(
        "Selectie din Grecia, pregatita pentru storytelling regional",
        "Greek selection prepared for regional provenance storytelling",
        "Ελληνικη selection ετοιμη για regional provenance storytelling",
      ),
      storage: text(
        "A se pastra ferit de lumina si caldura, in ambalaj bine inchis.",
        "Store away from heat and direct light, with the bottle kept properly sealed.",
        "Διατηρειται μακρια απο θερμοτητα και αμεσο φως, με το μπουκαλι σωστα κλειστο.",
      ),
      usage: text(
        "Pentru finisare, servire la masa, pairing cu branzeturi si gifting premium.",
        "Best suited to finishing, table service, cheese pairing, and premium gifting.",
        "Ιδανικο για finishing, table service, cheese pairing και premium gifting.",
      ),
    },
    seoDescription: text(
      "Aurelia Extra Virgin este un ulei de masline premium Oliventa, prezentat editorial si pregatit pentru retail boutique, gifting si hospitality.",
      "Aurelia Extra Virgin is a premium Oliventa olive oil presented with an editorial, boutique-ready luxury approach.",
      "Το Aurelia Extra Virgin ειναι ενα premium ελαιολαδο Oliventa με editorial παρουσιαση και boutique-ready κατευθυνση.",
    ),
    relatedProducts: [
      "harvest-selection-no-2",
      "host-gift-box",
      "thyme-honey-reserve",
    ],
    featured: true,
    accent: "gold",
  },
  {
    id: "oliventa-harvest-no2",
    slug: "harvest-selection-no-2",
    category: "olive-oil",
    image: null,
    imageHint: text("Mockup selectie recolta", "Harvest selection mockup", "Harvest selection mockup"),
    name: text(
      "Harvest Selection No. 2",
      "Harvest Selection No. 2",
      "Harvest Selection No. 2",
    ),
    shortDescription: text(
      "O selectie de recolta gandita pentru retail boutique, note verzi elegante si prezentare disciplinata.",
      "A harvest selection shaped for boutique retail, with elegant green notes and disciplined presentation.",
      "Μια harvest selection για boutique retail, με elegant green notes και πειθαρχημενη παρουσιαση.",
    ),
    longDescription: paragraphs(
      [
        "Harvest Selection No. 2 are un caracter mai vibrant si mai direct, construit pentru clienti care cauta energie vegetala si claritate. Este o selectie care sustine foarte bine storytelling-ul despre sezonalitate si loturi bine alese.",
        "Forma de prezentare ramane controlata si premium, astfel incat produsul sa poata sta intr-un context editorial, retail sau hospitality fara sa para agresiv.",
      ],
      [
        "Harvest Selection No. 2 carries a more vivid, direct character built for clients who want vegetal energy and clarity. It supports storytelling around seasonality and thoughtfully chosen batches.",
        "The presentation remains controlled and premium, allowing the product to live comfortably in editorial, retail, or hospitality settings without feeling loud.",
      ],
      [
        "Το Harvest Selection No. 2 εχει πιο ζωηρο και αμεσο χαρακτηρα, σχεδιασμενο για πελατες που ζητουν vegetal ενεργεια και καθαροτητα. Υποστηριζει αφηγηση γυρω απο seasonality και carefully chosen batches.",
        "Η παρουσιαση μενει ελεγχομενη και premium, ωστε το προϊον να στεκεται ανετα σε editorial, retail η hospitality περιβαλλον χωρις να νιωθει επιθετικο.",
      ],
    ),
    tag: text("Curatoriat", "Curated", "Curated"),
    origin: {
      region: text(
        "Grecia, cu selectie de recolta pregatita pentru loturi regionale",
        "Greece, with harvest-led selections prepared for regional lots",
        "Ελλαδα, με harvest-led selections ετοιμες για regional lots",
      ),
      story: paragraphs(
        [
          "Aceasta selectie poate sustine foarte bine o poveste despre loturi din nordul Greciei si despre rigoarea cu care sunt alese expresiile de sezon. Thessaloniki si Epanomi ofera cadrul perfect pentru o naratiune despre lumina, vant si apropierea de mare.",
          "Calitatea nu este prezentata ca promisiune abstracta, ci ca rezultat al unei alegeri bine filtrate si al unei manipulari corecte dupa recoltare.",
        ],
        [
          "This selection is well suited to a story about northern Greek lots and the rigor behind choosing seasonal expressions. Thessaloniki and Epanomi offer a natural backdrop for a narrative of light, wind, and coastal proximity.",
          "Quality is not presented as an abstract claim, but as the result of filtered selection and correct handling after harvest.",
        ],
        [
          "Αυτη η selection ταιριαζει πολυ σε μια ιστορια για lots της βορειας Ελλαδας και για τη rigor με την οποια επιλεγονται seasonal expressions. Η Θεσσαλονικη και η Επανομη προσφερουν φυσικο πλαισιο για αφηγηση φωτος, ανεμου και coastal proximity.",
          "Η ποιοτητα δεν παρουσιαζεται ως abstract claim, αλλα ως αποτελεσμα filtered selection και σωστου handling μετα τη συγκομιδη.",
        ],
      ),
    },
    details: {
      type: text("Selectie extra virgin de sezon", "Seasonal extra virgin selection", "Seasonal extra virgin selection"),
      origin: text(
        "Loturi grecesti alese pentru profil si consistenta",
        "Greek lots selected for profile and consistency",
        "Greek lots επιλεγμενα για profile και consistency",
      ),
      storage: text(
        "A se pastra in spatiu racoros, ferit de lumina, cu dopul bine inchis.",
        "Keep in a cool space away from direct light, with the closure sealed well.",
        "Διατηρειται σε δροσερο χωρο μακρια απο αμεσο φως, με το κλεισιμο καλα σφραγισμενο.",
      ),
      usage: text(
        "Ideal pentru serving premium, pairing vegetal si storytelling sezonier.",
        "Ideal for premium serving, vegetal pairings, and seasonal storytelling.",
        "Ιδανικο για premium serving, vegetal pairings και seasonal storytelling.",
      ),
    },
    seoDescription: text(
      "Harvest Selection No. 2 este o selectie premium de ulei de masline pentru retail boutique si storytelling despre recolta.",
      "Harvest Selection No. 2 is a premium olive oil selection built for boutique retail and harvest-led storytelling.",
      "Το Harvest Selection No. 2 ειναι μια premium selection ελαιολαδου για boutique retail και harvest-led storytelling.",
    ),
    relatedProducts: [
      "aurelia-extra-virgin",
      "host-gift-box",
      "mountain-oregano",
    ],
    featured: false,
    accent: "olive",
  },
  {
    id: "oliventa-kalamata-reserve",
    slug: "kalamata-reserve",
    category: "olives",
    image: null,
    imageHint: text("Bol editorial cu masline", "Editorial olive bowl", "Editorial olive bowl"),
    name: text("Kalamata Reserve", "Kalamata Reserve", "Kalamata Reserve"),
    shortDescription: text(
      "Masline alese pentru aperitive elegante, platouri premium si momente de hospitality mediteranean.",
      "Olives selected for elegant aperitif tables, premium platters, and Mediterranean hospitality moments.",
      "Ελιες επιλεγμενες για elegant aperitif tables, premium platters και Mediterranean hospitality moments.",
    ),
    longDescription: paragraphs(
      [
        "Kalamata Reserve este gandit ca o prezenta de hospitality: bogat, echilibrat si suficient de elegant pentru aperitive compuse cu atentie. Are forta de a sustine o masa, dar si disciplina necesara unui context premium.",
        "Este o selectie care functioneaza bine in retail gourmet, in gift edits si in plating menit sa vorbeasca despre rafinament mediteranean fara exces.",
      ],
      [
        "Kalamata Reserve is composed as a hospitality presence: rich, balanced, and elegant enough for carefully built aperitif service. It has the depth to support a table while remaining disciplined enough for a premium setting.",
        "The selection works well in gourmet retail, gift edits, and plated moments meant to signal Mediterranean refinement without excess.",
      ],
      [
        "Το Kalamata Reserve ειναι συνθεμενο ως hospitality παρουσια: πλουσιο, ισορροπημενο και αρκετα elegant για carefully built aperitif service. Εχει το βαθος να στηριξει ενα τραπεζι ενω μενει αρκετα disciplined για premium context.",
        "Η selection λειτουργει καλα σε gourmet retail, gift edits και plated moments που θελουν να δειξουν μεσογειακο refined χαρακτηρα χωρις υπερβολη.",
      ],
    ),
    tag: text("Selected Producers", "Selected Producers", "Selected Producers"),
    origin: {
      region: text(
        "Grecia, cu selectie pregatita pentru relatii de productie bine alese",
        "Greece, with sourcing prepared around carefully chosen producers",
        "Ελλαδα, με sourcing εστιασμενο σε carefully chosen producers",
      ),
      story: paragraphs(
        [
          "Originea acestui produs poate fi legata elegant de o retea de producatori greci selectati pentru gust, textura si constanta. In universul Oliventa, aceasta selectie are loc intr-un cadru de incredere, nu de volum.",
          "Naratiunea regionala poate aduce in fata nordul Greciei si contextul Thessaloniki - Epanomi ca reper pentru selectie atenta, logistica coerenta si standarde moderne.",
        ],
        [
          "The origin of this product can be tied elegantly to a network of Greek producers selected for taste, texture, and consistency. Within Oliventa, that selection sits in a framework of trust rather than scale.",
          "Regional storytelling can bring northern Greece and the Thessaloniki-Epanomi area forward as a reference point for careful selection, coherent logistics, and modern standards.",
        ],
        [
          "Η προελευση αυτου του προϊοντος μπορει να συνδεθει κομψα με ενα δικτυο ελληνων παραγωγων επιλεγμενων για γευση, υφη και συνεπεια. Στον κοσμο του Oliventa, αυτη η selection στεκεται σε πλαισιο εμπιστοσυνης και οχι κλιμακας.",
          "Η regional αφηγηση μπορει να φερει μπροστα τη βορεια Ελλαδα και την περιοχη Θεσσαλονικη - Επανομη ως σημειο αναφορας για careful selection, coherent logistics και modern standards.",
        ],
      ),
    },
    details: {
      type: text("Masline premium de masa", "Premium table olives", "Premium table olives"),
      origin: text(
        "Selectie greceasca cu producatori atent alesi",
        "Greek selection with carefully chosen producers",
        "Greek selection με carefully chosen producers",
      ),
      storage: text(
        "A se pastra in loc racoros, apoi refrigerat dupa deschidere.",
        "Store in a cool place and refrigerate after opening.",
        "Διατηρειται σε δροσερο σημειο και στο ψυγειο μετα το ανοιγμα.",
      ),
      usage: text(
        "Pentru aperitive, platouri, pairing cu branzeturi si servire hospitality.",
        "Serve with aperitifs, platters, cheese pairings, and hospitality tables.",
        "Για aperitifs, platters, cheese pairings και hospitality tables.",
      ),
    },
    seoDescription: text(
      "Kalamata Reserve aduce o selectie premium de masline in universul Oliventa, pregatita pentru gifting si hospitality.",
      "Kalamata Reserve brings a premium olive selection into the Oliventa world for gifting and hospitality.",
      "Το Kalamata Reserve φερνει μια premium olive selection στον κοσμο του Oliventa για gifting και hospitality.",
    ),
    relatedProducts: [
      "green-table-selection",
      "aurelia-extra-virgin",
      "host-gift-box",
    ],
    featured: false,
    accent: "olive",
  },
  {
    id: "oliventa-green-table",
    slug: "green-table-selection",
    category: "olives",
    image: null,
    imageHint: text("Placeholder antipasti", "Antipasti placeholder", "Antipasti placeholder"),
    name: text(
      "Green Table Selection",
      "Green Table Selection",
      "Green Table Selection",
    ),
    shortDescription: text(
      "O selectie luminoasa si savuroasa, pregatita pentru pairing, antipasti si gifting gastronomic.",
      "A bright, savory selection prepared for pairing, antipasti service, and gastronomic gifting.",
      "Μια φωτεινη και savory selection, ετοιμη για pairing, antipasti service και gastronomic gifting.",
    ),
    longDescription: paragraphs(
      [
        "Green Table Selection merge intr-o directie mai luminoasa si mai versatila. Este genul de produs care poate intra firesc in pantry gifting, in mese casual premium si in expuneri de magazin cu identitate editoriala.",
        "Savoarea sa este gandita sa ramana accesibila, dar prezentarea continua sa vorbeasca despre ordine, selectie si o energie mediteraneana foarte bine controlata.",
      ],
      [
        "Green Table Selection moves in a brighter, more versatile direction. It is the kind of product that sits naturally within pantry gifting, casual premium tables, and store displays with an editorial identity.",
        "Its savoriness is designed to remain approachable, while the presentation still speaks in terms of order, selection, and a Mediterranean energy kept under control.",
      ],
      [
        "Το Green Table Selection κινειται σε πιο φωτεινη και versatile κατευθυνση. Ειναι το ειδος προϊοντος που μπαινει φυσικα σε pantry gifting, casual premium tables και store displays με editorial ταυτοτητα.",
        "Η savory πλευρα του μενει approachable, ενω η παρουσιαση συνεχιζει να μιλα σε γλωσσα order, selection και Mediterranean ενεργειας κρατημενης με μετρο.",
      ],
    ),
    tag: text("Mediterranean", "Mediterranean", "Mediterranean"),
    origin: {
      region: text(
        "Grecia, intr-o selectie construita pentru masa mediteraneana contemporana",
        "Greece, in a selection built for the contemporary Mediterranean table",
        "Ελλαδα, σε selection χτισμενη για το συγχρονο Mediterranean table",
      ),
      story: paragraphs(
        [
          "Produsul poate fi legat de o poveste despre selectie greceasca facuta cu gandul la masa contemporana: produse curate, bine manipulate si usor de integrat intr-o experienta de gazduire rafinata.",
          "Referintele regionale catre Thessaloniki si Epanomi pot ancora aceasta selectie intr-un peisaj autentic, fara a incarca discursul cu promisiuni inutile.",
        ],
        [
          "The product can be connected to a story of Greek selection built with the contemporary table in mind: clean products, handled well, and easy to place inside a refined hosting experience.",
          "Regional references to Thessaloniki and Epanomi can anchor the selection in an authentic landscape without overloading the narrative with unnecessary claims.",
        ],
        [
          "Το προϊον μπορει να συνδεθει με ιστορια ελληνικης selection χτισμενης με τη συγχρονη τραπεζι στο μυαλο: καθαρα προϊοντα, σωστα handled και ευκολα να μπουν σε refined hosting εμπειρια.",
          "Regional αναφορες στη Θεσσαλονικη και την Επανομη μπορουν να αγκυρωσουν τη selection σε authentic landscape χωρις να φορτωσουν την αφηγηση με περιττους ισχυρισμους.",
        ],
      ),
    },
    details: {
      type: text("Selectie de masline pentru antipasti", "Antipasti olive selection", "Antipasti olive selection"),
      origin: text(
        "Origine greceasca si selectie orientata spre hospitality",
        "Greek origin with hospitality-led curation",
        "Greek origin με hospitality-led curation",
      ),
      storage: text(
        "A se pastra la rece dupa deschidere si a se consuma in ritm constant.",
        "Refrigerate after opening and keep within a steady serving cycle.",
        "Στο ψυγειο μετα το ανοιγμα και καταναλωση με σταθερο serving cycle.",
      ),
      usage: text(
        "Ideal pentru antipasti, pairing cu vin si platouri de gifting gastronomic.",
        "Ideal for antipasti, wine pairing, and gastronomic gifting platters.",
        "Ιδανικο για antipasti, wine pairing και gastronomic gifting platters.",
      ),
    },
    seoDescription: text(
      "Green Table Selection este o selectie premium de masline Oliventa pentru aperitive, pairing si gifting.",
      "Green Table Selection is a premium Oliventa olive selection for aperitif service, pairing, and gifting.",
      "Το Green Table Selection ειναι μια premium olive selection Oliventa για aperitif service, pairing και gifting.",
    ),
    relatedProducts: [
      "kalamata-reserve",
      "coastal-herb-duo",
      "seasonal-edit-box",
    ],
    featured: false,
    accent: "stone",
  },
  {
    id: "oliventa-thyme-honey",
    slug: "thyme-honey-reserve",
    category: "honey",
    image: null,
    imageHint: text("Borcan premium de miere", "Premium honey jar", "Premium honey jar"),
    name: text("Thyme Honey Reserve", "Thyme Honey Reserve", "Thyme Honey Reserve"),
    shortDescription: text(
      "Miere cu prezenta aurie si textura densa, potrivita pentru pantry gifting si selectie de sezon.",
      "Honey with a golden presence and dense texture, suited to pantry gifting and seasonal curation.",
      "Μελι με χρυση παρουσια και dense texture, ιδανικο για pantry gifting και seasonal curation.",
    ),
    longDescription: paragraphs(
      [
        "Thyme Honey Reserve aduce o caldura mai lenta si mai opulenta in universul Oliventa. Este un produs care poate fi prezentat ca accent de pantry premium, ca detaliu de gifting sau ca piesa de sezon intr-o selectie bine editata.",
        "Textura densa si prezenta aurie cer un cadru vizual calm, astfel incat produsul sa para rafinat si memorabil fara sa fie supraexplicat.",
      ],
      [
        "Thyme Honey Reserve introduces a slower, more opulent warmth into the Oliventa universe. It can be positioned as a premium pantry accent, a gifting detail, or a seasonal hero inside a tightly edited selection.",
        "Its dense texture and golden presence ask for calm visual framing so the product feels refined and memorable without needing excessive explanation.",
      ],
      [
        "Το Thyme Honey Reserve φερνει πιο αργη και πιο opulent ζεστασια στον κοσμο του Oliventa. Μπορει να τοποθετηθει ως premium pantry accent, gifting detail η seasonal hero μεσα σε tightly edited selection.",
        "Η dense υφη και η χρυση παρουσια του ζητουν ηρεμο visual framing ωστε το προϊον να νιωθει refined και memorable χωρις υπερβολικη εξηγηση.",
      ],
    ),
    tag: text("Limited Selection", "Limited Selection", "Limited Selection"),
    origin: {
      region: text(
        "Grecia, intr-o selectie pregatita pentru terroir si loturi cu caracter",
        "Greece, in a selection prepared for terroir and character-led lots",
        "Ελλαδα, σε selection ετοιμη για terroir και character-led lots",
      ),
      story: paragraphs(
        [
          "Aceasta miere poate sustine elegant o poveste despre peisaj, vegetatie mediteraneana si selectie atenta a loturilor. Pentru Oliventa, originea nu este tratata decorativ, ci ca baza pentru incredere si coerenta.",
          "Inserarea regiunilor din jurul Thessaloniki si Epanomi poate da produsului o ancora geografica moderna, fara a pierde senzatia de rafinament international.",
        ],
        [
          "This honey can support an elegant story about landscape, Mediterranean vegetation, and thoughtful batch selection. For Oliventa, origin is not decorative; it is the basis for trust and coherence.",
          "Referencing areas around Thessaloniki and Epanomi can give the product a modern geographic anchor without losing its international premium feel.",
        ],
        [
          "Αυτο το μελι μπορει να στηριξει κομψα μια ιστορια για τοπιο, μεσογειακη βλαστηση και thoughtful batch selection. Για το Oliventa, η προελευση δεν ειναι decorative, αλλα βαση για trust και coherence.",
          "Η αναφορα σε περιοχες γυρω απο τη Θεσσαλονικη και την Επανομη μπορει να δωσει στο προϊον μοντερνο geographic anchor χωρις να χαθει η international premium αισθηση του.",
        ],
      ),
    },
    details: {
      type: text("Miere premium de selectie", "Premium selected honey", "Premium selected honey"),
      origin: text(
        "Selectie greceasca cu profil aromatic distinct",
        "Greek selection with a distinct aromatic profile",
        "Greek selection με distinct aromatic profile",
      ),
      storage: text(
        "A se pastra la temperatura camerei, ferit de caldura excesiva.",
        "Store at room temperature away from excessive heat.",
        "Διατηρειται σε θερμοκρασια δωματιου μακρια απο υπερβολικη θερμοτητα.",
      ),
      usage: text(
        "Pentru breakfast service, pairing cu iaurturi, branzeturi si gifting premium.",
        "For breakfast service, yogurt and cheese pairings, and premium gifting.",
        "Για breakfast service, yogurt και cheese pairings, και premium gifting.",
      ),
    },
    seoDescription: text(
      "Thyme Honey Reserve este o selectie premium de miere Oliventa, cu ton editorial si vocatie pentru gifting.",
      "Thyme Honey Reserve is a premium Oliventa honey selection with an editorial, gifting-led presentation.",
      "Το Thyme Honey Reserve ειναι μια premium selection μελιου Oliventa με editorial και gifting-led παρουσιαση.",
    ),
    relatedProducts: [
      "wildflower-honey",
      "aurelia-extra-virgin",
      "host-gift-box",
    ],
    featured: true,
    accent: "gold",
  },
  {
    id: "oliventa-wildflower-honey",
    slug: "wildflower-honey",
    category: "honey",
    image: null,
    imageHint: text("Still life cu miere", "Honey still life", "Honey still life"),
    name: text("Wildflower Honey", "Wildflower Honey", "Wildflower Honey"),
    shortDescription: text(
      "Un accent mai floral si mai cald, potrivit pentru breakfast service, pairing si gift edits.",
      "A warmer, more floral accent designed for breakfast service, pairing, and gift edits.",
      "Ενα warmer και πιο floral accent, σχεδιασμενο για breakfast service, pairing και gift edits.",
    ),
    longDescription: paragraphs(
      [
        "Wildflower Honey este mai deschis si mai bland in expresie, oferind o intrare usoara in universul Oliventa. Se potriveste foarte bine in selectii pentru boutique hospitality, breakfast service si cadouri compuse in jurul unei atmosfere calde.",
        "In prezentare, produsul beneficiaza de un tratament vizual curat si aerisit, in care tonul floral devine semnatura fara sa incarce discursul.",
      ],
      [
        "Wildflower Honey offers a brighter, gentler entry into the Oliventa universe. It fits naturally in boutique hospitality selections, breakfast service, and gifts composed around a warmer atmosphere.",
        "Visually, the product benefits from a clean and airy treatment where the floral tone becomes a signature without overloading the narrative.",
      ],
      [
        "Το Wildflower Honey προσφερει πιο φωτεινη και ηπια εισοδο στον κοσμο του Oliventa. Ταιριαζει φυσικα σε boutique hospitality selections, breakfast service και δωρα στημενα γυρω απο πιο ζεστη ατμοσφαιρα.",
        "Οπτικα, το προϊον ωφελειται απο καθαρο και airy treatment οπου ο floral τονος γινεται signature χωρις να φορτωνει την αφηγηση.",
      ],
    ),
    tag: text("Curatoriat", "Curated", "Curated"),
    origin: {
      region: text(
        "Grecia, cu selectie gandita pentru expresii florale curate",
        "Greece, with selection built around clear floral expression",
        "Ελλαδα, με selection χτισμενη γυρω απο καθαρη floral expression",
      ),
      story: paragraphs(
        [
          "Povestea de provenienta poate merge aici catre flora mediteraneana si catre loturi alese pentru claritate aromatica. Disciplina de selectie este cea care face produsul credibil in limbaj premium, nu doar contextul natural.",
          "Legatura cu nordul Greciei si cu zona Thessaloniki - Epanomi poate oferi o ancora geografica eleganta pentru o selectie prezentata cu masura.",
        ],
        [
          "The provenance story can move here toward Mediterranean flora and batches chosen for aromatic clarity. Selection discipline is what makes the product credible in premium language, not nature as a backdrop alone.",
          "A link to northern Greece and the Thessaloniki-Epanomi area can offer an elegant geographic anchor for a selection presented with restraint.",
        ],
        [
          "Η provenance ιστορια μπορει εδω να κινηθει προς τη μεσογειακη flora και τα batches που επιλεγονται για aromatic clarity. Η selection discipline ειναι αυτη που κανει το προϊον credible σε premium γλωσσα και οχι μονο η φυση ως φοντο.",
          "Η συνδεση με τη βορεια Ελλαδα και την περιοχη Θεσσαλονικη - Επανομη μπορει να δωσει elegant geographic anchor σε μια selection παρουσιασμενη με restraint.",
        ],
      ),
    },
    details: {
      type: text("Miere florala premium", "Premium floral honey", "Premium floral honey"),
      origin: text(
        "Selectie greceasca cu profil cald si floral",
        "Greek selection with a warm floral profile",
        "Greek selection με warm floral profile",
      ),
      storage: text(
        "A se pastra la temperatura constanta, departe de lumina directa.",
        "Keep at a steady room temperature, away from direct light.",
        "Διατηρειται σε σταθερη θερμοκρασια δωματιου, μακρια απο αμεσο φως.",
      ),
      usage: text(
        "Ideal pentru breakfast service, deserturi simple si pachete cadou.",
        "Ideal for breakfast service, simple desserts, and gift compositions.",
        "Ιδανικο για breakfast service, simple desserts και gift compositions.",
      ),
    },
    seoDescription: text(
      "Wildflower Honey este o miere premium Oliventa pentru hospitality, pairing si gift edits curate.",
      "Wildflower Honey is a premium Oliventa honey for hospitality, pairing, and curated gift edits.",
      "Το Wildflower Honey ειναι ενα premium μελι Oliventa για hospitality, pairing και curated gift edits.",
    ),
    relatedProducts: [
      "thyme-honey-reserve",
      "seasonal-edit-box",
      "coastal-herb-duo",
    ],
    featured: false,
    accent: "gold",
  },
  {
    id: "oliventa-mountain-oregano",
    slug: "mountain-oregano",
    category: "herbs",
    image: null,
    imageHint: text("Pachet premium de ierburi", "Premium herb pack", "Premium herb pack"),
    name: text("Mountain Oregano", "Mountain Oregano", "Mountain Oregano"),
    shortDescription: text(
      "O selectie aromatica pentru bucatarie contemporana, storytelling de origine si ritual culinar mediteranean.",
      "An aromatic selection for contemporary kitchens, origin-led storytelling, and Mediterranean culinary ritual.",
      "Μια aromatic selection για συγχρονη κουζινα, origin-led storytelling και Mediterranean culinary ritual.",
    ),
    longDescription: paragraphs(
      [
        "Mountain Oregano aduce in pagina de produs o nota mai tactila si mai culinara. Este tipul de selectie care transforma un ingredient familiar intr-un obiect de interes, atunci cand este incadrat prin provenienta, textura si ritual.",
        "In universul Oliventa, produsul functioneaza excelent in alaturare cu uleiurile premium si cu selectiile de gifting orientate spre gastronomie.",
      ],
      [
        "Mountain Oregano introduces a more tactile, culinary note to the product page. It is the kind of selection that turns a familiar ingredient into an object of interest when framed through provenance, texture, and ritual.",
        "Within Oliventa, the product pairs naturally with premium olive oils and gifting edits oriented toward gastronomy.",
      ],
      [
        "Το Mountain Oregano φερνει πιο tactile και culinary νοτα στη σελιδα προϊοντος. Ειναι το ειδος selection που μετατρεπει ενα familiar ingredient σε αντικειμενο ενδιαφεροντος οταν πλαισιωνεται με provenance, texture και ritual.",
        "Μεσα στο Oliventa, το προϊον ταιριαζει φυσικα με premium olive oils και gifting edits στραμμενα στη γαστρονομια.",
      ],
    ),
    tag: text("Organic", "Organic", "Organic"),
    origin: {
      region: text(
        "Grecia, cu accent pe peisaj, aroma si selectie regionala",
        "Greece, with emphasis on landscape, aroma, and regional selection",
        "Ελλαδα, με εμφαση σε landscape, aroma και regional selection",
      ),
      story: paragraphs(
        [
          "Pentru aceasta selectie, provenienta poate fi spusa prin teren, clima si disciplina recoltarii. Nordul Greciei si apropierea de Thessaloniki si Epanomi ofera un cadru credibil pentru o poveste despre plante aromatice si selectie atenta.",
          "Standardul premium vine aici din claritatea produsului, din manipularea corecta si din felul in care este introdus intr-un catalog curatoriat.",
        ],
        [
          "For this selection, provenance can be told through terrain, climate, and harvest discipline. Northern Greece and the proximity of Thessaloniki and Epanomi provide a credible backdrop for a story of aromatic plants and careful selection.",
          "The premium standard comes from product clarity, correct handling, and the way it is introduced within a curated catalog.",
        ],
        [
          "Για αυτη τη selection, η provenance μπορει να ειπωθει μεσα απο terrain, climate και harvest discipline. Η βορεια Ελλαδα και η εγγυτητα της Θεσσαλονικης και της Επανομης δινουν credible πλαισιο για ιστορια αρωματικων φυτων και careful selection.",
          "Το premium standard εδω προερχεται απο product clarity, σωστο handling και τον τροπο που το προϊον μπαινει μεσα σε curated catalog.",
        ],
      ),
    },
    details: {
      type: text("Ierburi aromatice premium", "Premium aromatic herb", "Premium aromatic herb"),
      origin: text(
        "Selectie greceasca cu profil vegetal clar",
        "Greek selection with a clear vegetal profile",
        "Greek selection με clear vegetal profile",
      ),
      storage: text(
        "A se pastra in spatiu uscat, ferit de umiditate si lumina directa.",
        "Store in a dry space away from humidity and direct light.",
        "Διατηρειται σε ξηρο χωρο μακρια απο υγρασια και αμεσο φως.",
      ),
      usage: text(
        "Pentru finishing, marinare, pairing cu ulei de masline si pantry gifting.",
        "For finishing, marinades, olive oil pairings, and pantry gifting.",
        "Για finishing, marinades, olive oil pairings και pantry gifting.",
      ),
    },
    seoDescription: text(
      "Mountain Oregano este o selectie premium de ierburi Oliventa, pregatita pentru storytelling despre provenienta si ritual culinar.",
      "Mountain Oregano is a premium Oliventa herb selection built for provenance-led storytelling and culinary ritual.",
      "Το Mountain Oregano ειναι μια premium herb selection Oliventa για provenance-led storytelling και culinary ritual.",
    ),
    relatedProducts: [
      "coastal-herb-duo",
      "aurelia-extra-virgin",
      "seasonal-edit-box",
    ],
    featured: false,
    accent: "olive",
  },
  {
    id: "oliventa-herb-duo",
    slug: "coastal-herb-duo",
    category: "herbs",
    image: null,
    imageHint: text(
      "Mockup colectie de ierburi",
      "Herb collection mockup",
      "Herb collection mockup",
    ),
    name: text("Coastal Herb Duo", "Coastal Herb Duo", "Coastal Herb Duo"),
    shortDescription: text(
      "Un duo curatoriat de ierburi pentru gifting gastronomic si prezentare pantry cu aer editorial.",
      "A curated herb duo for gastronomic gifting and pantry presentation with an editorial feel.",
      "Ενα curated herb duo για gastronomic gifting και pantry presentation με editorial αισθηση.",
    ),
    longDescription: paragraphs(
      [
        "Coastal Herb Duo este compus ca un set, nu ca o simpla combinatie de produse. Accentul este pus pe armonie, pe usurinta de a-l include intr-un gift edit si pe senzatia ca fiecare element a fost ales pentru a construi un moment coerent.",
        "Este o selectie foarte potrivita pentru retail boutique si pentru extensii viitoare catre pachete cadou, pantries premium sau hospitality curation.",
      ],
      [
        "Coastal Herb Duo is composed as a set rather than a simple pairing of products. The emphasis is on harmony, on how easily it fits into a gift edit, and on the sense that each element was chosen to build a coherent moment.",
        "It is particularly well suited to boutique retail and future extensions into gift packs, premium pantries, or hospitality curation.",
      ],
      [
        "Το Coastal Herb Duo συντιθεται ως set και οχι ως απλο pairing προϊοντων. Η εμφαση μπαινει στην αρμονια, στο ποσο ευκολα μπαινει σε gift edit και στην αισθηση οτι καθε στοιχειο επιλεχθηκε για να χτισει coherent moment.",
        "Ταιριαζει ιδιαιτερα σε boutique retail και σε future extensions προς gift packs, premium pantries η hospitality curation.",
      ],
    ),
    tag: text("Mediterranean", "Mediterranean", "Mediterranean"),
    origin: {
      region: text(
        "Grecia, cu inspiratie de coasta si selectie botanica controlata",
        "Greece, with coastal inspiration and controlled botanical selection",
        "Ελλαδα, με coastal inspiration και controlled botanical selection",
      ),
      story: paragraphs(
        [
          "Povestea produsului poate merge catre lumina de coasta, plante aromatice si o selectie facuta cu gust, nu cu exces. Referintele la Thessaloniki si Epanomi pot ancora aceasta directie intr-un peisaj real si memorabil.",
          "Oliventa foloseste provenienta aici pentru a da greutate unui set mic, nu pentru a-l incarca cu artificii narative.",
        ],
        [
          "The story can move toward coastal light, aromatic plants, and a selection made with taste rather than excess. References to Thessaloniki and Epanomi can anchor that direction in a real and memorable landscape.",
          "Here Oliventa uses provenance to give weight to a small set, not to overload it with narrative effects.",
        ],
        [
          "Η ιστορια μπορει να κινηθει προς coastal light, aromatic plants και selection φτιαγμενη με γουστο και οχι με excess. Αναφορες στη Θεσσαλονικη και την Επανομη μπορουν να αγκυρωσουν αυτη την κατευθυνση σε real και memorable landscape.",
          "Εδω το Oliventa χρησιμοποιει την provenance για να δωσει βαρος σε ενα μικρο set και οχι για να το φορτωσει με narrative effects.",
        ],
      ),
    },
    details: {
      type: text("Duo premium de ierburi", "Premium herb duo", "Premium herb duo"),
      origin: text(
        "Selectie greceasca construita pentru gifting gastronomic",
        "Greek selection built for gastronomic gifting",
        "Greek selection χτισμενη για gastronomic gifting",
      ),
      storage: text(
        "A se pastra in spatiu uscat si bine aerisit, departe de umiditate.",
        "Store in a dry, well-aired place away from humidity.",
        "Διατηρειται σε ξηρο και καλα αεριζομενο σημειο μακρια απο υγρασια.",
      ),
      usage: text(
        "Ideal pentru gift sets, finishing culinar si selectii pantry premium.",
        "Ideal for gift sets, culinary finishing, and premium pantry selections.",
        "Ιδανικο για gift sets, culinary finishing και premium pantry selections.",
      ),
    },
    seoDescription: text(
      "Coastal Herb Duo este un set premium de ierburi Oliventa pentru gifting gastronomic si retail boutique.",
      "Coastal Herb Duo is a premium Oliventa herb set for gastronomic gifting and boutique retail.",
      "Το Coastal Herb Duo ειναι ενα premium herb set Oliventa για gastronomic gifting και boutique retail.",
    ),
    relatedProducts: [
      "mountain-oregano",
      "green-table-selection",
      "seasonal-edit-box",
    ],
    featured: false,
    accent: "stone",
  },
  {
    id: "oliventa-olive-soap",
    slug: "olive-soap-signature",
    category: "soaps",
    image: null,
    imageHint: text("Sapun lifestyle premium", "Premium lifestyle soap", "Premium lifestyle soap"),
    name: text(
      "Olive Soap Signature",
      "Olive Soap Signature",
      "Olive Soap Signature",
    ),
    shortDescription: text(
      "O extensie lifestyle cu ton cald, potrivita pentru hospitality boutique, spa si gifting elegant.",
      "A lifestyle extension with a warm tone, suited to boutique hospitality, spa contexts, and elegant gifting.",
      "Μια lifestyle επεκταση με warm tone, ιδανικη για boutique hospitality, spa contexts και elegant gifting.",
    ),
    longDescription: paragraphs(
      [
        "Olive Soap Signature extinde Oliventa dincolo de pantry si aduce brandul intr-o zona mai tactila, mai intima. Este o piesa potrivita pentru hospitality boutique, seturi de baie premium si cadouri mici, dar atent compuse.",
        "Accentul ramane pe sobrietate si pe o prezentare curata, astfel incat produsul sa vorbeasca despre ingrijire si stil de viata rafinat, nu despre abundenta vizuala.",
      ],
      [
        "Olive Soap Signature extends Oliventa beyond the pantry and into a more tactile, intimate category. It is well suited to boutique hospitality, premium bath sets, and smaller gifts assembled with care.",
        "The emphasis stays on restraint and clean presentation so the product speaks in terms of care and refined lifestyle rather than visual excess.",
      ],
      [
        "Το Olive Soap Signature επεκτεινει το Oliventa περα απο το pantry και σε πιο tactile, intimate κατηγορια. Ταιριαζει σε boutique hospitality, premium bath sets και μικροτερα δωρα που στηνονται με προσοχη.",
        "Η εμφαση μενει στη restraint και την καθαρη παρουσιαση ωστε το προϊον να μιλα σε γλωσσα care και refined lifestyle και οχι visual excess.",
      ],
    ),
    tag: text("Crafted", "Crafted", "Crafted"),
    origin: {
      region: text(
        "Grecia, cu inspiratie din ingrediente si ritualuri mediteraneene",
        "Greece, with inspiration drawn from ingredients and Mediterranean ritual",
        "Ελλαδα, με inspiration απο ingredients και Mediterranean ritual",
      ),
      story: paragraphs(
        [
          "Pentru aceasta categorie, provenienta inseamna relatia dintre ingredient, ritm si prezentare. Grecia ofera un cadru natural pentru un produs care poate fi pozitionat intre craft, daily ritual si hospitality premium.",
          "Legatura cu regiunea Thessaloniki - Epanomi poate intra discret ca reper de sourcing si identitate, fara sa forteze un limbaj tehnic inutil.",
        ],
        [
          "In this category, provenance means the relationship between ingredient, ritual, and presentation. Greece offers a natural frame for a product positioned between craft, daily care, and premium hospitality.",
          "A discreet link to the Thessaloniki-Epanomi area can enter as a sourcing and identity reference without forcing unnecessary technical language.",
        ],
        [
          "Σε αυτη την κατηγορια, provenance σημαινει τη σχεση αναμεσα σε ingredient, ritual και presentation. Η Ελλαδα προσφερει φυσικο πλαισιο για προϊον τοποθετημενο μεταξυ craft, daily care και premium hospitality.",
          "Μια διακριτικη συνδεση με την περιοχη Θεσσαλονικη - Επανομη μπορει να μπει ως sourcing και identity reference χωρις περιττη τεχνικη γλωσσα.",
        ],
      ),
    },
    details: {
      type: text("Sapun lifestyle premium", "Premium lifestyle soap", "Premium lifestyle soap"),
      origin: text(
        "Selectie inspirata de ingrediente grecesti si ritual mediteranean",
        "Selection inspired by Greek ingredients and Mediterranean ritual",
        "Selection εμπνευσμενη απο Greek ingredients και Mediterranean ritual",
      ),
      storage: text(
        "A se pastra intr-un loc uscat intre utilizari, ferit de exces de apa.",
        "Keep in a dry place between uses, away from excessive water exposure.",
        "Διατηρειται σε ξηρο σημειο μεταξυ των χρησεων, μακρια απο υπερβολικη εκθεση σε νερο.",
      ),
      usage: text(
        "Potrivit pentru guest amenities, gifting si ritualuri de baie premium.",
        "Suited to guest amenities, gifting, and premium bath rituals.",
        "Καταλληλο για guest amenities, gifting και premium bath rituals.",
      ),
    },
    seoDescription: text(
      "Olive Soap Signature este un sapun premium Oliventa pentru hospitality boutique, gifting si lifestyle rafinat.",
      "Olive Soap Signature is a premium Oliventa soap for boutique hospitality, gifting, and refined lifestyle use.",
      "Το Olive Soap Signature ειναι ενα premium σαπουνι Oliventa για boutique hospitality, gifting και refined lifestyle use.",
    ),
    relatedProducts: [
      "bath-ritual-duo",
      "host-gift-box",
      "seasonal-edit-box",
    ],
    featured: false,
    accent: "stone",
  },
  {
    id: "oliventa-bath-ritual",
    slug: "bath-ritual-duo",
    category: "soaps",
    image: null,
    imageHint: text("Set ritual de baie", "Bath ritual set", "Bath ritual set"),
    name: text("Bath Ritual Duo", "Bath Ritual Duo", "Bath Ritual Duo"),
    shortDescription: text(
      "Set de sapunuri gandit pentru gifting premium si camere de oaspeti cu identitate rafinata.",
      "A soap set shaped for premium gifting and guest rooms with a more refined identity.",
      "Ενα soap set σχεδιασμενο για premium gifting και guest rooms με πιο refined identity.",
    ),
    longDescription: paragraphs(
      [
        "Bath Ritual Duo este compus pentru a functiona imediat ca set cadou sau ca extensie pentru camere de oaspeti. Are o structura clara, usor de inteles, dar prezentata cu aceeasi disciplina vizuala ca restul universului Oliventa.",
        "Categoria permite viitoare extensii catre seturi sezoniere, colaborari boutique si piese lifestyle mai ample, fara a schimba limbajul de brand.",
      ],
      [
        "Bath Ritual Duo is composed to function immediately as a gift set or a guest-room extension. It is easy to read, yet presented with the same visual discipline as the rest of the Oliventa world.",
        "The category leaves room for future seasonal sets, boutique collaborations, and broader lifestyle edits without changing the brand language.",
      ],
      [
        "Το Bath Ritual Duo συντιθεται για να λειτουργει αμεσα ως gift set η guest-room extension. Ειναι ευκολο στην αναγνωση, αλλα παρουσιαζεται με την ιδια visual discipline που εχει ο υπολοιπος κοσμος του Oliventa.",
        "Η κατηγορια αφηνει χωρο για future seasonal sets, boutique collaborations και broader lifestyle edits χωρις αλλαγη στο brand language.",
      ],
    ),
    tag: text("Lifestyle", "Lifestyle", "Lifestyle"),
    origin: {
      region: text(
        "Grecia, intr-o selectie lifestyle construita cu ton mediteranean",
        "Greece, in a lifestyle selection shaped with Mediterranean tone",
        "Ελλαδα, σε lifestyle selection με Mediterranean tone",
      ),
      story: paragraphs(
        [
          "Originea este folosita aici pentru a da produsului o baza culturala si tactila, nu pentru a-l transforma intr-o demonstratie tehnica. Grecia, ingredientele locale si ritualurile de ingrijire sustin foarte bine aceasta directie.",
          "In contextul Oliventa, referintele catre Thessaloniki si Epanomi pot deveni un element discret de identitate, mai ales in jurul selectiei si prezentarii premium.",
        ],
        [
          "Origin is used here to give the product cultural and tactile grounding rather than turning it into a technical demonstration. Greece, local ingredients, and care rituals support that direction naturally.",
          "Within Oliventa, references to Thessaloniki and Epanomi can become a discreet layer of identity, especially around selection and premium presentation.",
        ],
        [
          "Η προελευση χρησιμοποιειται εδω για να δωσει στο προϊον cultural και tactile βαση και οχι για να γινει τεχνικη επιδειξη. Η Ελλαδα, τα τοπικα ingredients και τα care rituals στηριζουν φυσικα αυτη την κατευθυνση.",
          "Μεσα στο Oliventa, αναφορες στη Θεσσαλονικη και την Επανομη μπορουν να γινουν διακριτικο layer ταυτοτητας, ειδικα γυρω απο selection και premium presentation.",
        ],
      ),
    },
    details: {
      type: text("Set premium de sapunuri", "Premium soap set", "Premium soap set"),
      origin: text(
        "Selectie greceasca cu orientare lifestyle si hospitality",
        "Greek selection with lifestyle and hospitality orientation",
        "Greek selection με lifestyle και hospitality orientation",
      ),
      storage: text(
        "A se pastra uscat si bine ventilat intre utilizari.",
        "Keep dry and well ventilated between uses.",
        "Διατηρειται στεγνο και καλα αεριζομενο μεταξυ των χρησεων.",
      ),
      usage: text(
        "Pentru gifting, guest rooms, spa boutique si ritualuri de baie.",
        "For gifting, guest rooms, boutique spa contexts, and bath rituals.",
        "Για gifting, guest rooms, boutique spa contexts και bath rituals.",
      ),
    },
    seoDescription: text(
      "Bath Ritual Duo este un set premium Oliventa pentru gifting, hospitality si extensii lifestyle.",
      "Bath Ritual Duo is a premium Oliventa set for gifting, hospitality, and lifestyle extensions.",
      "Το Bath Ritual Duo ειναι ενα premium set Oliventa για gifting, hospitality και lifestyle extensions.",
    ),
    relatedProducts: [
      "olive-soap-signature",
      "seasonal-edit-box",
      "host-gift-box",
    ],
    featured: false,
    accent: "gold",
  },
  {
    id: "oliventa-host-gift-box",
    slug: "host-gift-box",
    category: "gift-boxes",
    image: null,
    imageHint: text("Gift box compus", "Composed gift box", "Composed gift box"),
    name: text("Host Gift Box", "Host Gift Box", "Host Gift Box"),
    shortDescription: text(
      "O compozitie de ulei, miere si selectie pantry, gandita pentru cadouri premium si parteneriate boutique.",
      "A composition of olive oil, honey, and pantry selection designed for premium gifting and boutique partnerships.",
      "Μια συνθεση απο olive oil, honey και pantry selection για premium gifting και boutique partnerships.",
    ),
    longDescription: paragraphs(
      [
        "Host Gift Box este unul dintre cele mai clare produse pentru conversie boutique. Combinatia dintre util, memorabil si prezentat editorial il face potrivit pentru retail rafinat, gifting corporate si proiecte hospitality cu identitate.",
        "Valoarea lui nu vine din cantitate, ci din felul in care produsele sunt editate impreuna si din senzatia ca intregul pachet a fost curatoriat cu o mana sigura.",
      ],
      [
        "Host Gift Box is one of the clearest boutique conversion products in the range. The combination of useful, memorable, and editorially presented makes it well suited to refined retail, corporate gifting, and hospitality projects with identity.",
        "Its value comes less from quantity than from how the products are edited together and the sense that the whole package was curated with a steady hand.",
      ],
      [
        "Το Host Gift Box ειναι ενα απο τα καθαροτερα boutique conversion products της σειρας. Ο συνδυασμος useful, memorable και editorially presented το κανει καταλληλο για refined retail, corporate gifting και hospitality projects με identity.",
        "Η αξια του ερχεται λιγοτερο απο την ποσοτητα και περισσοτερο απο το πως τα προϊοντα ειναι edited μαζι και απο την αισθηση οτι ολο το πακετο εχει curated με σταθερο χερι.",
      ],
    ),
    tag: text("Curatoriat", "Curated", "Curated"),
    origin: {
      region: text(
        "Grecia, intr-o compozitie pregatita pentru gifting premium",
        "Greece, in a composition prepared for premium gifting",
        "Ελλαδα, σε composition ετοιμη για premium gifting",
      ),
      story: paragraphs(
        [
          "Originea functioneaza aici la nivel de selectie compusa: produse grecesti alese sa stea bine impreuna si sa poarte mai departe un mesaj coerent despre gust, calitate si ospitalitate.",
          "Povestea poate vorbi clar despre Thessaloniki si Epanomi ca puncte de referinta pentru sourcing, ambianta si standarde moderne in compunerea unui gift set premium.",
        ],
        [
          "Origin works here at the level of composed selection: Greek products chosen to sit well together and carry forward a coherent message about taste, quality, and hospitality.",
          "The story can speak clearly about Thessaloniki and Epanomi as reference points for sourcing, atmosphere, and modern standards inside a premium gift set.",
        ],
        [
          "Η προελευση λειτουργει εδω στο επιπεδο της composed selection: ελληνικα προϊοντα επιλεγμενα να στεκονται καλα μαζι και να μεταφερουν coherent μηνυμα για taste, quality και hospitality.",
          "Η ιστορια μπορει να μιλησει καθαρα για τη Θεσσαλονικη και την Επανομη ως reference points για sourcing, atmosphere και modern standards μεσα σε premium gift set.",
        ],
      ),
    },
    details: {
      type: text("Gift box premium curatoriat", "Curated premium gift box", "Curated premium gift box"),
      origin: text(
        "Asortiment grecesc construit pentru gifting si retail boutique",
        "Greek assortment built for gifting and boutique retail",
        "Greek assortment χτισμενο για gifting και boutique retail",
      ),
      storage: text(
        "A se pastra intr-un spatiu uscat, cu fiecare produs depozitat conform categoriei sale.",
        "Store in a dry space, with each included product kept according to its category.",
        "Διατηρειται σε ξηρο χωρο, με καθε included product να φυλασσεται αναλογα με την κατηγορια του.",
      ),
      usage: text(
        "Ideal pentru gifting corporate, hospitality premium si cadouri private.",
        "Ideal for corporate gifting, premium hospitality, and private gifts.",
        "Ιδανικο για corporate gifting, premium hospitality και private gifts.",
      ),
    },
    seoDescription: text(
      "Host Gift Box este o compozitie premium Oliventa pentru gifting, retail boutique si hospitality.",
      "Host Gift Box is a premium Oliventa composition for gifting, boutique retail, and hospitality.",
      "Το Host Gift Box ειναι μια premium composition Oliventa για gifting, boutique retail και hospitality.",
    ),
    relatedProducts: [
      "aurelia-extra-virgin",
      "thyme-honey-reserve",
      "olive-soap-signature",
    ],
    featured: true,
    accent: "gold",
  },
  {
    id: "oliventa-seasonal-edit",
    slug: "seasonal-edit-box",
    category: "gift-boxes",
    image: null,
    imageHint: text("Editie sezoniera premium", "Premium seasonal edit", "Premium seasonal edit"),
    name: text("Seasonal Edit Box", "Seasonal Edit Box", "Seasonal Edit Box"),
    shortDescription: text(
      "Un format pregatit pentru sarbatori, gifting corporate si selectii private cu prezentare premium.",
      "A format prepared for holidays, corporate gifting, and private selections with premium presentation.",
      "Ενα format ετοιμο για holidays, corporate gifting και private selections με premium presentation.",
    ),
    longDescription: paragraphs(
      [
        "Seasonal Edit Box este gandit pentru momentele in care Oliventa trebuie sa para atat generos, cat si perfect controlat. Este formatul ideal pentru sarbatori, editii private si parteneriate in care prezentarea conteaza la fel de mult ca selectia.",
        "Fiind compus modular, produsul poate evolua ulterior foarte usor catre serii limitate, colaborari sau versiuni orientate spre B2B.",
      ],
      [
        "Seasonal Edit Box is designed for moments when Oliventa needs to feel generous yet perfectly controlled. It is ideal for holidays, private edits, and partnerships where presentation matters as much as selection.",
        "Because it is modular by nature, the format can evolve easily into limited series, collaborations, or B2B-oriented versions later.",
      ],
      [
        "Το Seasonal Edit Box σχεδιαζεται για στιγμες οπου το Oliventa πρεπει να νιωθει generous και ταυτοχρονα perfectly controlled. Ειναι ιδανικο για holidays, private edits και partnerships οπου η παρουσιαση μετρα οσο και η selection.",
        "Επειδη ειναι modular απο τη φυση του, το format μπορει να εξελιχθει ευκολα σε limited series, collaborations η B2B-oriented versions αργοτερα.",
      ],
    ),
    tag: text("Limited Selection", "Limited Selection", "Limited Selection"),
    origin: {
      region: text(
        "Grecia, intr-o selectie sezoniera pregatita pentru extensii premium",
        "Greece, in a seasonal selection prepared for premium extensions",
        "Ελλαδα, σε seasonal selection ετοιμη για premium extensions",
      ),
      story: paragraphs(
        [
          "Ca produs compus, Seasonal Edit Box poate lega elegant provenienta de curatoriere: produse grecesti alese sa reflecte sezonul, contextul si intentia unui cadou bine gandit.",
          "In jurul Thessaloniki si Epanomi exista suficienta greutate regionala pentru a sustine o poveste moderna despre selectie, prezentare si standarde fara rigiditate.",
        ],
        [
          "As a composed format, Seasonal Edit Box can tie provenance elegantly to curation: Greek products selected to reflect the season, the occasion, and the intention behind a well-made gift.",
          "The Thessaloniki-Epanomi context carries enough regional weight to support a modern story about selection, presentation, and standards without becoming rigid.",
        ],
        [
          "Ως composed format, το Seasonal Edit Box μπορει να δεσει την provenance κομψα με την curation: ελληνικα προϊοντα επιλεγμενα να αντανακλουν τη season, την occasion και την προθεση πισω απο ενα καλοφτιαγμενο δωρο.",
          "Το context Θεσσαλονικη - Επανομη εχει αρκετο regional βαρος για να στηριξει μια μοντερνα ιστορια selection, presentation και standards χωρις να γινεται rigid.",
        ],
      ),
    },
    details: {
      type: text("Gift box sezonier premium", "Premium seasonal gift box", "Premium seasonal gift box"),
      origin: text(
        "Selectie greceasca modulara pentru gifting si proiecte private",
        "Modular Greek selection for gifting and private projects",
        "Modular Greek selection για gifting και private projects",
      ),
      storage: text(
        "A se pastra uscat si ferit de caldura, cu continutul gestionat pe categorii.",
        "Keep dry and away from heat, with contents managed according to category.",
        "Διατηρειται στεγνο και μακρια απο θερμοτητα, με το περιεχομενο να διαχειριζεται ανα κατηγορια.",
      ),
      usage: text(
        "Ideal pentru sarbatori, gifting corporate, editii private si hospitality premium.",
        "Ideal for holiday gifting, corporate requests, private edits, and premium hospitality.",
        "Ιδανικο για holiday gifting, corporate requests, private edits και premium hospitality.",
      ),
    },
    seoDescription: text(
      "Seasonal Edit Box este un format premium Oliventa pentru gifting sezonier, proiecte private si retail boutique.",
      "Seasonal Edit Box is a premium Oliventa format for seasonal gifting, private projects, and boutique retail.",
      "Το Seasonal Edit Box ειναι ενα premium format Oliventa για seasonal gifting, private projects και boutique retail.",
    ),
    relatedProducts: [
      "host-gift-box",
      "wildflower-honey",
      "bath-ritual-duo",
    ],
    featured: true,
    accent: "olive",
  },
];

function localizeProductSummary(
  product: ProductRecord,
  locale: Locale,
): LocalizedProduct {
  return {
    id: product.id,
    slug: product.slug,
    category: product.category,
    image: product.image,
    imageHint: product.imageHint[locale],
    name: product.name[locale],
    shortDescription: product.shortDescription[locale],
    tag: product.tag[locale],
    featured: product.featured,
    accent: product.accent,
  };
}

function localizeProductDetail(
  product: ProductRecord,
  locale: Locale,
): LocalizedProductDetail {
  return {
    ...localizeProductSummary(product, locale),
    longDescription: product.longDescription[locale],
    origin: {
      region: product.origin.region[locale],
      story: product.origin.story[locale],
    },
    details: {
      type: product.details.type[locale],
      origin: product.details.origin[locale],
      storage: product.details.storage[locale],
      usage: product.details.usage[locale],
    },
    seoDescription: product.seoDescription[locale],
    relatedProducts: product.relatedProducts,
  };
}

export function getProductRecordBySlug(slug: string) {
  return productCatalog.find((product) => product.slug === slug) ?? null;
}

export function getAllProductSlugs() {
  return productCatalog.map((product) => product.slug);
}

export function getLocalizedProducts(locale: Locale): LocalizedProduct[] {
  return productCatalog.map((product) => localizeProductSummary(product, locale));
}

export function getLocalizedProductDetailBySlug(
  locale: Locale,
  slug: string,
): LocalizedProductDetail | null {
  const product = getProductRecordBySlug(slug);

  if (!product) {
    return null;
  }

  return localizeProductDetail(product, locale);
}

export function getLocalizedRelatedProducts(
  locale: Locale,
  slug: string,
  limit = 4,
): LocalizedProduct[] {
  const product = getProductRecordBySlug(slug);

  if (!product) {
    return [];
  }

  const explicitMatches = product.relatedProducts
    .map((relatedSlug) => getProductRecordBySlug(relatedSlug))
    .filter((item): item is ProductRecord => Boolean(item));

  const fallbackMatches = productCatalog.filter(
    (candidate) =>
      candidate.slug !== product.slug &&
      candidate.category === product.category &&
      !explicitMatches.some((match) => match.slug === candidate.slug),
  );

  return [...explicitMatches, ...fallbackMatches]
    .slice(0, limit)
    .map((item) => localizeProductSummary(item, locale));
}
