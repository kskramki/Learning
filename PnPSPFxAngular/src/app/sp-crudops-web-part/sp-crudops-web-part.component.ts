import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sp-crudops-web-part',
  templateUrl: './sp-crudops-web-part.component.html',
  styleUrls: ['./sp-crudops-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SpCrudopsWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
