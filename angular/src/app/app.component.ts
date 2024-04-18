import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconComponent, IgxOverlayOutletDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxToggleDirective, IgxIconComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
