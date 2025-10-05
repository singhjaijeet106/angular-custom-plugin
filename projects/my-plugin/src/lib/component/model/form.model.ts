export interface HtmlFormElements{
    id:number;
    type:string;
    name:string;
    label:string;
    placeholder:string;
    options:HtmlFormElementsOption[];
    min?:number;
    max?:number;
    required:boolean;
    nextElement:number;
    isFirstElement:boolean;
}

export interface HtmlFormElementsOption{
    label:string;
    value:string;
    selected:boolean;
}
