export type SlideType = "text" | "choice" | "date" | "number" | "measurement" | "loading" | "age"

export interface OnboardingData {
  goal: string
  gender: string
  frequency: string
  loading: string
  age: string
}

export interface ChoiceOption {
  text: string
  iconName: string
}

export interface Slide {
  type: SlideType
  title: string
  field: keyof OnboardingData
  placeholder?: string
  choices?: ChoiceOption[]
  min?: number
  max?: number
  validation: (value: string) => boolean
}

export const slides: Slide[] = [
  {
    type: "choice",
    title: "Select your gender",
    field: "gender",
    choices: [
      { text: "male", iconName: "Mars" },
      { text: "female", iconName: "Venus" },
    ],
    validation: (value: string) => value.length > 0,
  },
  {
    type: "age",
    title: "How old are you?",
    field: "age",
    placeholder: "Enter your age",
    validation: (value: string) => value.length > 0,
  },
  {
    type: "choice",
    title: "What brings you to hush?",
    field: "goal",
    choices: [
      { text: "become happier", iconName: "Smile" },
      { text: "get over anxiety", iconName: "Brain" },
      { text: "reduce stress", iconName: "HeartPulse" },
      { text: "build self-esteem", iconName: "Award" },
    ],
    validation: (value: string) => value.length > 0,
  },
  {
    type: "choice",
    title: "How often do you get stressed?",
    field: "goal",
    choices: [
      { text: "very often", iconName: "Clock" },
      { text: "sometimes", iconName: "HelpCircle" },
      { text: "rarely", iconName: "CheckCircle2" },
      { text: "never", iconName: "XCircle" },
    ],
    validation: (value: string) => value.length > 0,
  },
  {
    type: "choice",
    title: "Does stress ever make it hard to breathe?",
    field: "goal",
    choices: [
      { text: "yes", iconName: "CheckCircle2" },
      { text: "sometimes", iconName: "HelpCircle" },
      { text: "no", iconName: "XCircle" },
    ],
    validation: (value: string) => value.length > 0,
  },
  {
    type: "choice",
    title: "How often do u struggle with anxiety?",
    field: "frequency",
    choices: [
      { text: "very often", iconName: "Clock" },
      { text: "sometimes", iconName: "HelpCircle" },
      { text: "rarely", iconName: "CheckCircle2" },
      { text: "never", iconName: "XCircle" },
    ],
    validation: (value: string) => value.length > 0,
  },
  {
    type: "choice",
    title: "Have you ever tried meditation apps before?",
    field: "frequency",
    choices: [
      { text: "yes", iconName: "CircleCheckBig" },
      { text: "no", iconName: "XCircle" },
    ],
    validation: (value: string) => value.length > 0,
  },
]

