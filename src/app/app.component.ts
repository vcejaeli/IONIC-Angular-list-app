import { Component } from '@angular/core';
import { ChecklistService } from './services/checklist.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private checklistService:ChecklistService) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.checklistService.load();
  }
}
