export interface HtmlFormElements{
    id:number;          //always unique
    type:string;
    name:string;
    label:string;
    placeholder:string;
    options:HtmlFormElementsOption[];
    min?:number;
    max?:number;
    required:boolean;
    nextElement?:number;         //only 1 element can have null
    isFirstElement:boolean;     //only 1 element can have true
}

export interface HtmlFormElementsOption{
    label:string;
    value:string;
    selected:boolean;
}
