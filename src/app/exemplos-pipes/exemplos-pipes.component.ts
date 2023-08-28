import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {

  livro: any = {
    titulo: 'Effective Java 3rd Edition',
    rating: 4.65432,
    numeroPaginas: 417,
    preco: 178.03,
    dataLancamento: new Date(2017, 11, 27),
    url: 'https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997/'
  };

  livros: string[] = ['Angular', 'Java'];

  filtro: string = '';

  addCurso(valor: any) {
    this.livros.push(valor);
  }

  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined) {
      return this.livros;
    }
    return this.livros.filter((v) => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }
  
}
