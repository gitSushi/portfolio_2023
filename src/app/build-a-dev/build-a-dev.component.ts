import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';

interface Dragged {
  skill: string;
  index: number;
}

@Component({
  selector: 'app-build-a-dev',
  templateUrl: './build-a-dev.component.html',
  styleUrls: ['./build-a-dev.component.css'],
})
export class BuildADevComponent implements OnInit {
  // @ViewChild('gauge') gauge: ElementRef = {} as ElementRef;
  @ViewChild('output') output: ElementRef = {} as ElementRef;
  @ViewChildren('skill') skillQueryList!: QueryList<ElementRef>;

  percentage = 0;
  skills: string[] = [
    'Java',
    'TypeScript',
    'Python',
    'GoLang',
    'Angular',
    'Spring',
    'React',
    'JestJs',
    'Docker',
    'Adaptable',
    'Agile',
    'English',
  ];
  praises: string[] = [
    'Good choice !',
    'Remarkable.',
    'I like that too !',
    'It is indeed useful.',
    'You cannot go wrong with that choice.',
  ];
  dragged: Dragged = {} as Dragged;

  constructor(private root: ElementRef, private renderer: Renderer2) {}

  /**
   * Initialize the mask (actually a clip-path) of the picture (the dev)
   */
  ngOnInit(): void {
    this.root.nativeElement.style.setProperty(
      '--total-selected-in-percentage',
      `${this.percentage}%`
    );
  }

  /**
   * Helper method to add a li html element to the output
   * @param output some comment
   */
  addLi(output: string) {
    const li = this.renderer.createElement('li');

    this.renderer.setProperty(li, 'innerHTML', output);
    this.renderer.appendChild(this.output.nativeElement, li);
  }

  /**
   * Helper method to choose a comment to add to the output new li element
   * @returns string
   */
  randomComment() {
    return this.praises[Math.floor(Math.random() * this.praises.length)];
  }

  /**
   * Helper method to modify the DOM once the game is over.
   * For instance, the output element's border becomes green
   * and the draggable skills become disabled.
   */
  modifyDomRender() {
    this.output.nativeElement.style.setProperty(
      'box-shadow',
      '0 0 0 2px var(--green)'
    );
    this.skillQueryList.forEach((elRef) => {
      elRef.nativeElement.style.setProperty('opacity', 0.5);
      elRef.nativeElement.style.setProperty('cursor', 'text');
      this.renderer.setAttribute(elRef.nativeElement, 'draggable', 'false');
    });
  }

  /**
   * The following 3 methods are the drag events.
   * 1_dragStart: set the draggable item for transfer
   * 2_dragOver: preventDefault
   * 3_drop: necessary changes in case of a valid drop
   * For instance, building the dev (unmask picture), add to the output
   * and in case of win dom changes.
   */

  handleDragStart(event: DragEvent, obj: Dragged) {
    this.dragged = obj;
    event.dataTransfer?.setData(
      'text',
      (event.target as HTMLElement).innerHTML
    );
    event.dataTransfer && (event.dataTransfer.effectAllowed = 'move');
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer && (event.dataTransfer.dropEffect = 'move');
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();

    const target = event.target as HTMLElement;

    if (target.parentElement?.dataset['dropzone'] === 'dropzone') {
      if (event.dataTransfer) {
        this.skills.splice(this.dragged.index, 1);

        this.root.nativeElement.style.setProperty(
          '--total-selected-in-percentage',
          `${(this.percentage += 10)}%`
        );

        if (this.percentage === 100) {
          const output = `I am also an expert in ${this.dragged.skill}. You did it, you build the perfect dev for you ! It is ME !! Now click on contact in the navbar and hire me !`;
          this.addLi(output);
          this.modifyDomRender();
        } else if (this.percentage < 100) {
          const output = `${this.randomComment()} I am indeed an expert in ${
            this.dragged.skill
          } !`;
          this.addLi(output);
        }
      }
    }
  }
}
