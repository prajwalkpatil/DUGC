import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consolidated-sheet-upload',
  templateUrl: './consolidated-sheet-upload.component.html',
  styleUrls: ['./consolidated-sheet-upload.component.css'],
})
export class ConsolidatedSheetUploadComponent implements OnInit {
  constructor() {}
  inp = {
    academic_year: '2022-23',
    semester: '',
    type: '',
    exam: 'm1',
    file: '',
  };
  ngOnInit(): void {}
}
