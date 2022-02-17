import React from 'react';
import { useForm } from 'react-hook-form';

import {
    createMuiTheme,
    ThemeProvider,
    TextField,
    FormControl,
    Select,
    MenuItem,
    FormHelperText
  } from "@material-ui/core";




export default function Form() {
  const { register, handleSubmit,setValue , formState: { errors,  } } = useForm();
  const onSubmit = function() {
      
      if(errors){
          alert('клиент успешно создан');
      }
  }
 
  
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <label>
        ФИО
      <input type="text" id='full_name' placeholder="ФИО" {...register("full_name", {required: true,})} />
    
    </label>
    <div>
        {errors?.full_name && <p>Поле обязательно к заполнению</p>}
    </div>
    <label>
        Дата рождения
      <input type="date" placeholder="Дата Рождения" {...register("date_birth", {required: true,})} />
    </label>
    <div>
        {errors?.date_birth && <p>Поле обязательно к заполнению</p>}
    </div>
    <label>
      Телефон в формате: +7xxx-xxx-xx-xx
      <input type="tel"  placeholder="Номер телефона" {...register("telephone", {required: true, maxLength: 11, pattern: /79[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/i})} />
      </label>
      <div>
        {errors?.telephone && <p>Поле обязательно к заполнению</p>}
    </div>
    <label>
        Выберите пол:
      <select class='select' {...register}>
        <option value="men">Мужской</option>
        <option value="women">Женский</option>
      </select>
      </label>
      <label>
      Группа клиентов:
      <select class='select' {...register}>
        <option value="vip">VIP</option>
        <option value="problem"> Проблемные</option>
        <option value="oms"> ОМС</option>
        <option value="dms"> ДМС</option>
      </select>
      </label>
      
      <label>
      Лечащий врач:
      <select class='select' {...register} >
        <option value="petrov">Петров</option>
        <option value="zaharov"> Захаров</option>
        <option value="chernigovskaya"> Черниговская</option>
      </select>
      </label>
      <label>
      Не отправлять СМС:
      
      
 
      <div class="checkbox">
    <input type="checkbox" id="unchecked" class="checkbox-input" {...register("SMS", {})}/>
    <label for="unchecked" class="checkbox-label"></label>    
  </div>

      </label>
      <input type="submit" />
    
    </form>
   
  );
}