export as namespace CompassMap;

interface StoreState {
	prefecture: string;
}

interface SearchQuery {
    event_id:number[],
    keyword:string[],
    keyword_or:string[],
    ym:number[],
    ymd:number[],
    nickname:string[],
    owner_nickname:string[],
    series_id:number[],
    start:number;
    order:number,
    cound:number,
    format:"json"
}

export { StoreState };
