import {Component} from '@angular/core';
import {NgxAdDfpSettings} from '../../projects/ngx-ad-dfp/src/lib/ngx-ad-dfp-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-ad-dfp-lib';
  settings: NgxAdDfpSettings = new NgxAdDfpSettings({
    network: '208086926',
    ads: [
      {
        id: '1',
        tag: '1542912828431',
        mappings: [{
          ad: {
            width: 320,
            height: 50
          },
          device: {
            width: 320,
            height: 400
          }
        }]
      }
    ]
  });

  constructor() {
  }
}
