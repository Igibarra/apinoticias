import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import {OnInit} from '@angular/core'
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces';

const apiKey= environment.apiKey

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public articles: Article[] = [];
  
  constructor( private NewService: NewsService) {}

  ngOnInit(){
    this.NewService.getTopHeadLines()
      .subscribe( articles => this.articles.push(...articles));
  }

}
