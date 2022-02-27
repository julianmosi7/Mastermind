import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {
  @Input() availableColors: String[];
  @Input() selectedColor: String;
  
  @Output() colorChosen =  new EventEmitter<String>();

  chosenColor: String;

  showDropdownBtn: boolean = true;
  showColorBtn: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(`selectedColor: ${this.selectedColor}`)
      if(this.selectedColor != null){
        this.showDropdownBtn = false,
        this.chosenColor = this.selectedColor;
        this.showColorBtn = true;
        this.showDropdownBtn = false;
      }else{
        console.log("selectedColor == null");
        this.showDropdownBtn = true;
        this.showColorBtn = false;
      }

  }

  colorChosenComponent(color: String): void {
      this.showColorBtn = true;
      this.showDropdownBtn = false;
      
      this.chosenColor = color;
      this.colorChosen.emit(color);
  }
}
