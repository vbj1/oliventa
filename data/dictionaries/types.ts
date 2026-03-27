export interface DictionaryCard {
  title: string;
  description: string;
  kicker?: string;
  stat?: string;
}

export interface DictionaryHero {
  eyebrow: string;
  title: string;
  description: string;
}

export interface SiteDictionary {
  localeName: string;
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    home: string;
    about: string;
    products: string;
    quality: string;
    contact: string;
    inquiry: string;
    switcherLabel: string;
    menu: string;
    close: string;
  };
  footer: {
    tagline: string;
    description: string;
    rights: string;
    note: string;
    contactLabel: string;
    navigationLabel: string;
    socialLabel: string;
    socialItems: string[];
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      highlights: string[];
      stage: {
        kicker: string;
        title: string;
        description: string;
        details: {
          value: string;
          label: string;
        }[];
      };
    };
    productUniverse: {
      eyebrow: string;
      title: string;
      description: string;
      note: {
        title: string;
        description: string;
      };
      items: DictionaryCard[];
    };
    story: {
      eyebrow: string;
      title: string;
      description: string;
      paragraphs: string[];
      metrics: {
        value: string;
        label: string;
      }[];
      visual: {
        eyebrow: string;
        title: string;
        description: string;
        details: string[];
      };
    };
    quality: {
      eyebrow: string;
      title: string;
      description: string;
      location: {
        eyebrow: string;
        title: string;
        description: string;
        points: string[];
      };
      pillars: DictionaryCard[];
      cta: string;
    };
    inquiry: {
      eyebrow: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
    };
  };
  about: {
    hero: DictionaryHero;
    introduction: {
      title: string;
      description: string;
    };
    values: {
      eyebrow: string;
      title: string;
      description: string;
      items: DictionaryCard[];
    };
    roadmap: {
      eyebrow: string;
      title: string;
      description: string;
      steps: DictionaryCard[];
    };
  };
  products: {
    hero: DictionaryHero & {
      kicker: string;
    };
    filters: {
      eyebrow: string;
      title: string;
      description: string;
      allLabel: string;
      labels: {
        oliveOil: string;
        olives: string;
        honey: string;
        herbs: string;
        soaps: string;
        giftBoxes: string;
      };
    };
    catalog: {
      eyebrow: string;
      title: string;
      description: string;
      emptyState: string;
    };
    featuredCollection: {
      eyebrow: string;
      title: string;
      description: string;
      highlightLabel: string;
      primaryCta: string;
      details: string[];
    };
    inquiry: {
      eyebrow: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
    };
    actions: {
      viewDetails: string;
      sendInquiry: string;
    };
    detailPage: {
      story: {
        eyebrow: string;
        title: string;
        description: string;
      };
      origin: {
        eyebrow: string;
        title: string;
        description: string;
      };
      details: {
        eyebrow: string;
        title: string;
        labels: {
          type: string;
          category: string;
          origin: string;
          storage: string;
          usage: string;
        };
      };
      inquiry: {
        eyebrow: string;
        title: string;
        description: string;
        primaryCta: string;
      };
      related: {
        eyebrow: string;
        title: string;
        description: string;
      };
    };
  };
  qualityPage: {
    hero: DictionaryHero;
    pillars: {
      eyebrow: string;
      title: string;
      description: string;
      items: DictionaryCard[];
    };
    standards: {
      eyebrow: string;
      title: string;
      description: string;
      items: DictionaryCard[];
    };
    provenance: {
      title: string;
      description: string;
      bullets: string[];
    };
  };
  contact: {
    hero: DictionaryHero;
    channels: {
      eyebrow: string;
      title: string;
      description: string;
      items: DictionaryCard[];
    };
    process: {
      eyebrow: string;
      title: string;
      description: string;
      items: DictionaryCard[];
    };
    note: {
      title: string;
      description: string;
    };
  };
}
