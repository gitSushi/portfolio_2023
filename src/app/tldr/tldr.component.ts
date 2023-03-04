import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface SmsList {
  recruiterContent: string;
  candidateContent: SafeHtml;
}

@Component({
  selector: 'app-tldr',
  templateUrl: './tldr.component.html',
  styleUrls: ['./tldr.component.css'],
})
export class TldrComponent implements OnInit {
  style = `style="display: inline-block; margin-bottom: 1em;"`;

  smsList: SmsList[] = [
    {
      recruiterContent: `Bonjour. Pourriez-vous vous présenter brièvement ?`,
      candidateContent: `Je m'appelle Jonathan, j'ai 41 ans.
                <br />
                J'ai été accepté pour une alternance avec le centre de formation
                Diginamic.
                <br />
                Je cherche une entreprise pour m'accueillir du 15/03/2023 au
                16/09/2024.`,
    },
    {
      recruiterContent: `Vous êtes donc en reconversion professionnelle. Pouvez-vous nous
      parler de votre expérience ?`,
      candidateContent: `En tant qu'artiste indépendant, j'étais autonome, curieux et
      organisé. Mon passé me sert aujourd'hui pour la conception de
      projet et un regard attentionné sur l'UX et l'UI.
      <br />
      Ma passion pour les sciences informatiques et le web en
      particulier font de moi un développeur fullstack.`,
    },
    {
      recruiterContent: `Quels outils connaissez-vous ?`,
      candidateContent: `<span style="display: inline-block; margin-bottom: 1em;">
      J'ai une appétence pour les langages objet, en particulier Java
      et TypeScript. J'ai déjà codé des petits projets en Angular et
      Spring Boot.
      <br />
      Mon editeur de texte préféré est VSCode, pour sa possibilité
      d'attacher des conteneurs Docker et de facilement gérer ses
      repositories.
    </span>
    Je m'intéresse également à l'Extreme Programming et la TDD. J'ai
    donc appris à utiliser JestJS pour tester mon code.`,
    },
    {
      recruiterContent: `Pour finir, quels sont vos centres d'intérêts ?`,
      candidateContent: `En ce moment, je lis <q>Head First, Design Pattern</q> et
      pratique au fur et à mesure. Je garde un repo github de mes notes.
      <br />
      <span style="display: inline-block; margin-bottom: 1em;">
        Je parcours également des articles sur la blockchain,
        l'intelligence artificielle (neural network) et les WebSockets.
      </span>
      <span style="display: inline-block; margin-bottom: 1em;">
        Je pratique les directives en Angular et j'ai un intérêt
        grandissant pour le Web Assembly que j'ai testé en Golang.
      </span>
      Pour me détendre, je dessine. J'aime bien Blender pour
      l'animation. Je fais des icônes en SVG et du pixel art.`,
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.smsList.forEach((sms) => {
      sms.candidateContent = this.sanitizer.bypassSecurityTrustHtml(
        sms.candidateContent.toString()
      );
    });
  }
}
