
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface FormComponent{
    hasUnsavedChanges() : Boolean;
}
