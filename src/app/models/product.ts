export class Product {
  id:number;
  name: string;
  description:string;
  price:number;
  imageUrl: string;


  constructor(id:number, name: string, description: string = '', price:number = 0, imageUrl: string = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa6%2FRubik%2527s_cube.svg%2F1966px-Rubik%2527s_cube.svg.png&imgrefurl=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3ARubik%2527s_cube.svg&tbnid=mXj4OdK3H0utvM&vet=12ahUKEwjbxPa-mtb0AhXI2-AKHRBnApcQMygLegUIARDWAg..i&docid=x6MzUnatTcvOlM&w=1966&h=2048&itg=1&q=cube%20rubik&ved=2ahUKEwjbxPa-mtb0AhXI2-AKHRBnApcQMygLegUIARDWAg'){
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}


