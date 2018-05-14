import { Component, OnInit } from '@angular/core';
import {Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-imdbpagination',
  templateUrl: './imdbpagination.component.html',
  styleUrls: ['./imdbpagination.component.scss']
})
export class ImdbpaginationComponent  {


  constructor(private http: HttpClient) {}
  private _search: string = "Search by "
  title = "";
  result;
  searchTitle(replaced: string) {
    this.http.get(`http://www.omdbapi.com/?s=${replaced}&page=1&apikey=8e070606`)
    .subscribe(
      (res: Response) => {
        this.result = res;
        console.log(res);
      }
    )
  }
  get Search() {
    return this._search;
  }
  set Search(value: string) {
    this._search = value;
    var replaced = value.split(' ').join('+');
    this.searchTitle(replaced);
  }
}