import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  aparecer: boolean = true;

  @Input() pai: string = 'teste de compartilhamento de dados entre components'

  constructor() {}

  ngOnInit(): void {}

  AparecerItensDisponiveis() {
    if (this.aparecer) {
      this.aparecer = this.aparecer = false;
    } else {
      this.aparecer = true;
    }
  }
}
