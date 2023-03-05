import { Injectable } from '@angular/core';
import { Skills, Comment } from './skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skills: Skills[] = [
    {
      name: 'Java',
      type: 'language',
    },
    {
      name: 'TypeScript',
      type: 'language',
    },
    {
      name: 'Python',
      type: 'language',
    },
    {
      name: 'Angular',
      type: 'framework',
    },
    {
      name: 'React',
      type: 'framework',
    },
    {
      name: 'Spring',
      type: 'framework',
    },
    {
      name: 'JestJs',
      type: 'test',
    },
    {
      name: 'Docker',
      type: 'devOps',
    },
    {
      name: 'Flexible',
      type: 'knowhow',
    },
    {
      name: 'Agile',
      type: 'knowhow',
    },
    {
      name: 'Anglais',
      type: 'language',
    },
    {
      name: 'Autre',
      type: 'other',
    },
  ];

  /**
   * java: 2
   * typescript: 2
   * python: 2
   * PHP: 0
   * angular: 3
   * react: 2
   * spring: 2
   * Django: 0
   * Symfony: 0
   * jestjs: 2
   * docker: 2
   * adaptable: 2
   * curieux: 0
   * agile: 2
   * anglais: 3
   * autre: 2
   */
  comments: Comment = {
    java: [
      "J'ai une préférence pour les langages objet. Java étant typé, compilé et entièrement objet, je suis aux anges.",
      'Le langage backend vu pendant la formation de CDA et celui vers lequel je tends pour du code bien organisé.',
    ],
    typescript: [
      "Je sais bien que dans le fond TypeScript est du JS mais c'est quand même plus intéressant le code typé.",
      "Plus je progresse plus j'apprécie les langages orientés objet. TypeScript fait partie de mes langages préférés",
    ],
    python: [
      "J'aime bien la simplicité de Python et que ce soit un langage objet bien que techniquement ce soit du script.",
      "J'ai fait des exercices d'algorithmie en Python et un peu de Django.",
    ],
    angular: [
      "Le framework front que je préfère. J'aime son architecture plus carré que les autres ",
      "Ma première expérience avec angular n'avait été fructueuse mais depuis que j'ai un peu plus d'expérience, je le préfère dorénavent.",
      "Un cadre de travail bien organisé pour les codeurs minutieux. J'en fais partie.",
    ],
    spring: [
      "Le framework que l'on va utiliser pendant la formation de CDA. Je l'ai déjà utilisé pendant ma formation à Beweb.",
      "J'ai déjà fait un petit projet d'équipe pendant ma formation à Beweb utilisant ce framework. Je le trouve très agréable à utiliser.",
    ],
    react: [
      "Le premier framework front que j'ai utilisé. J'ai appris ce qu'était un MVC en me faisant la main sur l'outil.",
      'Un framework facile à prendre en main et il est bien de savoir correctement organiser son code comme je le fais.',
    ],
    jestjs: [
      "Je m'interesse aux tests et entre autre à la TDD et Xtreme Programming.",
      "JestJS est la bibliothèque de test que j'ai la plus utilisée.",
    ],
    docker: [
      "Pendant une formation professionnalisante, j'ai été initié au métier de devOps. J'utilise régulièrement les conteneurs dans mes projets personnels.",
      "J'utilise souvent Docker. Pour tester une idée ou une nouvelle technologie, je trouve ça tellement plus pratique que de faire une installation sur mon environnement.",
    ],
    flexible: [
      "Je sais m'adapter que cela soit à une situation ou une nouveauté.",
      "Changer de carrière est, je pense le meilleur exemple pour vous montrer que je sais m'adapter.",
    ],
    agile: [
      "J'ai été formé à la méthodologie SCRUM et je m'intéresse aux autres méthodes Agile, comme la TDD et Xtreme Programming.",
      "J'ai été formé à la méthodologie SCRUM pendant plus d'un mois chez Diginamic. Je l'ai pratiqué avec les autres apprenants sur plusieurs projets.",
    ],
    anglais: [
      "Je parle couramment Anglais. J'ai vécu à l'étranger pendant plusieurs années et j'ai tendance à penser en anglais quand je code. Mes commentaires le sont par défaut. J'ai également écrit quelques articles.",
      "Personnellement, je ne me considère pas bilingue mais il est vrai que je n'ai aucun problème dans un environnement anglophone.",
      "I have long pointless discussions with chatGPT just for the fun of it ! That's how much I like to converse in English.",
    ],
    autre: [
      "J'adore relever des défis et apprendre de nouvelles technologies. J'ai été formé à être un développeur web et non pas à un langage en particulier.",
      'Je suis technophile et aime apprendre. Je peux me former à la technologie que vous souhaitez.',
    ],
  };

  constructor() {}

  /**
   *
   * @param name !! Important !! Pass the name as follows skill.toLowerCase()
   * @param percentage
   * @returns The appropriate comment
   */
  chooseAComment(name: string, percentage: number): string {
    if (percentage < 40) {
      return this.comments[name][1];
    } else if (percentage >= 40 && percentage < 80) {
      return this.comments[name][
        Math.floor(Math.random() * this.comments[name].length)
      ];
    } else {
      if (this.comments[name].length === 3) return this.comments[name][2];
      return this.comments[name][0];
    }
  }
}
