export type qtdButtonsProps = { 
    btnMore: string;
    btnMinus:string;
    qtyInput: string;
}

export type Elementprops = {
	elementType: keyof HTMLElementTagNameMap,
	onClick?: () => {},
	value?: string,
	text?: string,
	children?: [HTMLElement],
	classes?: [string]
	color?: string
	icon?:string,
	alt?:string,
	type?:string,
	placeholder?:string,
	id?:string,
	nameInput?:string,
	src?: string
	hover?:string,
	autoplay?:string,
	background?: string
	speed?: string
	width?:string,
	height?:string,
	loop?:string,
	href?:string,
	target?:string,
	inner?:string,
	title?:string,
	dataValue?:string
}

