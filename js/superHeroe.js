import { Personaje } from "./personaje.js";

export class SuperHeroe extends Personaje
{
    static idAutoIncremental = parseInt(localStorage.getItem("idAutoIncremental"))||0;
    constructor(id,nombre,fuerza,alias,editorial,arma)
    {
        super(id,nombre,fuerza);
        this.id = SuperHeroe.generaNuevoId();
        this.alias = alias;
        this.editorial = editorial;
        this.arma = arma;
    }

    get Id()
    {
        return this.Id;
    }

    get Alias()
    {
        return this.alias;
    }

    get Editorial()
    {
        return this.editorial;
    }

    get Arma()
    {
        return this.arma;
    }

    set Arma(value)
    {
        if(value == "Armadura" || value == "Espada" || 
        value == "Martillo" || value == "Arma de Fuego" || value == "Flechas")
        {
            this.arma = value;
        }
        else
        {
            this.arma = "Sin arma";
        }
    }

   set Alias(value)
   {
       
        const max = 500;
        if(value.lenght < max)
        {
            this.alias = value;
        }
        else
        {
            this.alias = "sin alias";
        }
   }

   set Editorial(value)
   {
        if(value == "Marvel" || value == "DC")
        {
            this.editorial = value;
        }
        else
        {
            this.Editorial = value;
        }
        
   }
    static generaNuevoId()
    {
        const nuevoId = ++SuperHeroe.idAutoIncremental;
        localStorage.setItem("idAutoIncremental",nuevoId.toString());
        return nuevoId;    
    }


}