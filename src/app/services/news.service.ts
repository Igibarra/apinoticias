import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';
const apiKey = environment.apiKey;
import { Article, NewsResponse } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http:HttpClient) { }
  
  getTopHeadLines(){

    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=mx&category=sports`, {
      params : {
        apiKey : apiKey
      }
    }).pipe(
      map ( ({articles})=> articles)
    );
  }
}


