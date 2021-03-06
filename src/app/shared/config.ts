import {Injectable} from '@angular/core';
import {Headers}    from '@angular/http';

@Injectable()
export class CONFIG {
    private static baseURL: string = 'https://services.wim.usgs.gov/nssservicestest/';

    public static get REGION_URL(): string { return this.baseURL + 'regions' };
    public static get REG_REGION_URL(): string { return this.baseURL + 'regressionregions' };
    public static get CITATION_URL(): string { return this.baseURL + 'citations' };
    public static get STATISTICGRP_URL(): string { return this.baseURL + 'statisticgroups' };

    public static get MIN_JSON_HEADERS() { return new Headers({ 'Accept': 'application/json' }) };
    public static get JSON_HEADERS() { return new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }) };

}