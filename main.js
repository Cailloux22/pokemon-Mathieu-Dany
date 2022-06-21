class Pokemon {
    static all_pokemons = [];
    constructor(_id, _name, _base_att, _base_def, _base_sta, _type, _catk, _fatk,_gen) {
        this.id = _id;
        this.name = _name;
        this.type = _type;
        this.base_attaque = _base_att;
        this.base_defense = _base_def;
        this.base_stamina = _base_sta;
        this.cattacks = _catk;
        this.fattacks = _fatk;
        this.gen=_gen;
    }
    getType() {
        return this.type;
    }
    getAttacks() {
        return "--------------charged_atk-------------" + "\n" + this.cattacks + "--------------fast_atk--------------\n" +
            this.fattacks;
    }
    getCmove(){
        return this.cattacks;
    }

    getFmove(){
        return this.fattacks;
    }

    toString() {
        return this.name + " Id : " + this.id + " Base Attaque : " + this.base_attaque + " Base Defense : " +
            this.base_defense + " Best Stamina : " + this.base_stamina + this.type + this.cattacks + this.fattacks +this.gen +"\n" + "\n" + "\n" + "\n";
    }

}




var key = Object.keys(type_effectiveness);//tableau de toute les types de pokemons

function import_pokemon() {
    let typePoke = [];
    this.CHmoves = [];
    this.FSmoves = [];
    let gen = Object.keys(tabgen[0]);
    let genPok;
    for (let i = 0; i < key.length; i++) {


        Type.all_types[key[i]] = new Type(key[i], type_effectiveness[key[i]]);//tableau de toute les instances de types de pokemons

    }
    for (let i = 0; i < charged_moves.length; i++) {


        Attack.all_attacks[charged_moves[i]['move_id']] = new Attack(charged_moves[i]);//tableau de toutes les instances d'attacks

    }
    for (let i = 0; i < fast_moves.length; i++) {


        Attack.all_attacks[fast_moves[i]['move_id']] = new Attack(fast_moves[i]);//tableau de toutes les instances d'attacks

    }


    for (let u = 0; u < pokemons.length; u++) {
        if (pokemons[u]['form'] == "Normal") {//pour chaque pokemon normal dans le tableau

            for (let i = 0; i < gen.length; i++) {
                tabgen[0][gen[i]].forEach(pokegen => {

                    if (pokegen['name'] ==pokemons[u]['pokemon_name']) {

                        genPok = pokegen['generation_number'];
                    }

                })


            }




            for (let i = 0; i < typePokemon.length; i++) {//pour chaque pokemon de pokemon type
                if (typePokemon[i]['form'] == "Normal" && pokemons[u]['pokemon_name'] == typePokemon[i]['pokemon_name']) {//si deux pokemons normaux on le meme nom
                    //alors
                    //charger les attaques
                    CHmoves = [];
                    FSmoves = [];
                    for (let Cmove = 0; Cmove < moveSets.length; Cmove++) {//pour chaque set d'attaque

                        if (moveSets[Cmove]['pokemon_name'] == pokemons[u]['pokemon_name'] && moveSets[Cmove]['form'] == "Normal") {// dont le nom est egal à pokemons[u]['pokemon_name'] et est de form normal
                            //charged moves
                            for (let i = 0; i < moveSets[Cmove]['charged_moves'].length; i++) {//pour chaque charged_moves dans le tableau du moveSets
                                for (let j = 0; j < charged_moves.length; j++) {//pour chaque element du tableau charged_moves
                                    if (moveSets[Cmove]['charged_moves'][i] == charged_moves[j]["name"]) {//s'il ont le meme nom
                                        this.CHmoves[this.CHmoves.length] = Attack.all_attacks[charged_moves[j]['move_id']];// ajouter les moves au tableau
                                    }
                                }
                            }
                            for (let k = 0; k < moveSets[Cmove]['elite_charged_moves'].length; k++) {//pour chaque charged_moves dans le tableau du moveSets

                                for (let l = 0; l < charged_moves.length; l++) {//pour chaque element du tableau charged_moves
                                    if (moveSets[Cmove]['elite_charged_moves'][k] == charged_moves[l]["name"]) {//s'il ont le meme nom
                                        this.CHmoves[this.CHmoves.length] = Attack.all_attacks[charged_moves[l]['move_id']];// ajouter les moves au tableau
                                    }
                                }
                            }

                            //fast moves
                            for (let i = 0; i < moveSets[Cmove]['fast_moves'].length; i++) {//pour chaque charged_moves dans le tableau du moveSets
                                for (let j = 0; j < fast_moves.length; j++) {//pour chaque element du tableau charged_moves
                                    if (moveSets[Cmove]['fast_moves'][i] == fast_moves[j]["name"]) {//s'il ont le meme nom
                                        this.FSmoves[this.FSmoves.length] = Attack.all_attacks[fast_moves[j]['move_id']];// ajouter les moves au tableau
                                    }
                                }
                            }
                            for (let k = 0; k < moveSets[Cmove]['elite_fast_moves'].length; k++) {//pour chaque charged_moves dans le tableau du moveSets

                                for (let l = 0; l < fast_moves.length; l++) {//pour chaque element du tableau charged_moves
                                    if (moveSets[Cmove]['elite_fast_moves'][k] == fast_moves[l]["name"]) {//s'il ont le meme nom
                                        this.FSmoves[this.FSmoves.length] = Attack.all_attacks[fast_moves[l]['move_id']];// ajouter les moves au tableau
                                    }
                                }
                            }

                        }
                    }


                    //charger les types
                    typePoke = [];//initialiser le tablo à 0 pour pas que bulbizarre soit de type psichik

                    for (let k = 0; k < typePokemon[i]['type'].length; k++) {//pour chaque type de pokemon que ce pokemon possède

                        for (let j = 0; j < key.length; j++) {
                            if (key[j] == typePokemon[i]['type'][k]) {

                                typePoke[k] = Type.all_types[key[j]];
                            }

                        }



                        Pokemon.all_pokemons[pokemons[u]['pokemon_id']] = new Pokemon(pokemons[u]['pokemon_id'],
                            pokemons[u]['pokemon_name'], pokemons[u]['base_attack'], pokemons[u]['base_defense'],
                            pokemons[u]['base_stamina'], typePoke, CHmoves, FSmoves,genPok);

                    }
                }
            }

        }
    }

}
//1. fonction getPokemonsByType(typeName) donnant la liste des Pokémons par type, celui-ci étant
//passé en argument
function getPokemonsByType(typeName) {
    var pokeType = [];
    Pokemon.all_pokemons.forEach(pokemon => {
        pokemon.getType().forEach(type => {
            if (type['name'] == typeName) {
                pokeType.push(pokemon['name']);
            }
        })
    });
    console.log(pokeType);
}
//2. fonction getPokemonsByAttack(attackName) donnant la liste des Pokémons par attaque, celle-ci
//étant passée en argument
function getPokemonsByAttack(attackName) {
    var pokeAtk = [];
    Pokemon.all_pokemons.forEach(pokemon => {
        pokemon.getCmove().forEach(cattacks => {
            if (cattacks['name'] == attackName) {
                pokeAtk.push(pokemon['name']);
            }
        })
        pokemon.getFmove().forEach(fattacks =>{
            if (fattacks['name']==attackName){
                pokeAtk.push(pokemon['name']);
            }
        })
    });
    console.log(pokeAtk);
}



//3. fonction getAttacksByType(typeName) donnant la liste des attaques par type, celui-ci étant passé
//en argument
function getAttacksByType(typeName) {
    var atkType = [];
    Attack.all_attacks.forEach(attack => {
        if (attack['type'] == typeName) {
            atkType.push(attack);
        }
    })
    console.log(atkType);
}

//4. fonction sortPokemonByName() donnant la liste des Pokemons triés par nom dans l’ordre alphabé-
//tique.
function SortArray(x, y) {
    if (x.name < y.name) { return -1; }
    if (x.name > y.name) { return 1; }
    return 0;
}
function sortPokemonByName() {
    var s = Pokemon.all_pokemons.sort(SortArray);
    console.log(s);
}

//5. fonction sortPokemonByStamina() donnant la liste des Pokémons triés dans l’ordre décroissant
//d’endurance (stamina).
function SortArrayStamina(x, y) {
    if (x.base_stamina < y.base_stamina) { return 1; }
    if (x.base_stamina > y.base_stamina) { return -1; }
    return 0;
}
function sortPokemonByStamina() {
    var s = Pokemon.all_pokemons.sort(SortArrayStamina);
    console.log(s);
}

//6. fonction getWeakestEnemies(attack) qui retourne la liste des Pokemon qui ont le moins de résis-
//tance à une attaque donnée choisie parmi les attaques du Pokémon.
function getWeakestEnemies(attack) {
    
    let efftab = [];
    let typatk;
    Attack.all_attacks.forEach(atk => {
        if (atk['name'] == attack) {
            typatk = atk['type'];
        }
    }); 
    Pokemon.all_pokemons.forEach(pokemon => {//pour chaque pokimon
        pokemon['type'].forEach(type => {//pour chaque type du pokemon
           //si le type du pokemon est dans effectiveness tab et est superieur à 1
           
            if(type_effectiveness[typatk][type['name']]>1){
                if(!(efftab[pokemon['name']])){
                    efftab[pokemon['name']]=1;
                }
                
                efftab[pokemon['name']]=efftab[pokemon['name']]*type_effectiveness[typatk][type['name']];

            }
        })
    })
    console.log(efftab);
}
//7. fonction getStrongestEnemies(attack) qui retourne la liste des Pokemon qui ont le plus de résis-
//tance à une attaque donnée choisie parmi les attaques du Pokémon.

function getStrongestEnemies(attack) {
    
    let efftab = [];
    let typatk;
    Attack.all_attacks.forEach(atk => {
        if (atk['name'] == attack) {
            typatk = atk['type'];
        }
    }); 
    Pokemon.all_pokemons.forEach(pokemon => {//pour chaque pokimon
        pokemon['type'].forEach(type => {//pour chaque type du pokemon
           //si le type du pokemon est dans effectiveness tab et est superieur à 1
           
            if(type_effectiveness[typatk][type['name']]<1){
                if(!(efftab[pokemon['name']])){
                    efftab[pokemon['name']]=1;
                }
                
                efftab[pokemon['name']]=efftab[pokemon['name']]*type_effectiveness[typatk][type['name']];

            }
        })
    })
    console.log(efftab);
}



import_pokemon();
//1//getPokemonsByType('Fire') ;
//2//getPokemonsByAttack('Bite')
//3//getAttacksByType('Bug');
//4//sortPokemonByName();
//5//sortPokemonByStamina();
//6//getWeakestEnemies('Bite');
//7//getStrongestEnemies('Bite')




// console.log(tabgen[0]['Generation 1']);
//console.log(Attack.all_attacks[13]);
//Shift + Alt + F