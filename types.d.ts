type RMCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
};

type RMLocation = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [
    string,
    string
    // ...
  ];
  url: string;
  created: string;
};
