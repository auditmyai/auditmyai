import { TitleCasePipe } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    TitleCasePipe,
    IonLabel,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
  ],
})
export class FolderPage implements OnInit {
  public folder!: string;

  public title = "Audit My AI";

  public message = `Audit My AI is your one-stop consulting firm to find experts who can assess AI algorithms, large 
  language models and generate AI models to ensure organization in focus is complying with responsible-use and industry best practices.`;

  private activatedRoute = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get("id") as string;
  }
}
