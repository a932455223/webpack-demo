import {Animals2}  from './animals2.js';
export class Cat{
	constructor(){
		this.species = 'Cat';
	}
}
//当Dog继承了Animals2，dog依旧会被编译
export class Dog extends Animals2{
	constructor(){
		super()
		this.species = 'Dog';
	}
}
//pig不会被编译
export class Pig {
	constructor(){
		this.species = 'Pig';
	}
}
