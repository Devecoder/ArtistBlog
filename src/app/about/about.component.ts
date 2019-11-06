import { AfterContentInit, Component, ViewChild } from '@angular/core';

import { FlexLayoutModule, MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterContentInit  {

  @ViewChild('grid', null) grid: MatGridList;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 2,
    sm: 2,
    xs: 1
  }

  constructor(private mediaObserver: MediaObserver) {}

  ngAfterContentInit() {
    this.mediaObserver.media$.subscribe((change:  MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

}
