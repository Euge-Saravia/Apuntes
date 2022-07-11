let users = [
    {
        nombre: 'Moises',
        apellido: 'Ruiz Diaz',
        mail: 'moises@acamica.com',
        user: 'moi',
        pass: 'moi123',
        activo: true
    },
    {
        nombre: 'Luciana',
        apellido: 'Lauga',
        mail: 'luciana@acamica.com',
        user: 'lu',
        pass: 'lu123',
        activo: true
    },
    {
        nombre: 'Girlesa',
        apellido: 'Quintero',
        mail: 'girlesa@acamica.com',
        user: 'gir',
        pass: 'gir123',
        activo: true
    }
   ];
   let validator = () => {
       let user = prompt("Ingrese su usuario");
       let pass = prompt("Ingrese su contraseña");
       try {
           for (let i = 0; i < users.length; i++) {
               if (users[i].user === user && users[i].pass === pass && users[i].activo === true){
                   alert(`Bienvenido ${users[i].nombre} usted es un usuario valido`);
               }
               else {
                   throw new Error("Acceso denegado..... XD");
               }
           }
       } catch (error) {
           alert(error)
       }
   }