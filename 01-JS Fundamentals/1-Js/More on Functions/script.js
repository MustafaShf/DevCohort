const greet=
(something)=>{
   return (anotherthing)=>
    {
        console.log(`${something} say ${anotherthing}`);
    }
}

greet('mustafa')('WTF');