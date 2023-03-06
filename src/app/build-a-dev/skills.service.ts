import { Injectable } from '@angular/core';
import { Skills, Comment } from './skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  AUTRE: string = 'Autre';
  LANGUAGE: string = 'language';
  FRAMEWORK: string = 'framework';
  TEST: string = 'test';
  DEVOPS: string = 'devOps';
  ENGLISH: string = 'Anglais';

  skills: Skills[] = [
    {
      name: 'Java',
      type: this.LANGUAGE,
    },
    {
      name: 'TypeScript',
      type: this.LANGUAGE,
    },
    {
      name: 'Python',
      type: this.LANGUAGE,
    },
    {
      name: 'Angular',
      type: this.FRAMEWORK,
    },
    {
      name: 'React',
      type: this.FRAMEWORK,
    },
    {
      name: 'Spring',
      type: this.FRAMEWORK,
    },
    {
      name: 'JestJs',
      type: this.TEST,
    },
    {
      name: 'Docker',
      type: this.DEVOPS,
    },
    {
      name: 'Flexible',
      type: 'knowhow',
    },
    {
      name: 'SCRUM',
      type: 'knowhow',
    },
    {
      name: this.ENGLISH,
      type: this.LANGUAGE,
    },
    {
      name: this.AUTRE,
      type: 'other',
    },
  ];

  comments: Comment = {
    java: [
      "J'ai une préférence pour les langages objet. Java étant typé, compilé et entièrement objet, je suis aux anges.",
      'Le langage backend étudié pendant la formation de CDA et celui vers lequel je tends à utiliser pour du code bien organisé.',
    ],
    typescript: [
      "Je sais bien que dans le fond TypeScript est du JS mais c'est quand même plus intéressant le code typé.",
      "Plus je progresse plus j'apprécie les langages orientés objet. TypeScript fait partie de mes langages préférés",
    ],
    python: [
      "J'ai codé en Python à plusieurs occasions, notamment des exercices d'algorithmie et un peu de Django.",
      "J'aime bien la simplicité de Python et que ce soit un langage objet bien que techniquement ce soit du script.",
      "J'ai fait des exercices d'algorithmie en Python et un peu de Django.",
    ],
    angular: [
      "Le framework front que je préfère. J'aime travailler au sein de son architecture structuré.",
      "Ma première expérience avec angular n'avait été fructueuse mais depuis que j'ai un peu plus d'expérience, je le préfère dorénavent.",
      "Un cadre de travail bien organisé pour les codeurs minutieux. J'en fais partie.",
    ],
    spring: [
      "Le framework que l'on va utiliser pendant la formation de CDA. Je l'ai utilisé pendant ma formation à Beweb pour un projet d'équipe.",
      "J'ai déjà fait un petit projet d'équipe pendant ma formation à Beweb utilisant ce framework. Je le trouve très agréable à utiliser.",
    ],
    react: [
      "Le premier framework front que j'ai utilisé. J'ai appris ce qu'était un MVC en me faisant la main sur l'outil.",
      'Un framework facile à prendre en main et il est bien de savoir correctement organiser son code comme je le fais.',
    ],
    jestjs: [
      "JestJS est la bibliothèque de test que j'ai la plus utilisée.",
      "Je m'interesse aux tests unitaires et entre autre à la TDD et Xtreme Programming.",
    ],
    docker: [
      "Pendant une formation professionnalisante, j'ai été initié au métier de devOps. J'utilise régulièrement les conteneurs dans mes projets personnels.",
      "J'utilise souvent Docker. Pour tester une idée ou une nouvelle technologie, je trouve ça tellement plus pratique que de faire une installation sur mon environnement.",
    ],
    flexible: [
      "Mes nombreux voyages m'ont appris entre autre à m'intégrer. Je sais m'adapter et fait preuve de flexibilité comme nous l'enseigne les méthodes Agile.",
      "Je sais m'adapter que cela soit à une situation ou une nouveauté.",
      "Changer de carrière est, je pense le meilleur exemple pour vous montrer que je sais m'adapter.",
    ],
    scrum: [
      "J'ai été formé à la méthodologie SCRUM et je m'intéresse à d'autres méthodes Agile, comme la TDD et Xtreme Programming.",
      "J'ai été formé à la méthodologie SCRUM pendant plus d'un mois chez Diginamic. Je l'ai pratiqué avec les autres apprenants sur plusieurs projets.",
    ],
    anglais: [
      "Ayant vécu à l'étranger pendant plusieurs années, je suis à l'aise dans un environnement anglophone. J'ai tendance à penser en anglais quand je code. Mes commentaires le sont par défaut. J'écris à l'occasion des articles.",
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
   * @param skill !! Important !! this.comments[skill.name.toLowerCase()][i]
   * @param percentage Lowest percentage (10) = greatest priority
   * @returns
   */
  chooseAComment(skill: Skills, percentage: number): string {
    let content = '';
    if (skill.name === this.AUTRE) {
      return this.comments[skill.name.toLowerCase()][0];
    } else if (percentage === 10) {
      if (
        [this.LANGUAGE, this.FRAMEWORK, this.TEST, this.DEVOPS].includes(
          skill.type
        )
      ) {
        const choice =
          skill.name === this.ENGLISH ? `l'${skill.name}` : skill.name;
        content = `Vous recherchez particulièrement un développeur connaissant ${choice}. `;
      }
      // TODO Custom comment for Flexible et SCRUM
      content += this.comments[skill.name.toLowerCase()][0];
    } else {
      // TODO Custom for other percentages
      content += this.comments[skill.name.toLowerCase()][0];
    }
    return content;
  }
}
