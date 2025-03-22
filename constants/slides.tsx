// Define all shared types in a central location
export type SlideType = "text" | "choice" | "date" | "number" | "measurement" | "loading" | "age";

export interface OnboardingData {
  goal: string;
  gender: string;
  frequency: string;
  loading: string;
  age: string;
}

export interface Slide {
  type: SlideType;
  title: string;
  field: keyof OnboardingData;
  placeholder?: string;
  choices?: string[];
  min?: number;
  max?: number;
  validation: (value: string) => boolean;
}

export const slides: Slide[] = [
  {
    type:'choice',
    title: "Select your gender",
    field: 'gender',
    choices: [
      "male",
      "female",
      "other"
    ],
    validation: (value: string) => value.length > 0
  },
  {
    type: 'age',
    title: "How old are you?",
    field: 'age',
    placeholder: "Enter your age", 
    validation: (value: string) => value.length > 0
  },
  {
    type: 'choice',
    title: "What brings you to hush?",
    field: 'goal',
    choices: [
      "become happier",
      "get over anxiety",
      "reduce stress",
      "build self-esteem",
    ],
    validation: (value: string) => value.length > 0
  },
  {
    type: 'choice',
    title: "How often do you get stressed?",
    field: 'goal',
    choices: [
      "very often",
      "sometimes",
      "rarely",
      "never"
    ],
    validation: (value: string) => value.length > 0
  },
  {
    type: 'choice',
    title: "Does stress ever make it hard to breathe?",
    field: 'goal',
    choices: [
      "yes",
      "sometimes",
      "no",
    ],
    validation: (value: string) => value.length > 0
  },
  {
    type: 'choice',
    title: "How often do u struggle with anxiety?",
    field: 'frequency',
    choices: [
      "very often",
      "sometimes",
      "rarely",
      "never"
    ],
    validation: (value: string) => value.length > 0
  },
  {
    type: 'choice',
    title: "Have you ever tried meditation apps before?",
    field: 'frequency',
    choices: [
      "yes",
      "no"
    ],
    validation: (value: string) => value.length > 0
  }
];