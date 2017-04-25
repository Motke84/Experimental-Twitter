import { FormGroup, FormControl } from '@angular/forms';
import { TwitAutorsService } from '../twiter/twitAutors.service';
import { TwiterAutor } from '../Models/twiter.Autor.Model';
import { Component, OnInit } from '@angular/core';


export class PasswordValidator {


    static passwordNotMatch(group: FormGroup) {
        var ctrl1 = group.controls['controlName1'];
        var ctrl2 = group.controls['controlName2'];

        if (ctrl1.value != ctrl2.value) {
            return {
                PasswordNotMatch: true,
            };
        }
        return null;



    }

    static passwordNotMatch2 = (controlName1: string, controlName2: string) => {
        return (group: FormGroup) => {
            var ctrl1 = group.controls[controlName1];
            var ctrl2 = group.controls[controlName2];
          //  console.log(ctrl1.value);
         //   console.log(ctrl2.value);
            if (ctrl1.value != ctrl2.value) {
                return {
                    passwordNotMatch: true,
                };
            }
            return null;
        };
    };

}


