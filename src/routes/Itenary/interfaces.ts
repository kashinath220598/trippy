interface Item {
  title: string;
  address: string;
}

export interface Itenary {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  stay: Array<Item>;
  visit: Array<Item>;
  food: Array<Item>;
}

export interface AskRequest {
  source: string;
  destination: string;
  fromDate: Date;
  toDate: Date;
  noOfPeople: number;
  budget: number;
  terrain: Array<string>;
}
