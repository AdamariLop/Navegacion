import { Alert } from 'react-native';

const URL_DATA = 'http://127.0.0.1:80/iot/data';

class API {
    async validarLog(user, pass){
        const query = await fetch(`${URL_DATA}login.php?user=${user}&pass=${pass}`);
        const data = await query.json();
        return data;
    }

    registerData(user, pass, correo){
        fetch(`${URL_DATA}registro.php`, {
            method: 'POST',
            body: JSON.stringify({
                pUser: user,
                pPass: pass,
                pCorreo: correo
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .catch(error => console.error('Error: ',error))
        .then(response => {
            if(response.status == 1){
                Alert.alert('¡Registro exitoso!');
            }else{
                Alert.alert('Ocurrió un error.');
            }
        });
    } //    END registerData
}

export default new API;