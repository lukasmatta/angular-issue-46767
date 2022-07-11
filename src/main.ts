import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'sample-component',
  standalone: true,
  template: "<h1>Second component</h1>"
})
export class SecondComp {}
@Component({
  selector: 'sample-component',
  standalone: true,
  template: "<h1>First component</h1>"
})
export class FirstComp {}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComp, SecondComp],
  template: `
  <h4>I'd expect an error to be thrown, not FirstComp to be rendered two times :(</h4>
  <sample-component></sample-component>
  `
})
export class MainComponent {
  constructor() {
    // interesting fact and possible issue: ngDevMode is falsy when we build with "optimizations.scripts" set to true
    // I think that terser clears ngDevMode
    // try: ng serve --configuration=optimizedScripts
    // and you'll notice that ngDevMode is not set
    console.log((window as any).ngDevMode);
  }
}

bootstrapApplication(MainComponent);
