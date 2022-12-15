export interface Birthdays extends Array<Birthday>{}

export interface Birthday {
  id: number;
  name: string;
  day: string;
  month: string;
}

export interface BirthdaysAPI{
  birthdays: Birthdays;
}
