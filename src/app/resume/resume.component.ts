import { Component, OnInit } from '@angular/core';
import { faKeyboard} from '@fortawesome/free-solid-svg-icons';
import { faWrench} from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  faKeyboard = faKeyboard;
  faWrench = faWrench;
  faUserGraduate = faUserGraduate;

  constructor() { }

  ngOnInit() {
  }

}
