import { FormControl } from '@angular/forms';
import { TwitAutorsService } from '../twiter/twitAutors.service';
import { TwiterAutor } from '../Models/twiter.Autor.Model';
import { Component, OnInit } from '@angular/core';
export class UsernameValidator {



    static canntContainSpace(control: FormControl) {
        var space = control.value.indexOf(' ');
        if (space >= 0) {
            return {
                index: space,
                canntContainSpace: true,
            };
        }
        return null;
    }

    static shouldBeUnique2(control: FormControl) {
        return new Promise((resolve, reason) => {
            setTimeout(() => {
             //   console.log(UsernameValidator.autors);
            //    var user = UsernameValidator.autors.find(e => e.AutorUser == control.value);
              //   if( user != null)
             //       resolve({ shouldBeUnique: true });
           //     else
           //          resolve(null);
            }, 2000);
        });
    }

     static shouldBeUnique(control: FormControl) {
        return new Promise((resolve, reason) => {
            setTimeout(() => {
                console.log("Promise")
                var user = control.value;
                if( user == "moti")
                    resolve({ shouldBeUnique: true });
                else
                     resolve(null);
            }, 2000);
        });
    }
}


