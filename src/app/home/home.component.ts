import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    constructor(private httpClient: HttpClient) { }
    //public jsonObject: JSON;
    public  pokemonList: object[] = [];
      ExtendedPokemonList: Array<any> = [];
    ngOnInit() {
        console.log("start");

        fetch('https://pokeapi.co/api/v2/pokemon?limit=18').then(res => res.json()).then(
            async res => {

                this.pokemonList = res.results;
                this.pokemonList.forEach(element => {
                    console.log(element);
                });
                await this.bulidTable();
                var a="";
            });
    }


    async bulidTable() {

       await this.pokemonList.forEach(element => {

            let pok = element as any;

            fetch(pok.url).then(res => res.json()).then(

                res => {

                    let name = res.name;
                    let photo = res.sprites.front_default;
                    this.ExtendedPokemonList.push({ name: name, photo: photo });

                });

        });


    }

}