import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  aparecer = true;
  mais = 5;

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
