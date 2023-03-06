import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Skills } from './skills';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-build-a-dev',
  templateUrl: './build-a-dev.component.html',
  styleUrls: ['./build-a-dev.component.css'],
})
export class BuildADevComponent implements OnInit {
  @ViewChild('output') output: ElementRef = {} as ElementRef;
  @ViewChildren('skill') skillQueryList!: QueryList<ElementRef>;

  @ViewChild('dreamdev') dreamdev: ElementRef = {} as ElementRef;

  percentage = 0;
  skills: Skills[] = [];
  praises: string[] = [];
  dragged: Skills = {} as Skills;

  constructor(
    private root: ElementRef,
    private renderer: Renderer2,
    private skillService: SkillsService
  ) {}

  /**
   * Initialize the mask (actually a clip-path) of the picture (the dev)
   */
  ngOnInit(): void {
    this.root.nativeElement.style.setProperty(
      '--total-selected-in-percentage',
      `${this.percentage}%`
    );
    this.skills = this.skillService.skills;
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

  handleDragStart(event: DragEvent, obj: Skills) {
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
        console.log(this.skills.indexOf(this.dragged));
        this.skills.splice(this.skills.indexOf(this.dragged), 1);

        this.root.nativeElement.style.setProperty(
          '--total-selected-in-percentage',
          `${(this.percentage += 10)}%`
        );

        const output = this.skillService.chooseAComment(
          this.dragged,
          this.percentage
        );

        if (this.percentage === 100) {
          this.addLi(output);
          this.modifyDomRender();
          this.dreamdev.nativeElement.scrollIntoView({ behaviour: 'smooth' });
        } else if (this.percentage < 100) {
          this.addLi(output);
        }
      }
    }
  }
}
