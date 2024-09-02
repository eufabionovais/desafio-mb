import { ref } from 'vue';
import { isCnpjValid, isCpfValid, isDateValid, isEmailValid, isMaxLength, isMinLength } from "../validators/validations";

export function useValidation() {

  const errors = ref({});

  const validateField = (field, value) => {

    errors.value[field] = '';

    switch(field) {
      case 'email' : 
        if(!value || !isEmailValid(value)) {
          errors.value.email = "Por favor, adicione um e-mail válido."
        }    
        break;

      case 'name' : 
        if(!value) {
          errors.value.name = "Insira seu nome."
          return 
        }    

        if(isMinLength(value, 2)) {
          errors.value.name = "O nome deve ter ao menos 2 caractéres."
        }   
        break;    
      
      case 'companyName' : 
        if(!value) {
          errors.value.companyName = "Insira a razão social."
          return 
        }    

        if(isMinLength(value, 2)) {
          errors.value.companyName = "A razão social deve ter ao menos 2 caractéres."
        }   
        break;            
        

      case 'type' : 
        if(!value) {
          errors.value.type = "Selecione o tipo de pessoa."
        }    
        break;        

      case 'cpf' : 
        if(!value || !isCpfValid(value)) {
          errors.value.cpf = "Por favor, insira um CPF válido."
        }
        break;

      case 'cnpj' : 
        if(!value || !isCnpjValid(value)) {
          errors.value.cnpj = "Por favor, insira um CNPJ válido."
        }
        break;

      case 'birthDate' : 
        if(!value || !isDateValid(value)) {
          errors.value.birthDate = "Por favor, insira um data válida."
        }      
        break;

      case 'phone' : 
        if(!value) {
          errors.value.phone = "Por favor, insira um telefone válido."
          return
        }   
        if(value.length < 10 || value.length > 11 ) {
          errors.value.phone = "O número de telefone deve ter entre 10 e 11 dígitos."
          return
        }      

        break;


      case 'openingDate' : 
        if(!value || !isDateValid(value)) {
          errors.value.openingDate = "Por favor, insira um data válida."
        }      
        break;

      case 'password' : 
        if(!value) {
          errors.value.password = "Insira sua senha"
          return
        }   
        
        if(value.length < 6) {
          errors.value.password = "Sua senha deve ter ao menos 6 dígitos"
          return
        }
      
        break;        

      case 'minLength' : 
        if(!value || isMinLength(value, valueMinLength)) {
          errors.value[field] = `O campo ${field} requer ao menos ${valueMinLength} caractéres.` 
        }         
        break;

      case 'maxLength' : 
        if(!value || isMaxLength(value, valueMaxLength)) {
          errors.value[field] = `O campo ${field} requer no máximo ${valueMaxLength} caractéres.` 
        }        
        break;

    

      default:
        if(!value) {
          errors.value[field] = `Esse campo é obrigatório.` 
        }   
        break;

    };
  }

  
  const validateAllFields = (fields) => {

    fields.forEach((item) => {   
      validateField(item.field, item.value)
    })

    return !Object.values(errors.value).some((error) => {
      return error !== ''
    })
    
    // return !Object.values(errors.value).some((error) => error !== '');
  };


  return {
    errors,
    validateField,
    validateAllFields
  }


}