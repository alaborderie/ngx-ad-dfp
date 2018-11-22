import {DfpAd} from './dfp-ad';

export class NgxAdDfpSettings {
  network = '';
  ads: DfpAd[] = [];
  adBlockDetector = false;

  constructor(settings?: any) {
    if (settings) {
      if (settings.network)
        this.network = settings.network;
      if (settings.ads)
        this.ads = settings.ads;
      if (settings.adBlockDetector)
        this.adBlockDetector = settings.adBlockDetector;
    }
  }
}
