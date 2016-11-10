import { Injectable, Inject } from '@angular/core';

import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {CONFIG}     from '../shared/config';
import { ICitation } from '../shared/citation';
//import { IRegressionRegion } from '../shared/regressionRegion';

const OPTIONS = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS });
@Injectable()
export class CitationService {
    constructor( @Inject(Http) private _http: Http) { }

    getCitations(searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: CONFIG.MIN_JSON_HEADERS, search: searchArgs });

        return this._http.get(CONFIG.CITATION_URL, options)
            .map(cit => <ICitation[]>cit.json())
            .catch(this.handleError);
    }

    getCitation(id: number) {
        
        return this._http.get(CONFIG.CITATION_URL + '/' + id, OPTIONS)
            .map(cit => <ICitation>cit.json())
            .catch(this.handleError);     
    }

    getRegressionRegionCitations(id: number) {
        return this._http.get(CONFIG.CITATION_URL + '?regressionregions=' + id, OPTIONS)
            .map(cit => <ICitation[]>cit.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}