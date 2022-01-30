const enumAliasResolvers = {
    AgeListItem: {
      BABY: 'baby',
      YOUNG: 'young',
      ADULT: 'adult',
      SENIOR: 'senior',
    },
    CoatListItem: {
      SHORT: 'short',
      MEDIUM: 'medium',
      LONG: 'long',
      WIRE: 'wire',
      HAIRLESS: 'hairless',
      CURLY: 'curly',
    },
    GenderListItem: {
      MALE: 'male',
      FEMALE: 'female',
      UNKNOWN: 'unknown',
    },
    SizeListItem: {
      SMALL: 'small',
      MEDIUM: 'medium',
      LARGE: 'large',
      EXTRA_LARGE: 'xlarge',
    },
    Sort: {
      RECENT: 'recent',
      _RECENT: '-recent',
      DISTANCE: 'distance',
      _DISTANCE: '-distance',
      RANDOM: 'random',
    },
    Sort2: {
      DISTANCE: 'distance',
      _DISTANCE: '-distance',
      NAME: 'name',
      _NAME: '-name',
      COUNTRY: 'country',
      _COUNTRY: '-country',
      STATE: 'state',
      _STATE: '-state',
    },
    Status: {
      ADOPTABLE: 'adoptable',
      ADOPTED: 'adopted',
      FOUND: 'found',
    },
    Type2: {
      DOG: 'dog',
      CAT: 'cat',
      SMALL_FURRY: 'small-furry',
      BIRD: 'bird',
      SCALES_FINS_OTHER: 'scales-fins-other',
      BARNYARD: 'barnyard',
      RABBIT: 'rabbit',
      HORSE: 'horse',
    },
  }
  export default enumAliasResolvers