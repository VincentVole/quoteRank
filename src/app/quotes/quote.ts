export class Quote {
	quote: string = '';
	author: string = '';
	votes: number = 0;

	constructor(aQuote:string, aAuthor:string){
		this.quote = aQuote;
		this.author = aAuthor;
	}
}
