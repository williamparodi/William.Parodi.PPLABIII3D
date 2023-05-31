export class Personaje
{
   constructor(id,nombre,fuerza)
   {
      this.id = id;
      this.nombre = nombre;
      this.fuerza = fuerza;
   }

   get Id()
   {
       return this.id;
   }

   get Nombre()
   {
       return this.nombre;
   }

   set Id(value)
   {
       this.id = value;  
   }

   set Fuerza(value)
   {
        const max = 1000;
        if(!Array.prototype.length(value)<=max)
        {
            this.fuerza = value;
        }
   }

   set Nombre(value)
   {
       
        const max = 500;
        if(value.lenght < max)
        {
            this.nombre = value;
        }
        else
        {
            this.nombre = "sin nombre";
        }
   }






}