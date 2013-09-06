/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


// Se ejecuta las condiciones iniciales de la aplicaición en el index.html como por ejemplo
// eventos sobre los componentes. Eventos más asociados a la presentación.
// El ingreso a onDeviceReady es delegado a "device.js"

function send_mail() {
    
    alert("Listo para enviar correo....... : ");
    
    var photo = localStorage.getItem('photo');
    if (photo){
        
        var split = photo.split('/');
        var i;
        var fullpath = "";
        
        for (i = 3; i < split.length; i++){
            fullpath = fullpath + "/" +split[i];
        }
        console.log("fullpath... : " + fullpath);
        window.plugins.emailComposer.showEmailComposerWithCallback(function(result){console.log(result);},"Send mail with photo","Take a look at <b>this<b/>:",["you_mail@gmail.com"],[],[],true,[fullpath]);
    } else {
        window.plugins.emailComposer.showEmailComposerWithCallback(function(result){console.log(result);},"Send mail with photo","Take a look at <b>this<b/>:",["you_mail@gmail.com"],[],[],true,null);
    }
}
