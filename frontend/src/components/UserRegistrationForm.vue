<template>
  <form @submit.prevent="handleSubmitForm">
    <fieldset v-if="currentStep === 1">
      <legend>
        Etapa {{ currentStep }} de {{ totalSteps }}
      </legend>

      <p>Boas vindas!</p>

      <div>
        <label for="userEmail">Endereço de e-mail</label>
        <input type="email" @keydown.enter.prevent id="userEmail" name="userEmail" v-model="step1.email" @blur="validateField('email', step1.email);">
        <span v-if="errors.email">{{ errors.email }}</span>
      </div>

      <div>
        <label for="individual">
          <input type="radio" id="individual" name="userType" value="pf" v-model="step1.type" @change="validateField('type', step1.type);">
            Pessoa Física
        </label>

        <label for="juridicalPerson">
          <input type="radio" id="juridicalPerson" name="userType" value="pj" v-model="step1.type" @change="validateField('type', step1.type);">
            Pessoa Jurídica
        </label>

        <span v-if="errors.type">{{ errors.type }}</span>
      </div>      

      
      <div>
        <button type="button" @click="goToNextStep()">Continuar</button>
      </div>
    </fieldset>

    <fieldset v-if="currentStep === 2">

      <legend>
        Etapa {{ currentStep }} de {{ totalSteps }}
      </legend>

      <div v-if="step1.type === 'pf'">
        <p>Pessoa Física</p>
        <div>
          <label for="userName">Nome</label>
          <input type="text" @keydown.enter.prevent id="userName" name="userName" v-model="step2.name" @blur="validateField('name', step2.name)">
          <span v-if="errors.name">{{ errors.name }}</span>
        </div>

        <div>
          <label for="userCpf">CPF</label>
          <input type="text" @keydown.enter.prevent id="userCpf" name="userCpf" v-model="step2.cpf"  @blur="validateField('cpf', step2.cpf)">
          <span v-if="errors.cpf">{{ errors.cpf }}</span>
        </div>

        <div>
          <label for="userBirthDate">Data de Nascimento</label>
          <input type="date" id="userBirthDate" name="userBirthDate" v-model="step2.birthDate"  @blur="validateField('birthDate', step2.birthDate)">
          <span v-if="errors.birthDate">{{ errors.birthDate }}</span>
        </div>

        <div>
          <label for="userPhoneNumber">Telefone</label>
          <input type="text" @keydown.enter.prevent id="userPhoneNumber" name="userPhoneNumber" v-model="step2.phone"   @blur="validateField('phone', step2.phone)">
          <span v-if="errors.phone">{{ errors.phone }}</span>
        </div>
      </div>

      <div v-if="step1.type === 'pj'">
        <p>Pessoa Jurídica</p>
        <div>
          <label for="companyName">Razão Social</label>
          <input type="text" @keydown.enter.prevent id="companyName" name="companyName"v-model="step2.companyName"   @blur="validateField('name', step2.companyName)">
          <span v-if="errors.companyName">{{ errors.companyName }}</span>
        </div>

        <div>
          <label for="companyRegistryNumber">CNPJ</label>
          <input type="text" @keydown.enter.prevent id="companyRegistryNumber" name="companyRegistryNumber"v-model="step2.cnpj"   @blur="validateField('cnpj', step2.cnpj)">
          <span v-if="errors.cnpj">{{ errors.cnpj }}</span>
        </div>

        <div>
          <label for="companyOpeningDate">Data de abertura</label>
          <input type="date" id="companyOpeningDate" name="companyOpeningDate"v-model="step2.openingDate"   @blur="validateField('openingDate', step2.openingDate )">
          <span v-if="errors.openingDate">{{ errors.openingDate }}</span>
        </div>

        <div>
          <label for="companyPhoneNumber">Telefone</label>
          <input type="text" @keydown.enter.prevent id="companyPhoneNumber" name="companyPhoneNumber"v-model="step2.phone"  @blur="validateField('phone', step2.phone)">
          <span v-if="errors.phone">{{ errors.phone }}</span>
        </div>
      </div>

 
      <div>
        <button type="button" @click="goToPreviousStep()">Voltar</button>
        <button type="button" @click="goToNextStep()">Continuar</button>
      </div>
    </fieldset>

    <fieldset v-if="currentStep === 3">
        <legend>
          Etapa {{ currentStep }} de {{ totalSteps }}
        </legend>

        <p>Senha de acesso</p>
        <div>
          <label for="userPassword">Sua senha</label>
          <input type="text" @keydown.enter.prevent id="userPassword" name="userPassword" v-model="step3.password" @blur="validateField('password', step3.password)">
          <span v-if="errors.password">{{ errors.password }}</span>
        </div>
        <div>
          <button type="button" @click="goToPreviousStep()">Voltar</button>
          <button type="button" @click="goToNextStep()">Continuar</button>
        </div>
    </fieldset>

    
    <fieldset v-if="currentStep === 4">
        <legend>
          Etapa {{ currentStep }} de {{ totalSteps }}
        </legend>
        <p>Revise suas informações</p>

        <div>
          <label for="userEmail">Endereço de e-mail</label>
          <input type="text" @keydown.enter.prevent id="userEmail" name="userEmail" v-model="step1.email" @blur="validateField('email', step1.email)">
          <span v-if="errors.email">{{ errors.email }}</span>
        </div>

        <div v-if="step1.type === 'pf'">
          <div>
            <label for="userName">Nome</label>
            <input type="text" @keydown.enter.prevent id="userName" name="userName" v-model="step2.name" @blur="validateField('name', step2.name)">
            <span v-if="errors.name">{{ errors.name }}</span>
          </div>

          <div>
            <label for="userCpf">CPF</label>
            <input type="text" @keydown.enter.prevent id="userCpf" name="userCpf" v-model="step2.cpf"  @blur="validateField('cpf', step2.cpf)">
            <span v-if="errors.cpf">{{ errors.cpf }}</span>
          </div>

          <div>
            <label for="userBirthDate">Data de Nascimento</label>
            <input type="text" @keydown.enter.prevent id="userBirthDate" name="userBirthDate" v-model="step2.birthDate"  @blur="validateField('birthDate', step2.birthDate)">
            <span v-if="errors.birthDate">{{ errors.birthDate }}</span>
          </div>

          <div>
            <label for="userPhoneNumber">Telefone</label>
            <input type="text" @keydown.enter.prevent id="userPhoneNumber" name="userPhoneNumber" v-model="step2.phone"  @blur="validateField('phone', step2.phone)">
            <span v-if="errors.phone">{{ errors.phone }}</span>
          </div>
        </div>

        <div  v-if="step1.type === 'pj'">
          <div>
            <label for="companyName">Razão Social</label>
            <input type="text" @keydown.enter.prevent id="companyName" name="companyName" v-model="step2.companyName"  @blur="validateField('companyName', step2.companyName)">
            <span v-if="errors.companyName">{{ errors.companyName }}</span>
          </div>

          <div>
            <label for="companyRegistryNumber">CNPJ</label>
            <input type="text" @keydown.enter.prevent id="companyRegistryNumber" name="companyRegistryNumber" v-model="step2.cnpj"  @blur="validateField('cnpj', step2.cnpj)">
            <span v-if="errors.cnpj">{{ errors.cnpj }}</span>
          </div>

          <div>
            <label for="companyOpeningDate">Data de abertura</label>
            <input type="text" @keydown.enter.prevent id="companyOpeningDate" name="companyOpeningDate" v-model="step2.openingDate"  @blur="validateField('openingDate', step2.openingDate)">
            <span v-if="errors.openingDate">{{ errors.openingDate }}</span>
          </div>

          <div>
            <label for="companyPhoneNumber">Telefone</label>
            <input type="text" @keydown.enter.prevent id="companyPhoneNumber" name="companyPhoneNumber" v-model="step2.phone"   @blur="validateField('phone', step2.phone)">
            <span v-if="errors.phone">{{ errors.phone }}</span>
          </div>
        </div>

        <div>
          <label for="userPassword">Sua senha</label>
          <input type="text" @keydown.enter.prevent id="userPassword" name="userPassword" v-model="step3.password"   @blur="validateField('password', step3.password)">
          <span v-if="errors.password">{{ errors.password }}</span>
        </div>
   
        <div>
          <button type="button" @click="goToPreviousStep()">Voltar</button>
          <button type="submit">Cadastrar</button>
        </div>
    </fieldset>


  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useValidation } from "../composables/useValidations";
const {errors, validateField, validateAllFields} = useValidation();

const currentStep = ref(1);
const totalSteps = ref(4);


const step1 = ref({
  email: '',
  type: ''
})

const step2 = ref({
  name: '',
  cpf: '',
  birthDate: '',
  phone: '',
  companyName: '',
  cnpj: '',
  openingDate: ''
})

const step3 = ref({
  password: ''
})






const goToNextStep = () => {
  const actualStep = validateStep(currentStep.value);

  if(actualStep.isValid) {
    currentStep.value ++;
  } 
}


const validateStep = (step) => {
  const steps = {
    1: validateStep1,
    2: validateStep2,
    3: validateStep3,
  }

  return steps[step]()
}


const validateStep1 = () => {
  const fieldsToValidate = [
    {field: 'email', value: step1.value.email},
    {field: 'type', value: step1.value.type},
  ]
  const isValid = validateAllFields(fieldsToValidate)

  return {
    isValid,
    fieldsToValidate
  }

}

const validateStep2 = () => {

  const fieldsToValidate = []

  if(step1.value.type === 'pf') {
      fieldsToValidate.push(
        {field: 'name', value: step2.value.name},
        {field: 'cpf', value: step2.value.cpf},
        {field: 'birthDate', value: step2.value.birthDate},
        {field: 'phone', value: step2.value.phone}
      )
  }

  if(step1.value.type === 'pj') {
    fieldsToValidate.push(
      {field: 'companyName', value: step2.value.companyName},
      {field: 'cnpj', value: step2.value.cnpj},
      {field: 'openingDate', value: step2.value.openingDate},
      {field: 'phone', value: step2.value.phone}
    )
  }

  const isValid = validateAllFields(fieldsToValidate)

  return {
    isValid,
    fieldsToValidate
  }

}


const validateStep3 = () => {
  const fieldsToValidate = [
    {field: 'password', value: step3.value.password},
  ]
  const isValid = validateAllFields(fieldsToValidate)

  return {
    isValid,
    fieldsToValidate
  }

}


const goToPreviousStep = () => {  
  currentStep.value --;
}

const handleSubmitForm = ()=> {

  const allFields = groupAllFieldsData();
  const isFormValid = validateAllFields(allFields);

  if(isFormValid) {
    submitForm(allFields)
  }   
}

  
const groupAllFieldsData = () => {
  const step1Fields = validateStep1().fieldsToValidate;
  const step2Fields = validateStep2().fieldsToValidate;
  const step3Fields = validateStep3().fieldsToValidate;

  const allFields = step1Fields.concat(step2Fields, step3Fields);

  return allFields;

}

const submitForm = async (allFields) => {

  const submitObject = allFields.map((fieldItem) => {
    return {
      [fieldItem.field]: fieldItem.value
    }
  })

 
  const response = await fetch('http://localhost:3000/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(submitObject)
  });

  const result = await response.json();
  if (response.ok) {
    alert(result.message);
  } else {
    alert(result.error);
  }
}

</script> 