import {Component, OnInit} from '@angular/core';
import {News} from "./news";
import {BodyService} from "./body.service";
import {AngularFireStorage} from "@angular/fire/storage";
import firebase from "firebase";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  news: News[] = [];
  totalPages: number;
  number: number;
  keyword = "";

  constructor(private newsService: BodyService,
              private afStorage : AngularFireStorage) {
  }

  ngOnInit(): void {
    this.getAll(0, this.keyword);
  }

  getAll(page: number, keyword): void {
    this.newsService.findAll(page, keyword).subscribe(({content, number: number, totalPages: totalPages}: any) => {
      this.totalPages = totalPages;
      this.number = number;
      this.news = content;
    });
  }

  previousPage() {
    let numberPage: number = this.number;
    if (numberPage > 0) {
      numberPage--;
      this.getAll(numberPage, this.keyword);
    }
  }

  nextPage() {
    let numberPage: number = this.number;
    if (numberPage < this.totalPages - 1) {
      numberPage++;
      this.getAll(numberPage, this.keyword);
    }
  }

  search() {
    this.newsService.findAll(this.number, this.keyword).subscribe(({content, number: number, totalPages: totalPages}: any) => {
      this.totalPages = totalPages;
      this.number = number;
      this.news = content;
    });
  }


}
